"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquareText, Send, Loader2 } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid'; // Import uuid

interface ChatMessage {
  id: string; // Changed to string for UUID
  session_id: string; // Added session_id
  sender: 'user' | 'agent'; // Changed 'system' to 'agent'
  message_text: string; // Changed 'text' to 'message_text'
  created_at: string; // Changed 'timestamp' to 'created_at'
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize or retrieve session ID
  useEffect(() => {
    let currentSessionId = localStorage.getItem('chat_session_id');
    if (!currentSessionId) {
      currentSessionId = uuidv4();
      localStorage.setItem('chat_session_id', currentSessionId);
    }
    setSessionId(currentSessionId);

    // Load existing messages for this session
    const fetchMessages = async () => {
      if (currentSessionId) {
        const { data, error } = await supabase
          .from('chat_messages')
          .select('*')
          .eq('session_id', currentSessionId)
          .order('created_at', { ascending: true });

        if (error) {
          console.error('Error fetching chat history:', error);
          showError('Gagal memuatkan sejarah sembang.');
        } else {
          setChatHistory(data as ChatMessage[]);
        }
      }
    };
    fetchMessages();
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // Supabase Realtime subscription
  useEffect(() => {
    if (!sessionId) return;

    const channel = supabase
      .channel(`chat_session_${sessionId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${sessionId}`,
        },
        (payload) => {
          const newMessage = payload.new as ChatMessage;
          setChatHistory((prev) => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const handleSendMessage = async () => {
    if (message.trim() === '' || !sessionId) {
      showError('Sila taip mesej anda atau sesi tidak sah.');
      return;
    }

    setIsSending(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-chat-message', {
        body: { message: message.trim(), sessionId: sessionId },
      });

      if (error) {
        console.error('Error invoking Edge Function:', error);
        showError('Gagal menghantar mesej. Sila cuba lagi.');
      } else {
        console.log('Edge Function response:', data);
        // Message will be added to chatHistory via Realtime subscription
        setMessage('');
        showSuccess('Mesej anda telah dihantar!');
      }
    } catch (networkError) {
      console.error('Network or unexpected error:', networkError);
      showError('Ralat rangkaian. Sila semak sambungan anda.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50"
        size="icon"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquareText className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] p-0 flex flex-col h-[500px]">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="text-xl">Sembang Langsung</DialogTitle>
            <DialogDescription>
              Hantar mesej kepada pasukan sokongan kami.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-grow p-4 space-y-4">
            {chatHistory.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                Tiada mesej lagi. Hantar mesej pertama anda!
              </div>
            ) : (
              chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[70%] p-3 rounded-lg",
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800'
                    )}
                  >
                    <p className="text-sm">{msg.message_text}</p>
                    <span className="block text-xs opacity-75 mt-1">
                      {new Date(msg.created_at).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} /> {/* Scroll anchor */}
          </ScrollArea>
          <div className="p-4 border-t flex items-center space-x-2">
            <Textarea
              placeholder="Taip mesej anda..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="flex-grow resize-none"
              rows={1}
            />
            <Button onClick={handleSendMessage} disabled={isSending}>
              {isSending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LiveChat;