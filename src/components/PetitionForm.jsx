export default function PetitionForm() {
  return (
    <section className="section glass">
      <h2 className="section-title left">Dilekçe Üretici</h2>
      <p className="section-desc">
        Bu alan, kategori seçimi ve form alanları ile entegre dilekçe üretim ekranı
        için ayrılmıştır. Şu an demo amaçlı basit bir yer tutucu olarak çalışıyor.
      </p>

      <div className="petition-layout">
        <aside className="petition-sidebar">
          <h3>Kategoriler</h3>
          <ul>
            <li>📂 Genel Dava</li>
            <li>⚖️ Ceza / Şikâyet</li>
            <li>👨‍👩‍👧 Aile Hukuku</li>
            <li>💼 İş Hukuku</li>
            <li>💰 İcra / İflas</li>
          </ul>
        </aside>

        <div className="petition-main glass-soft">
          <h3>Form alanları burada olacak</h3>
          <p style={{ fontSize: 13, opacity: 0.8 }}>
            Buraya daha sonra backend ile entegre dilekçe formu, alanlar ve “Önizle / DOCX
            indir” butonları eklenecek. Şu anlık sadece arayüz yerleşimi hazır.
          </p>
        </div>
      </div>
    </section>
  );
}
