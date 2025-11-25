// src/pages/Chat.jsx
import { useState, useRef, useEffect } from "react";
import { askOpenAI } from "../lib/openai";
import "../chat.css";

export default function Chat() {
  // ------ LIMIT SİSTEMİ ------
  const MAX_MESSAGES = 20;     // 10 dakika ≈ 20 mesaj
  const STORAGE_KEY = "avo_ai_chat_count";

  const [msgCount, setMsgCount] = useState(
    Number(localStorage.getItem(STORAGE_KEY) || 0)
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, msgCount);
  }, [msgCount]);

  // ----------------------------

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "AVO AI • Hukuki Danışmanlığa Hoş Geldiniz. Size nasıl yardımcı olabilirim?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // --- LIMIT KONTROLÜ ---
    if (msgCount >= MAX_MESSAGES) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠ Ücretsiz sohbet limitinizi doldurdunuz. Premium paketler yakında aktif olacaktır.",
        },
      ]);
      return;
    }
    // -----------------------

    const userMsg = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    messages: [
      {
        role: "system",
        content:
          "Sen AVO AI - Hukuki AI Danışmanısın. Türk hukuk sistemiyle uyumlu şekilde sade, net ve bilgilendirme amaçlı cevap ver.",
      },
      ...messages,
      userMsg,
    ],
  }),
});

const data = await response.json();
const reply = data.reply;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply || "Bir cevap oluşturulamadı." },
      ]);

      setMsgCount(msgCount + 1); // mesaj sayısını artır
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Bir hata oluştu. Lütfen tekrar deneyin.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const clearChat = () =>
    setMessages([
      {
        role: "assistant",
        content:
          "Sohbet sıfırlandı. Yeni bir hukuki sorunuz varsa yazabilirsiniz.",
      },
    ]);

  return (
    <div className="chat-page">
      {/* ⚠ HUKUKİ UYARI (KÜÇÜK – SOL ALTA ÇEKİLMİŞ) */}
      <div className="chat-warning">
        ⚠ AVO AI resmi hukuki danışmanlık vermez. Yanıtlar yalnızca bilgilendirme amaçlıdır.
      </div>

      <div className="chat-container glass-m">
        <div className="chat-messages">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`chat-bubble ${
                m.role === "assistant" ? "assistant" : "user"
              }`}
            >
              {m.content}
            </div>
          ))}

          {loading && (
            <div className="chat-bubble assistant">Yazıyor...</div>
          )}

          <div ref={bottomRef}></div>
        </div>

        <div className="chat-input-row">
          <input
            className="chat-input"
            placeholder="Hukuki sorunuzu yazın..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
          />

          <button className="chat-send" onClick={sendMessage}>
            Gönder
          </button>

          <button className="chat-clear" onClick={clearChat}>
            Temizle
          </button>
        </div>
      </div>
    </div>
  );
}