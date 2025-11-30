export async function askOpenAI(messagesOrPrompt, isChat = false) {
  const endpoint = isChat ? "/api/chat" : "/api/petition";

  const body = isChat
    ? { messages: messagesOrPrompt }
    : { prompt: messagesOrPrompt };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return data.reply;
  } catch (err) {
    console.error("FETCH ERROR:", err);
    throw new Error("Bağlantı hatası oluştu.");
  }
}