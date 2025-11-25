import { useEffect, useState } from "react";

export default function LegalModal({ legal, onClose }) {
  const [active, setActive] = useState(legal || "terms");

  useEffect(() => {
    setActive(legal || "terms");
  }, [legal]);

  const content = {
    terms: `
AVO AI KULLANICI SÖZLEŞMESİ

1. Taraflar
Bu platform, Miron Intelligence tarafından geliştirilen AVO AI isimli yapay zekâ destekli hukuk otomasyon sistemidir. Kullanıcı; siteyi ziyaret eden, platformu kullanan veya hizmetlerden faydalanan tüm gerçek ve tüzel kişileri kapsar.

2. Hizmetin Niteliği
AVO AI tarafından üretilen dilekçe, hukuki metin, özet, açıklama ve tüm çıktılar yalnızca bilgilendirme niteliğindedir. AVO AI avukat değildir ve hukuki danışmanlık yapmaz. Platformun ürettiği veriler resmi delil, avukat mütalaası veya hukuki görüş niteliği taşımaz.

3. Kullanıcının Sorumlulukları
- Sistem tarafından üretilen çıktıları kullanmadan önce doğrulamakla yükümlüdür.
- Somut uyuşmazlıklarda avukata danışmak kullanıcının sorumluluğundadır.
- Yanlış veya eksik kullanım sonucunda ortaya çıkabilecek zararlardan kullanıcı sorumludur.

4. Platformun Sorumluluk Sınırı
- AVO AI çıktılarının doğruluğunu garanti etmez.
- Herhangi bir sonuçtan, maddi/manevi zarardan doğrudan veya dolaylı sorumlu tutulamaz.
- Sistem kesintileri, bakım süreçleri veya teknik sorunlar kullanıcıya tazminat hakkı doğurmaz.

5. Kullanım Limitleri
- Ücretsiz kullanım; günlük dilekçe, sohbet ve işlem sayıları ile sınırlandırılabilir.
- Kötüye kullanım tespit edildiğinde erişim kısıtlanabilir veya tamamen durdurulabilir.

6. Fikri Haklar
Platformun tüm kodları, tasarımları, logosu, marka yapısı, model çıktıları ve altyapısı Miron Intelligence’a aittir. Kopyalanması, dağıtılması, çoğaltılması veya yeniden satılması yasaktır.

7. Değişiklikler
Kullanıcı sözleşmesi gerektiğinde güncellenebilir. Güncellemeler yayınlandığı anda yürürlüğe girer. Kullanıma devam eden kullanıcı, yeni şartları kabul etmiş sayılır.
`.trim(),

    kvkk: `
KVKK AYDINLATMA METNİ

1. Veri Sorumlusu
AVO AI uygulaması kapsamında işlenen kişisel verilerinizin veri sorumlusu Miron Intelligence’tır.

2. İşlenen Kişisel Veriler
- Dilekçe ve sohbet alanlarına yazılan metinler (tamamı kullanıcının kendi isteğiyle sağlanır)
- IP adresi, tarih/saat bilgisi, kullanım sayısı
- Kullanıcı tarafından isteğe bağlı olarak girilen ad, soyad, adres, telefon vb.

3. İşleme Amaçları
- Yapay zekâ işleme süreçlerinin yürütülmesi
- Hizmet kalitesinin arttırılması
- Kötüye kullanımın tespit edilmesi ve güvenlik
- Sistem performans analizi
- Yasal yükümlülüklerin yerine getirilmesi

4. Kişisel Verilerin Aktarılması
Veriler; yalnızca hizmetin sağlanması için gerekli yazılım altyapı sağlayıcılarıyla (ör. OpenAI, hosting, sunucu hizmetleri) paylaşılabilir. Üçüncü taraflara ticari amaçlarla aktarılmaz.

5. Saklama Süresi
Veriler teknik gereklilik ve mevzuat zorunlulukları dışında mümkün olan en kısa sürede silinir veya anonim hale getirilir.

6. KVKK Kapsamındaki Haklar
- Kişisel verilerinizin işlenip işlenmediğini öğrenme
- Düzeltme veya silme talebi
- İşlemenin sınırlandırılmasını talep etme
- Veri taşınabilirliği talep etme

Başvurular ileride duyurulacak resmi iletişim kanallarından kabul edilecektir.
`.trim(),

    privacy: `
GİZLİLİK POLİTİKASI

1. Genel
AVO AI kullanıcı gizliliğine önem verir. Sistemin çalışması için gerekli minimum teknik veriler işlenir.

2. Toplanan Veriler
- Tarayıcı bilgileri, IP adresi, cihaz türü
- Sistem logları, hata kayıtları
- Kullanıcının kendi yazdığı metinler (dilekçe oluşturma veya sohbet amaçlı)

3. Çerezler
Temel oturum yönetimi ve güvenlik için zorunlu çerezler kullanılabilir. Reklam, takip veya kişisel profil çıkarımı yapılmaz.

4. Veri Güvenliği
Veriler teknik yöntemlerle korunur. Ancak internet üzerinden yapılan hiçbir iletişim %100 güvenli değildir. Kullanıcı hassas bilgileri yazarken dikkatli olmalıdır.

5. Üçüncü Taraf Araçları
Model sağlayıcıları ve sunucu hizmetleri teknik verileri işleyebilir. Bu süreçler KVKK'ya uygun şekilde yürütülür.

6. Değişiklikler
Gizlilik politikası güncellenebilir. Kullanıma devam eden kullanıcı güncellemeleri kabul etmiş sayılır.
`.trim(),
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ÜST BAŞLIK */}
        <div className="modal-header">
          <h2 className="modal-title">
            {active === "terms" && "Kullanıcı Sözleşmesi"}
            {active === "kvkk" && "KVKK Aydınlatma Metni"}
            {active === "privacy" && "Gizlilik Politikası"}
          </h2>

          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* TABS */}
        <div className="modal-tabs">
          <button
            className={active === "terms" ? "active" : ""}
            onClick={() => setActive("terms")}
          >
            Kullanıcı Sözleşmesi
          </button>

          <button
            className={active === "kvkk" ? "active" : ""}
            onClick={() => setActive("kvkk")}
          >
            KVKK
          </button>

          <button
            className={active === "privacy" ? "active" : ""}
            onClick={() => setActive("privacy")}
          >
            Gizlilik
          </button>
        </div>

        {/* İÇERİK */}
        <pre className="modal-content">{content[active]}</pre>

        <button className="modal-btn" onClick={onClose}>
          Kapat
        </button>
      </div>
    </div>
  );
}