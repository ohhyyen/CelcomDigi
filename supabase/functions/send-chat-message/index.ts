/// <reference path="./deno.d.ts" />
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
    const { message, sessionId } = await req.json();

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY');
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!supabaseUrl || !supabaseAnonKey || !TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Supabase URL/Anon Key or Telegram secrets not configured.');
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Insert user message into chat_messages table
    const { data: userChatMessage, error: dbError } = await supabase
      .from('chat_messages')
      .insert({ session_id: sessionId, sender: 'user', message_text: message })
      .select()
      .single();

    if (dbError) {
      console.error('Error inserting user chat message into DB:', dbError);
      throw new Error(`Failed to save user chat message: ${dbError.message}`);
    }

    // Send user message to Telegram (for human agent awareness)
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const telegramMessage = `*Mesej Sembang Baru (Sesi: ${sessionId}):*\n\n${message}`;

    const telegramResponse = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Error sending chat message to Telegram:', errorData);
      // Do not throw error here, as we still want to send auto-reply
    }

    // Generate and insert automatic reply from the AI agent
    const autoReplyMessageText = `Hai! Terima kasih kerana menghubungi CelcomDigi. Mengenai promosi peranti iPhone kami, berikut adalah beberapa butiran penting:\n\n` +
                                 `* Promosi ini adalah untuk nombor pascabayar yang terpilih sahaja.\n` +
                                 `* Peranti yang ditawarkan adalah 100% original dengan jaminan selama 3 tahun.\n` +
                                 `* Untuk nombor pascabayar yang layak, anda hanya perlu membayar harga peranti sekali sahaja, tanpa perlu melanggan pelan pascabayar baharu.\n` +
                                 `* Promosi ini hanya boleh dituntut sekali sahaja (iaitu, 1 kad pengenalan / 1 nombor pascabayar yang layak / 1 peranti).\n\n` +
                                 `Sila masukkan nombor telefon anda di bahagian "Lihat Promosi Eksklusif Anda" di halaman utama untuk menyemak kelayakan anda!`;

    const { data: agentChatMessage, error: agentDbError } = await supabase
      .from('chat_messages')
      .insert({ session_id: sessionId, sender: 'agent', message_text: autoReplyMessageText })
      .select()
      .single();

    if (agentDbError) {
      console.error('Error inserting agent auto-reply into DB:', agentDbError);
      // Log the error but don't block the response to the user
    }

    return new Response(JSON.stringify({ message: 'Chat message sent and auto-reply generated!', userChatMessageId: userChatMessage.id, agentChatMessageId: agentChatMessage?.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error in send-chat-message Edge Function:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});