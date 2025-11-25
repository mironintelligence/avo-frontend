// FRONTEND'DE ARTIK OPENAI YOK.
// TÜM İSTEKLER BACKEND'E GİDİYOR.

export async function askOpenAI(messagesOrPrompt, isChat = false) {
  const url = isChat ? "/api/chat" : "/api/petition";

  const body = isChat
    ? { messages: messagesOrPrompt }
    : { prompt: messagesOrPrompt };

  const res = await fetch("http://localhost:4000" + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data.reply;
}