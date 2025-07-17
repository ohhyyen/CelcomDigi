/// <reference path="../../deno.d.ts" />
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const update = await req.json();
    console.log('Received Telegram webhook update:', JSON.stringify(update, null, 2));

    const message = update.message;
    if (!message || !message.text) {
      return new Response(JSON.stringify({ message: 'No message text found in update.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200, // Always return 200 to Telegram to avoid retries
      });
    }

    // Extract session_id from the message text or reply_to_message
    // Assuming the agent replies to the bot's message which contains the session ID
    let sessionId = null;
    const replyToMessage = message.reply_to_message;
    if (replyToMessage && replyToMessage.text) {
      const match = replyToMessage.text.match(/\*Sesi:\s*([0-9a-fA-F-]+)\*/);
      if (match && match[1]) {
        sessionId = match[1];
      }
    }

    if (!sessionId) {
      console.warn('Could not extract session ID from Telegram message. Skipping DB insert.');
      return new Response(JSON.stringify({ message: 'Session ID not found in reply. Message not saved to DB.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'); // Use service role key for backend operations

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      throw new Error('Supabase URL or Service Role Key not configured.');
    }

    // Create Supabase client with service role key for inserting data
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        persistSession: false,
      },
    });

    // Insert agent's message into chat_messages table
    const { data: chatMessage, error: dbError } = await supabase
      .from('chat_messages')
      .insert({ session_id: sessionId, sender: 'agent', message_text: message.text })
      .select()
      .single();

    if (dbError) {
      console.error('Error inserting agent chat message into DB:', dbError);
      throw new Error(`Failed to save agent chat message: ${dbError.message}`);
    }

    return new Response(JSON.stringify({ message: 'Agent message received and saved successfully!', chatMessageId: chatMessage.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error in receive-telegram-webhook Edge Function:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});