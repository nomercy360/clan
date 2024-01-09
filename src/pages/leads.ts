import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = (await request.json()) as {
    email: string;
    contactName: string;
    brandInfo: string;
  };

  const email = data.email;
  const contactName = data.contactName;
  const brandInfo = data.brandInfo;

  const contact = `${contactName} <${email}>`;

  const message = `*New contact received*\n\n${contact}, with the following info:: 
  ---
  ${brandInfo}
  ---
  `;

  const chatId = import.meta.env.TELEGRAM_CHAT_ID;
  const botToken = import.meta.env.TELEGRAM_BOT_TOKEN;

  await sendTelegramMessage({ botToken, chatId, message });

  return new Response(JSON.stringify({ message: 'OK' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export async function sendTelegramMessage({
  botToken,
  chatId,
  message,
}: {
  botToken: string;
  chatId: string;
  message: string;
}) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    }),
  });

  return await response.json();
}
