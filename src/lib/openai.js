// FRONTEND'DE OPENAI YOK.
// TÜM İSTEKLER BACKEND'E GİDİYOR.

const BASE_URL = "https://avo-backend-288x.onrender.com";

export async function askOpenAI(messagesOrPrompt, isChat = false) {
  const endpoint = isChat ? "/api/chat" : "/api/petition";

  const body = isChat
    ? { messages: messagesOrPrompt }
    : { prompt: messagesOrPrompt };

  try {
    const res = await fetch(BASE_URL + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!data || !data.reply) {
      throw new Error("Backend yanıt vermedi.");
    }

    return data.reply;
  } catch (err) {
    console.error("FETCH ERROR:", err);
    throw new Error("Bağlantı hatası oluştu.");
  }
}