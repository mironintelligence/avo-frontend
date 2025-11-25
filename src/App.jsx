// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Pleadings from "./pages/Pleadings";
import Chat from "./pages/Chat";
import LegalModal from "./components/LegalModal";

import "./index.css";
import "./pleadings.css";
import "./chat.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [legal, setLegal] = useState(null);

  return (
    <>
      <Navbar
        setPage={setPage}
        openLegal={(x) => setLegal(x)}
      />

      {page === "home" && <Home setPage={setPage} />}
      {page === "pleadings" && <Pleadings />}
      {page === "chat" && <Chat />}

      {legal && (
        <LegalModal
          legal={legal}
          onClose={() => setLegal(null)}
        />
      )}
    </>
  );
}