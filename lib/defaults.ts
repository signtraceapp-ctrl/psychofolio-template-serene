import type { SiteContent } from "./content";

type Madde = { title?: string; description?: string; meta?: string };
type Yazi = Madde & { url?: string };

export const DEFAULTS = {
  practitioner: {
    name: "Uzman Psikolog",
    title: "Klinik Psikolog",
    city: "",
    email: "",
    phone: "",
    bookingUrl: "",
  },
  home: {
    headline: "Zihnin sessizliginde,",
    highlight: "kendi yolunuzu bulun",
    intro:
      "Guvene dayali, aceleye getirilmeyen bir calisma. Kendinizi tanimak ve zorlandiginiz yerlerde yeni bir yol bulmak icin.",
    ctaLabel: "Randevu talebi",
  },
  about: {
    heading: "Hakkimda",
    body: [
      "Danisanlarimla guvenli bir iliski kurmayi, calismanin temeli olarak goruyorum. Terapi, birlikte kurulan bir alandir; hizini ve yonunu birlikte belirleriz.",
    ],
  },
  services: {
    heading: "Hizmetler",
    intro: "Calistigim basliklar ve seans yapisi.",
    items: [
      { title: "Bireysel terapi", description: "Yetiskinlerle bireysel gorusmeler.", meta: "50 dk" },
      { title: "Ilk gorusme", description: "Tanisma, ihtiyacin birlikte degerlendirilmesi.", meta: "50 dk" },
    ] as Madde[],
  },
  approach: {
    heading: "Yaklasim",
    intro: "Nasil calistigima dair birkac not.",
    items: [
      { title: "Guvenli zemin", description: "Once guven; calismanin geri kalani bunun uzerine kurulur." },
      { title: "Birlikte belirlenen hiz", description: "Surec, danisanin tasiyabilecegi hizda ilerler." },
    ] as Madde[],
  },
  articles: {
    heading: "Yazilar",
    intro: "Zaman zaman yazdigim notlar.",
    items: [] as Yazi[],
  },
  faq: {
    heading: "Sikca sorulan sorular",
    items: [
      { q: "Gorusmeler ne kadar suruyor?", a: "Seanslar genellikle 50 dakikadir." },
      { q: "Online gorusme yapiyor musunuz?", a: "Evet, yuz yuze ve online gorusme yapilabilmektedir." },
    ],
  },
  contact: {
    heading: "Iletisim",
    intro: "Randevu ve sorulariniz icin ulasabilirsiniz.",
    address: "",
  },
} satisfies SiteContent;
