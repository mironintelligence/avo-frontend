export default function Navbar({ setPage, openLegal }) {
  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="nav-logo">AVO AI</span>
        <span className="nav-sub">by Miron Intelligence</span>
      </div>

      <div className="nav-right">
        <button className="nav-btn" onClick={() => setPage("home")}>
          Ana Sayfa
        </button>

        <button className="nav-btn" onClick={() => setPage("pleadings")}>
          Dilekçe Üretici
        </button>

        <button className="nav-btn" onClick={() => setPage("chat")}>
          AI Danışman
        </button>

        <button className="nav-btn" onClick={() => openLegal("terms")}>
          Yasal
        </button>
      </div>
    </nav>
  );
}