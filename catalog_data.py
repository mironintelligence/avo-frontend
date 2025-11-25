# catalog_data.py

CATALOG = {
    "Adli Dilekçeler": [
        {
            "key": "dava-genel",
            "title": "Dava Dilekçesi (Genel)",
            "case_type": "Medeni",
            "policy": "HMK usul kuralları; taraflar, konu, açıklamalar, hukuki sebepler (TMK/TBK/HMK), deliller, sonuç-istem zorunludur.",
            "fields": [
                {"key":"court_name","label":"Mahkeme","type":"text","required":True,"placeholder":"İstanbul Anadolu 7. Asliye Hukuk"},
                {"key":"city","label":"Şehir","type":"text","required":True,"placeholder":"İstanbul"},
                {"key":"plaintiff","label":"Davacı Ad Soyad/Unvan","type":"text","required":True},
                {"key":"defendant","label":"Davalı Ad Soyad/Unvan","type":"text","required":True},
                {"key":"subject","label":"Dava Konusu","type":"text","required":True,"placeholder":"Alacak / Tespit / Tazminat..."},
                {"key":"facts","label":"Vakıalar (Özet)","type":"textarea","required":True},
                {"key":"evidence","label":"Deliller","type":"textarea","required":False,"placeholder":"Sözleşme, fatura, tanık, bilirkişi..."},
                {"key":"requests","label":"Talepler","type":"textarea","required":True,"placeholder":"Asıl/fer’i talepler, vekalet ücreti, yargılama giderleri..."},
            ],
        },
        {
            "key": "savunma-cevap",
            "title": "Savunma / Cevap Dilekçesi",
            "case_type": "Medeni",
            "policy": "HMK m.129 ve ilgili; iddia inkâr/defi stratejisi, yetki/görev itirazı varsa belirtilir.",
            "fields": [
                {"key":"court_name","label":"Mahkeme","type":"text","required":True},
                {"key":"city","label":"Şehir","type":"text","required":True},
                {"key":"defendant","label":"Davalı (Ad/Unvan)","type":"text","required":True},
                {"key":"plaintiff","label":"Davacı (Ad/Unvan)","type":"text","required":True},
                {"key":"answer_points","label":"Cevap Başlıkları","type":"textarea","required":True,"placeholder":"Yetki itirazı, esasa karşı savunmalar..."},
                {"key":"evidence","label":"Deliller","type":"textarea","required":False},
                {"key":"requests","label":"Sonuç ve İstem","type":"textarea","required":True},
            ],
        },
        {
            "key": "istinaf",
            "title": "İstinaf Dilekçesi",
            "case_type": "Medeni",
            "policy": "HMK m.341 vd; kamu düzeni/temyize elverişlilik, esasa/şekle aykırılıklar, kaldırma/değiştirme istemi.",
            "fields":[
                {"key":"first_instance","label":"İlk Derece Mahkemesi","type":"text","required":True},
                {"key":"decision_no","label":"Karar No / Tarih","type":"text","required":True},
                {"key":"party","label":"Başvuran (Ad/Unvan)","type":"text","required":True},
                {"key":"grounds","label":"İstinaf Sebepleri","type":"textarea","required":True},
                {"key":"requests","label":"Sonuç ve İstem","type":"textarea","required":True},
            ],
        },
        {
            "key":"temyiz",
            "title":"Temyiz Dilekçesi",
            "case_type":"Medeni",
            "policy":"HMK m.361 vd; bozma gerekçeleri, hukuka aykırılık başlıkları açıkça belirtilir.",
            "fields":[
                {"key":"regional_court","label":"Bölge Adliye Mahkemesi","type":"text","required":True},
                {"key":"decision_no","label":"BAM Karar No / Tarih","type":"text","required":True},
                {"key":"party","label":"Başvuran","type":"text","required":True},
                {"key":"grounds","label":"Temyiz Sebepleri","type":"textarea","required":True},
                {"key":"requests","label":"Sonuç ve İstem","type":"textarea","required":True},
            ],
        },
        {
            "key":"ihtiyati-tedbir",
            "title":"İhtiyati Tedbir Talebi",
            "case_type":"Medeni",
            "policy":"HMK m.389 vd; telafisi güç zarar tehlikesi, haklı görünen durum, teminat.",
            "fields":[
                {"key":"court_name","label":"Mahkeme","type":"text","required":True},
                {"key":"party","label":"Talepte Bulunan","type":"text","required":True},
                {"key":"facts","label":"Vakıalar / Tehlike","type":"textarea","required":True},
                {"key":"evidence","label":"Deliller","type":"textarea","required":False},
                {"key":"measure","label":"Talep Edilen Tedbir","type":"textarea","required":True},
            ],
        },
    ],

    "Ceza Davaları": [
        {
            "key":"suc-duyurusu",
            "title":"Suç Duyurusu Dilekçesi",
            "case_type":"Ceza",
            "policy":"CMK usul; olay anlatımı, suç tipleri, deliller, soruşturma talebi.",
            "fields":[
                {"key":"prosecutor","label":"Cumhuriyet Başsavcılığı","type":"text","required":True,"placeholder":"İstanbul C.Başsavcılığı"},
                {"key":"complainant","label":"Şikâyetçi","type":"text","required":True},
                {"key":"suspect","label":"Şüpheli (Varsa)","type":"text","required":False},
                {"key":"facts","label":"Olayın Özeti","type":"textarea","required":True},
                {"key":"offences","label":"İsnat Edilen Suçlar","type":"textarea","required":True,"placeholder":"TCK m...."},
                {"key":"evidence","label":"Deliller","type":"textarea","required":False},
                {"key":"requests","label":"Talep","type":"textarea","required":True,"placeholder":"Soruşturma yapılıp kamu davası açılması..."},
            ]
        },
        {
            "key":"tutuklamaya-itiraz",
            "title":"Tutuklamaya İtiraz Dilekçesi",
            "case_type":"Ceza",
            "policy":"CMK m.101/104 vd; ölçülülük, somut gerekçe yokluğu, adli kontrol yeterliliği.",
            "fields":[
                {"key":"court_name","label":"Sulh Ceza Hakimliği","type":"text","required":True},
                {"key":"suspect","label":"Şüpheli/Sanık","type":"text","required":True},
                {"key":"case_no","label":"Soruşturma/Dosya No","type":"text","required":True},
                {"key":"grounds","label":"İtiraz Gerekçeleri","type":"textarea","required":True},
                {"key":"requests","label":"Talep","type":"textarea","required":True},
            ]
        }
    ],

    "İcra-İflas": [
        {
            "key":"icra-takibi-baslatma",
            "title":"İcra Takibi Başlatma Talebi",
            "case_type":"İcra",
            "policy":"İİK; borçlu/alacaklı bilgileri, alacak kalemleri, faiz tür/tarih, ödeme emri talebi.",
            "fields":[
                {"key":"enforcement_office","label":"İcra Dairesi","type":"text","required":True},
                {"key":"creditor","label":"Alacaklı","type":"text","required":True},
                {"key":"debtor","label":"Borçlu","type":"text","required":True},
                {"key":"claim","label":"Alacak Miktarı ve Türü","type":"text","required":True},
                {"key":"basis","label":"Dayanak","type":"textarea","required":False},
                {"key":"requests","label":"Talep","type":"textarea","required":True},
            ]
        },
        {
            "key":"icra-itiraz",
            "title":"İcra Takibine İtiraz Dilekçesi",
            "case_type":"İcra",
            "policy":"İİK m.62 vd; süresinde itiraz, borca/ imzaya/ yetkiye itiraz başlıkları.",
            "fields":[
                {"key":"enforcement_office","label":"İcra Dairesi","type":"text","required":True},
                {"key":"debtor","label":"Borçlu","type":"text","required":True},
                {"key":"file_no","label":"Takip No","type":"text","required":True},
                {"key":"grounds","label":"İtiraz Gerekçeleri","type":"textarea","required":True},
                {"key":"requests","label":"Talep","type":"textarea","required":True},
            ]
        }
    ],

    "Aile Hukuku": [
        {
            "key":"bosanma",
            "title":"Boşanma Dilekçesi (Genel)",
            "case_type":"Aile",
            "policy":"TMK m.166 ve ilgili; kusur iddiaları, çocuklar, nafaka, tazminat, velayet, deliller.",
            "fields":[
                {"key":"court_name","label":"Aile Mahkemesi","type":"text","required":True},
                {"key":"spouses","label":"Eşlerin Ad-Soyadı","type":"text","required":True},
                {"key":"marriage_date","label":"Evlilik Tarihi","type":"text","required":False},
                {"key":"facts","label":"Vakıalar","type":"textarea","required":True},
                {"key":"children","label":"Çocuklar (Varsa)","type":"text","required":False},
                {"key":"claims","label":"Talepler","type":"textarea","required":True},
                {"key":"evidence","label":"Deliller","type":"textarea","required":False},
            ]
        }
    ],

    "İş Hukuku": [
        {
            "key":"ise-iade",
            "title":"İşe İade Dilekçesi",
            "case_type":"İş",
            "policy":"4857 sayılı İşK; fesih geçersizliği iddiası, son ücret/çalışma süresi, işe iade talebi, boşta geçen süre.",
            "fields":[
                {"key":"court_name","label":"İş Mahkemesi","type":"text","required":True},
                {"key":"employee","label":"Davacı (İşçi)","type":"text","required":True},
                {"key":"employer","label":"Davalı (İşveren)","type":"text","required":True},
                {"key":"employment_period","label":"Çalışma Süresi","type":"text","required":False},
                {"key":"last_wage","label":"Son Ücret","type":"text","required":False},
                {"key":"dismissal","label":"Fesih Olayı","type":"textarea","required":True},
                {"key":"requests","label":"Talepler","type":"textarea","required":True},
                {"key":"evidence","label":"Deliller","type":"textarea","required":False},
            ]
        }
    ]
}
