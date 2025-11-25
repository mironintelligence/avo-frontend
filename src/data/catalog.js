const CATALOG = {
  "Ceza Hukuku": [
    {
      key: "suc_duyurusu",
      case_type: "Ceza",
      title: "Suç Duyurusu Dilekçesi",
      fields: [
        { key: "sahis_bilgileri", label: "Şikayetçi Bilgileri", type: "textarea", required: true },
        { key: "supheli_bilgileri", label: "Şüpheli Bilgileri", type: "textarea" },
        { key: "olay_ozeti", label: "Olayın Özeti", type: "textarea", required: true },
        { key: "deliller", label: "Deliller", type: "textarea" },
        { key: "talepler", label: "Talepler", type: "textarea" }
      ]
    },
    {
      key: "koruma_tedbiri",
      case_type: "Ceza",
      title: "Koruma Tedbiri Talep Dilekçesi",
      fields: [
        { key: "kisi", label: "Başvuran Bilgileri", type: "textarea", required: true },
        { key: "tehdit", label: "Tehlike / Tehdit Durumu", type: "textarea", required: true },
        { key: "dayanak", label: "Hukuki Dayanak", type: "textarea" }
      ]
    },
    {
      key: "ifade_dilekcesi",
      case_type: "Ceza",
      title: "İfade Vermek İçin Başvuru Dilekçesi",
      fields: [
        { key: "kimlik", label: "Kimlik Bilgileri", type: "textarea", required: true },
        { key: "konu", label: "Konu / Dosya No", type: "text", required: true },
        { key: "aciklama", label: "Açıklama", type: "textarea" }
      ]
    }
  ],

  "Aile Hukuku": [
    {
      key: "bosanma",
      case_type: "Aile",
      title: "Boşanma Dava Dilekçesi",
      fields: [
        { key: "es_bilgileri", label: "Eş Bilgileri", type: "textarea", required: true },
        { key: "evlilik_ozeti", label: "Evlilik Özeti", type: "textarea", required: true },
        { key: "bosanma_sebepleri", label: "Boşanma Sebepleri", type: "textarea", required: true },
        { key: "deliller", label: "Deliller", type: "textarea" },
        { key: "talepler", label: "Nafaka / Velayet / Tazminat Talepleri", type: "textarea" }
      ]
    },
    {
      key: "velayet",
      case_type: "Aile",
      title: "Velayet Talebi Dilekçesi",
      fields: [
        { key: "cocuk", label: "Çocuk Bilgileri", type: "textarea", required: true },
        { key: "ebeveyn_durumu", label: "Ebeveynlerin Durumu", type: "textarea", required: true },
        { key: "gerekce", label: "Gerekçe", type: "textarea" }
      ]
    },
    {
      key: "nafaka_artisi",
      case_type: "Aile",
      title: "Nafaka Artırım Davası Dilekçesi",
      fields: [
        { key: "ilk_nafaka", label: "Mevcut Nafaka Bilgileri", type: "textarea", required: true },
        { key: "degisen_durum", label: "Değişen Koşullar", type: "textarea", required: true }
      ]
    }
  ],

  "İcra ve İflas Hukuku": [
    {
      key: "odeme_emri_itiraz",
      case_type: "İcra",
      title: "Ödeme Emrine İtiraz Dilekçesi",
      fields: [
        { key: "dosya_no", label: "Dosya No", type: "text", required: true },
        { key: "borc_iddiasi", label: "Borç İddiasına İtiraz", type: "textarea", required: true },
        { key: "deliller", label: "Deliller", type: "textarea" }
      ]
    },
    {
      key: "mal_beyan",
      case_type: "İcra",
      title: "Mal Beyanı Dilekçesi",
      fields: [
        { key: "maller", label: "Mal Varlığı Beyanı", type: "textarea", required: true },
        { key: "gelir", label: "Gelir Beyanı", type: "textarea" }
      ]
    }
  ],

  "Tüketici Hukuku": [
    {
      key: "ayıplı_mal",
      case_type: "Tüketici",
      title: "Ayıplı Mal Şikayet Dilekçesi",
      fields: [
        { key: "urun", label: "Ürün Bilgisi", type: "textarea", required: true },
        { key: "sorun", label: "Sorun / Ayıp Detayı", type: "textarea", required: true },
        { key: "talep", label: "Para iadesi / Değişim Talebi", type: "textarea" }
      ]
    },
    {
      key: "haksiz_fiyat",
      case_type: "Tüketici",
      title: "Haksız Fiyat Artışı Şikayet Dilekçesi",
      fields: [
        { key: "firma", label: "Firma Bilgisi", type: "text", required: true },
        { key: "aciklama", label: "Durum Açıklaması", type: "textarea", required: true }
      ]
    }
  ],

  "İş Hukuku": [
    {
      key: "kidem_tazminati",
      case_type: "İş",
      title: "Kıdem Tazminatı Talep Dilekçesi",
      fields: [
        { key: "calisma", label: "Çalışma Süresi", type: "text", required: true },
        { key: "fesih", label: "Fesih Sebebi", type: "textarea", required: true },
        { key: "ucret", label: "Ücret Bilgisi", type: "text" }
      ]
    },
    {
      key: "mobing",
      case_type: "İş",
      title: "Mobbing Şikayet Dilekçesi",
      fields: [
        { key: "olaylar", label: "Mobbing Olayları", type: "textarea", required: true },
        { key: "tanıklar", label: "Tanıklar", type: "textarea" }
      ]
    }
  ],

  "İdare Hukuku": [
    {
      key: "idari_dava",
      case_type: "İdare",
      title: "İdari İşleme İptal Davası",
      fields: [
        { key: "idare_islemi", label: "İşlem Bilgisi", type: "textarea", required: true },
        { key: "gerekce", label: "Hukuki Gerekçe", type: "textarea", required: true }
      ]
    }
  ],

  "Ticaret Hukuku": [
    {
      key: "alacak_davasi",
      case_type: "Ticaret",
      title: "Ticari Alacak Davası Dilekçesi",
      fields: [
        { key: "taraflar", label: "Taraf Bilgileri", type: "textarea", required: true },
        { key: "alacak_tutari", label: "Alacak Tutarı", type: "text", required: true },
        { key: "ticari_iliski", label: "Ticari İlişki Açıklaması", type: "textarea" }
      ]
    }
  ],

  "Kira Hukuku": [
    {
      key: "tahliye_davasi",
      case_type: "Kira",
      title: "Tahliye Davası Dilekçesi",
      fields: [
        { key: "kiraci", label: "Kiracı Bilgileri", type: "textarea", required: true },
        { key: "gerekce", label: "Tahliye Gerekçesi", type: "textarea", required: true }
      ]
    }
  ],

  "Miras Hukuku": [
    {
      key: "miras_taksim",
      case_type: "Miras",
      title: "Miras Taksim Davası Dilekçesi",
      fields: [
        { key: "mirascilar", label: "Mirasçılar", type: "textarea", required: true },
        { key: "malvarligi", label: "Mal Varlığı Bilgisi", type: "textarea", required: true }
      ]
    }
  ]
};

export default CATALOG;