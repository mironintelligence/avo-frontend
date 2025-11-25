// src/pages/Home.jsx
export default function Home({ setPage }) {
  return (
    <main className="page">

      {/* ========= HERO ========= */}
      <section className="hero glass">
        <div className="hero-left">
          <h1 className="hero-title">
            AVO AI
            <span>Yapay Zekâ Destekli Hukuk Platformu</span>
          </h1>

          <p className="hero-desc">
            Dilekçe oluşturma, hukuki açıklama, KVKK maskeleme ve içtihat analizi
            sağlayan premium legal-tech asistanı.
          </p>

          <div className="hero-buttons">
            <button
              className="btn primary"
              onClick={() => setPage("pleadings")}   // 🔥 DÜZELTİLDİ
            >
              🚀 Dilekçe Üret
            </button>

            <button
              className="btn secondary"
              onClick={() => setPage("chat")}        // 🔥 DÜZELTİLDİ
            >
              🤖 AI Danışman
            </button>
          </div>

          <p className="hero-note">
            ⚠️ Çıktılar yalnızca bilgilendirme amaçlıdır.
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-glow"></div>
          <div className="hero-stats glass-soft">
            <div><span>30+</span><label>Dilekçe kategorisi</label></div>
            <div><span>5 / gün</span><label>Ücretsiz dilekçe limiti</label></div>
            <div><span>10 dk</span><label>AI danışmanlık süresi</label></div>
          </div>
        </div>
      </section>

      {/* ========= NEDEN AVO AI ========= */}
      <section className="section">
        <h2 className="section-title">Neden AVO AI?</h2>

        <div className="why-grid">
          <div className="why-card glass-soft">
            <div className="why-icon">⚡</div>
            <div>
              <h3>Hızlı ve Profesyonel</h3>
              <p>Dilekçeleri ortalama 10 saniyede üretir.</p>
            </div>
          </div>

          <div className="why-card glass-soft">
            <div className="why-icon">🔐</div>
            <div>
              <h3>KVKK Uyumlu</h3>
              <p>TCKN, adres, telefon gibi verileri otomatik anonimize eder.</p>
            </div>
          </div>

          <div className="why-card glass-soft">
            <div className="why-icon">⚖️</div>
            <div>
              <h3>Yasal Format</h3>
              <p>HMK / TMK / İİK uyumlu resmi belge düzeni.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========= NASIL ÇALIŞIR ========= */}
      <section className="section">
        <h2 className="section-title">Nasıl Çalışır?</h2>

        <div className="steps-grid">
          <div className="step-card glass-soft">
            <span className="step-number">1</span>
            <h3>Formu Doldur</h3>
            <p>Temel olay anlatımını veya talebini gir.</p>
          </div>

          <div className="step-card glass-soft">
            <span className="step-number">2</span>
            <h3>AVO AI İşlesin</h3>
            <p>Gerekçe, istem, açıklama bölümleri oluşturulur.</p>
          </div>

          <div className="step-card glass-soft">
            <span className="step-number">3</span>
            <h3>İndir</h3>
            <p>DOCX • PDF • UDF formatlarıyla dışarı aktar.</p>
          </div>
        </div>
      </section>

      {/* ========= KULLANICI YORUMLARI ========= */}
      <section className="section">
        <h2 className="section-title">Kullanıcı Yorumları</h2>

        <div className="review-grid">
          <div className="review-card glass-soft">
            <h4 className="review-name">Ahmet K.</h4>
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p>“Dilekçe oluşturma kısmı mükemmel çalışıyor. Hızlı ve doğru.”</p>
          </div>

          <div className="review-card glass-soft">
            <h4 className="review-name">Merve T.</h4>
            <div className="review-stars">⭐⭐⭐⭐☆</div>
            <p>“AI danışmanı gerçekten faydalı, hukuki kavramları çok güzel sadeleştiriyor.”</p>
          </div>

          <div className="review-card glass-soft">
            <h4 className="review-name">Berkay S.</h4>
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p>“KVKK maskeleme özelliği işimi inanılmaz kolaylaştırdı.”</p>
          </div>
        </div>
      </section>

      {/* ========= SSS ========= */}
      <section className="section">
        <h2 className="section-title">Sıkça Sorulan Sorular</h2>

        <div className="faq">
          <details className="faq-item glass-soft">
            <summary>AVO AI hukuki tavsiye verir mi?</summary>
            <p>Hayır. Tüm çıktılar sadece bilgi amaçlıdır.</p>
          </details>

          <details className="faq-item glass-soft">
            <summary>Verilerim saklanıyor mu?</summary>
            <p>Hayır, metinler kalıcı olarak kaydedilmez.</p>
          </details>

          <details className="faq-item glass-soft">
            <summary>Hangi formatlarda indirebilirim?</summary>
            <p>DOCX • PDF • UDF desteklenir.</p>
          </details>
        </div>
      </section>

      {/* ========= FOOTER ========= */}
      <footer className="footer">
        <p className="footer-text">
          © 2025 <span>Miron Intelligence</span> — Tüm Hakları Saklıdır.
        </p>

        <p className="footer-support">
          Destek: <a href="mailto:mironintelligence@gmail.com">mironintelligence@gmail.com</a>
        </p>
      </footer>

    </main>
  );
}
