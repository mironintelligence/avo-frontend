// FRONTEND'DE ARTIK OPENAI YOK.
// TÜM İSTEKLER BACKEND'E GİDİYOR.

const API_URL = "https://avo-backend-288x.onrender.com";

export async function askOpenAI(messagesOrPrompt, isChat = false) {
  const url = isChat ? "/api/chat" : "/api/petition";

  const body = isChat
    ? { messages: messagesOrPrompt }
    : { prompt: messagesOrPrompt };

  const res = await fetch(API_URL + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data.reply;
}