export const componentNames = Object.freeze({
  RevenueReportFilter: "RevenueReportFilter",
  CumulativeReportFilter: "CumulativeReportFilter",
});

export const investmentTypes = Object.freeze([
  { code: "ALTIN_TL", name: "" },
  { code: "GUMUS_TL", name: "" },
  { code: "USD", name: "" },
  { code: "EUR", name: "" },
  { code: "ADESE", name: "Adese Gayrimenkul Yatirim A.S." },
  {
    code: "AEFES",
    name: "Anadolu Efes Biracilik ve Malt Sanayii Anonim Sirketi",
  },
  { code: "AGHOL", name: "AG Anadolu Grubu Holding A.S." },
  { code: "AKBNK", name: "Akbank T.A.S." },
  { code: "AKSA", name: "Aksa Akrilik Kimya Sanayii A.S." },
  { code: "AKSEN", name: "Aksa Enerji Üretim A.S." },
  { code: "ALARK", name: "Alarko Holding A.S." },
  { code: "ALBRK", name: "Albaraka Türk Katilim Bankasi A.S." },
  { code: "ALGYO", name: "Alarko Gayrimenkul Yatirim Ortakligi A.S." },
  { code: "ALKIM", name: "Alkim Alkali Kimya A.S." },
  { code: "ARCLK", name: "Arçelik Anonim Sirketi" },
  { code: "ARDYZ", name: "Ard Grup Bilisim Teknolojileri Anonim Sirketi" },
  {
    code: "ASELS",
    name: "Aselsan Elektronik Sanayi ve Ticaret Anonim Sirketi",
  },
  { code: "AYDEM", name: "Aydem Yenilenebilir Enerji A.S." },
  { code: "BERA", name: "Bera Holding A.S." },
  { code: "BIMAS", name: "BIM Birlesik Magazalar A.S." },
  {
    code: "BRISA",
    name: "Brisa Bridgestone Sabanci Lastik Sanayi ve Ticaret A.S.",
  },
  { code: "BRYAT", name: "Borusan Yatirim ve Pazarlama A.S." },
  { code: "CANTE", name: "Çan2 Termik A.S." },
  { code: "CCOLA", name: "Coca-Cola Içecek Anonim Sirketi" },
  { code: "CEMAS", name: "Çemas Döküm Sanayi A.S." },
  { code: "CIMSA", name: "Çimsa Çimento Sanayi ve Ticaret A.S." },
  { code: "DEVA", name: "Deva Holding A.S." },
  { code: "DOAS", name: "Dogus Otomotiv Servis ve Ticaret A.S." },
  { code: "DOHOL", name: "Dogan Sirketler Grubu Holding A.S." },
  {
    code: "ECILC",
    name: "EIS Eczacibasi Ilaç, Sinai ve Finansal Yatirimlar Sanayi ve Ticaret A.S.",
  },
  { code: "EGEEN", name: "Ege Endüstri ve Ticaret A.S." },
  { code: "EKGYO", name: "Emlak Konut Gayrimenkul Yatirim Ortakligi A.S." },
  { code: "ENKAI", name: "Enka Insaat ve Sanayi A.S. " },
  { code: "ERBOS", name: "Erbosan Erciyas Boru Sanayii ve Ticaret A.S." },
  { code: "EREGL", name: "Eregli Demir ve Çelik Fabrikalari T.A.S." },
  { code: "FROTO", name: "Ford Otomotiv Sanayi A.S." },
  { code: "GARAN", name: "Turkiye Garanti Bankasi A.S." },
  { code: "GLYHO", name: "Global Yatirim Holding A.S." },
  { code: "GOZDE", name: "Gozde Girisim Sermayesi Yatirim Ortakligi A.S." },
  { code: "GUBRF", name: "Gübre Fabrikalari Türk Anonim Sirketi" },
  { code: "HALKB", name: "Türkiye Halk Bankasi A.S." },
  { code: "HEKTS", name: "Hektas Ticaret T.A.S." },
  {
    code: "INDES",
    name: "Indeks Bilgisayar Sistemleri Mühendislik Sanayi ve Ticaret Anonim Sirketi",
  },
  {
    code: "IPEKE",
    name: "Ipek Dogal Enerji Kaynaklari Arastirma ve Üretim A.S.",
  },
  { code: "ISCTR", name: "Türkiye Is Bankasi A.S." },
  { code: "ISDMR", name: "Iskenderun Demir ve Çelik A.S." },
  { code: "ISFIN", name: "Is Finansal Kiralama Anonim Sirketi" },
  { code: "ISGYO", name: "Is Gayrimenkul Yatirim Ortakligi A.S." },
  { code: "ISMEN", name: "Is Yatirim Menkul Degerler Anonim Sirketi" },
  { code: "IZMDC", name: "Izmir Demir Çelik Sanayi Anonim Sirketi" },
  { code: "KARSN", name: "Karsan Otomotiv Sanayii ve Ticaret A.S." },
  { code: "KARTN", name: "Kartonsan Karton Sanayi ve Ticaret A.S." },
  { code: "KCHOL", name: "Koç Holding A.S." },
  { code: "KERVT", name: "Kerevitas Gida Sanayi ve Ticaret A.S. " },
  { code: "KORDS", name: "Kordsa Teknik Tekstil A.S." },
  { code: "KOZAA", name: "Koza Anadolu Metal Madencilik Isletmeleri A.S." },
  { code: "KOZAL", name: "Koza Altin Isletmeleri A.S." },
  {
    code: "KRDMD",
    name: "Kardemir Karabük Demir Çelik Sanayi Ve Ticaret A.S.",
  },
  { code: "LOGO", name: "Logo Yazilim Sanayi ve Ticaret A.S." },
  { code: "MAVI", name: "Mavi Giyim Sanayi ve Ticaret A.S." },
  { code: "MGROS", name: "Migros Ticaret A.S." },
  { code: "NTHOL", name: "Net Holding A.S." },
  { code: "ODAS", name: "Odas Elektrik Üretim Sanayi Ticaret A.S." },
  { code: "OTKAR", name: "Otokar Otomotiv ve Savunma Sanayi A.S." },
  { code: "OYAKC", name: "OYAK Çimento Fabrikalari A.S." },
  { code: "PARSN", name: "Parsan Makina Parçalari Sanayii A.S." },
  { code: "PETKM", name: "Petkim Petrokimya Holding Anonim Sirketi" },
  { code: "PGSUS", name: "Pegasus Hava Tasimaciligi Anonim Sirketi" },
  {
    code: "QUAGR",
    name: "QUA Granite Hayal Yapi ve Ürünleri Sanayi Ticaret A.S.",
  },
  {
    code: "RTALB",
    name: "RTA Laboratuvarlari Biyolojik Urunler Ilac ve Makine Sanayi Ticaret A.S.",
  },
  { code: "SAHOL", name: "Haci Ömer Sabanci Holding A.S." },
  {
    code: "SARKY",
    name: "Sarkuysan Elektrolitik Bakir Sanayi ve Ticaret A.S.",
  },
  { code: "SASA", name: "Sasa Polyester Sanayi A.S." },
  { code: "SELEC", name: "Selçuk Ecza Deposu Ticaret ve Sanayi A.S." },
  { code: "SISE", name: "Türkiye Sise Ve Cam Fabrikalari A.S." },
  { code: "SKBNK", name: "Sekerbank T.A.S." },
  { code: "SOKM", name: "Sok Marketler Ticaret A.S." },
  { code: "TAVHL", name: "TAV Havalimanlari Holding A.S." },
  { code: "TCELL", name: "Turkcell Iletisim Hizmetleri A.S." },
  { code: "THYAO", name: "Türk Hava Yollari Anonim Ortakligi" },
  { code: "TKFEN", name: "Tekfen Holding Anonim Sirketi" },
  { code: "TKNSA", name: "Teknosa Iç ve Dis Ticaret Anonim Sirketi" },
  { code: "TOASO", name: "Tofas Türk Otomobil Fabrikasi Anonim Sirketi" },
  { code: "TRGYO", name: "Torunlar Gayrimenkul Yatirim Ortakligi A.S." },
  { code: "TSKB", name: "Türkiye Sinai Kalkinma Bankasi A.S." },
  { code: "TTKOM", name: "Türk Telekomünikasyon Anonim Sirketi" },
  { code: "TTRAK", name: "Türk Traktör ve Ziraat Makineleri A.S." },
  { code: "TUPRS", name: "Türkiye Petrol Rafinerileri A.S." },
  { code: "TURSG", name: "Türkiye Sigorta Anonim Sirketi" },
  { code: "ULKER", name: "Ülker Bisküvi Sanayi A.S." },
  { code: "VAKBN", name: "Türkiye Vakiflar Bankasi Türk Anonim Ortakligi" },
  { code: "VERUS", name: "Verusa Holding A.S." },
  { code: "VESBE", name: "Vestel Beyaz Esya Sanayi ve Ticaret A.S. " },
  { code: "VESTL", name: "Vestel Elektronik Sanayi ve Ticaret Anonim Sirketi" },
  { code: "YATAS", name: "Yatas Yatak ve Yorgan Sanayi ve Ticaret A.S." },
  { code: "YKBNK", name: "Yapi ve Kredi Bankasi A.S." },
  { code: "ZOREN", name: "Zorlu Enerji Elektrik Üretim A.S." },
  { code: "BAGFS", name: "Bagfas Bandirma Gubre Fabrikalari A.S." },
  { code: "BUCIM", name: "Bursa Cimento Fabrikasi A.S." },
  { code: "CEMTS", name: "Çemtas Çelik Makina Sanayi ve Ticaret A.S." },
  { code: "GWIND", name: "GALATA WIND ENERJİ A.Ş." },
  { code: "GSDHO", name: "GSD HOLDİNG A.Ş." },
  { code: "JANTS", name: "Jantsa Jant Sanayi ve Ticaret A.S." },
  { code: "KONTR", name: "KONTROLMATİK TEKNOLOJİ ENERJİ VE MÜHENDİSLİK A.Ş." },
  { code: "NUGYO", name: "NUROL GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş." },
  { code: "SNGYO", name: "Sinpas Gayrimenkul Yatirim Ortakligi A.S." },
]);
