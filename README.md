# Serene - Psychofolio Web Sitesi Sablonu

Psikologlar icin minimal, sakin ve ferah bir web sitesi sablonu.

## Sitenizi duzenleme

Tum metinler `content/content.json` dosyasindadir. Kod duzenlemeniz gerekmez.

```json
{
  "practitioner": {
    "name": "Uzm. Psk. Ayse Yilmaz",
    "title": "Klinik Psikolog",
    "city": "Istanbul",
    "email": "ayse@ornek.com",
    "phone": "+90 555 123 45 67"
  },
  "home": {
    "headline": "Kendinize alan acin,",
    "highlight": "birlikte"
  },
  "about": {
    "body": ["Ilk paragraf.", "Ikinci paragraf."]
  }
}
```

Yazmadiginiz her alan sablonun kendi metnine duser, bos kalmaz.
Alanlarin tam listesi icin `lib/content.ts` dosyasina bakin.

## Yayina alma

1. Bu repo'yu GitHub hesabiniza fork'layin
2. Vercel'de "New Project" > GitHub repo'nuzu secin > Deploy
3. Otomatik olarak yayina alinir, SSL dahildir

## Yerelde calistirma

```bash
npm install
npm run dev
```

Site `http://localhost:3000` adresinde acilir.
