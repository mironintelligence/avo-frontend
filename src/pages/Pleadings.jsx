// src/pages/Pleadings.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CATALOG from "../data/catalog";

export default function Pleadings() {
  const categoryKeys = Object.keys(CATALOG);

  const [activeCat, setActiveCat] = useState(categoryKeys[0]);
  const [activeTpl, setActiveTpl] = useState(null);
  const [fields, setFields] = useState([]);
  const [values, setValues] = useState({});
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

// ---------- DİLEKÇE LIMITİ ----------
const MAX_PETITIONS = 5;
const PETITION_KEY = "avo_ai_petition_count";

const [petitionCount, setPetitionCount] = useState(
  Number(localStorage.getItem(PETITION_KEY) || 0)
);

useEffect(() => {
  localStorage.setItem(PETITION_KEY, petitionCount);
}, [petitionCount]);

  // Şu an seçili dilekçe şablonu
  const currentTemplate =
    activeTpl && activeCat
      ? CATALOG[activeCat].find((t) => t.key === activeTpl) || null
      : null;

  // Şablon değişince formu doldurulabilir hale getir
  useEffect(() => {
    if (!currentTemplate) {
      setFields([]);
      setValues({});
      setPreview("");
      return;
    }

    const init = {};
    currentTemplate.fields.forEach((f) => {
      init[f.key] = "";
    });

    setFields(currentTemplate.fields);
    setValues(init);
    setPreview("");
  }, [activeTpl, activeCat, currentTemplate]);

  const handleField = (k, v) =>
    setValues((prev) => ({
      ...prev,
      [k]: v,
    }));

  // ------------------ ÖNİZLEME ------------------ //
 const doPreview = async () => {
  if (!currentTemplate) {
    alert("Dilekçe türü seçin.");
    return;
  }
  

  // ----- LİMİT KONTROL -----
  if (petitionCount >= MAX_PETITIONS) {
    alert("⚠ Ücretsiz 5 dilekçe oluşturma hakkınızı kullandınız.");
    return;
  }
  // --------------------------

  setLoading(true);
  try {
  const res = await fetch("/api/petition", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: buildPrompt(currentTemplate, values),
  }),
});

const data = await res.json();
const content = data.reply;

    setPreview(content || "Önizleme oluşturulamadı.");

    // --- BAŞARIYLA OLUŞTU → LİMİTİ ARTTIR ---
    setPetitionCount(petitionCount + 1);
  } catch (err) {
    console.error(err);
    alert("Önizleme sırasında hata oluştu.");
  } finally {
    setLoading(false);
  }
};

  // ------------------ İNDİRME ------------------ //
  const doDownload = (format) => {
    if (!currentTemplate) {
      alert("Dilekçe türü seçin.");
      return;
    }
    if (!preview) {
      alert("Önce önizleme oluştur.");
      return;
    }

    let mime = "text/plain;charset=utf-8";
    if (format === "pdf") {
      mime = "application/pdf";
    } else if (format === "docx") {
      mime =
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    } else if (format === "udf") {
      mime = "text/plain;charset=utf-8";
    }

    const blob = new Blob([preview], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dilekce_${currentTemplate.key}.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pleadings-layout">
      {/* SOL: KATEGORİLER */}
      <motion.aside
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="pleadings-sidebar glass-soft"
      >
        <h3 className="side-title">Kategoriler</h3>
        <div className="side-list">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCat(cat);
                setActiveTpl(null);
                setPreview("");
              }}
              className={`side-item ${activeCat === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.aside>

      {/* ORTA: DİLEKÇE TÜRLERİ */}
      <motion.section
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="pleadings-middle glass-soft"
      >
        <h3 className="mid-title">Dilekçe Türleri</h3>
        <div className="petition-grid">
          {CATALOG[activeCat].map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActiveTpl(t.key)}
              className={`petition-card ${
                activeTpl === t.key ? "active" : ""
              }`}
            >
              <div className="petition-type">{t.case_type} Hukuku</div>
              <div className="petition-title">{t.title}</div>
            </button>
          ))}
        </div>
      </motion.section>

      {/* SAĞ: FORM + ALTTA ÖNİZLEME & İNDİRME */}
      <motion.section
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="pleadings-right glass-soft"
      >
        <h3 className="right-title">Dilekçe Formu</h3>

        {!currentTemplate && (
          <div className="no-template">Dilekçe türü seçiniz…</div>
        )}

        {currentTemplate && (
          <>
            <div className="form-grid">
              {fields.map((f) => (
                <div key={f.key} className="text-sm">
                  <label className="form-label">
                    {f.label}
                    {f.required && <span className="form-required"> *</span>}
                  </label>

                  {f.type === "textarea" ? (
                    <textarea
                      rows={4}
                      className="form-input"
                      placeholder={f.placeholder || ""}
                      value={values[f.key] || ""}
                      onChange={(e) => handleField(f.key, e.target.value)}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-input"
                      placeholder={f.placeholder || ""}
                      value={values[f.key] || ""}
                      onChange={(e) => handleField(f.key, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={doPreview}
              disabled={loading}
              className="preview-btn"
            >
              {loading ? "Hazırlanıyor..." : "Önizleme Oluştur"}
            </button>

            <AnimatePresence>
              {preview && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="preview-box"
                >
                  <div className="preview-title">Önizleme</div>
                  <pre className="preview-text">{preview}</pre>

                  <div className="download-grid">
                    {["docx", "pdf", "txt", "udf"].map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => doDownload(fmt)}
                        className="download-btn"
                      >
                        {fmt.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </motion.section>
    </div>
  );
}

// ------------------------ PROMPT BUILDER ------------------------ //
function buildPrompt(tpl, values) {
  return `
Dilekçe Türü: ${tpl.title}
Tür: ${tpl.case_type}

Alanlar:
${Object.entries(values)
  .map(([k, v]) => `- ${k}: ${v}`)
  .join("\n")}

Lütfen resmi Türk hukuk dilekçesi formatında hazırla.
Başlık, Vakıalar, Hukuki Sebepler, Sonuç ve İstem bölümlerini oluştur.
`;
}
