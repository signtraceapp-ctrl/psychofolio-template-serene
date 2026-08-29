import { DEFAULTS } from "./defaults";
import { siteContentSchema } from "./content";
import ham from "../content/content.json";

function birlestir<T extends Record<string, unknown>>(varsayilan: T, gelen?: Partial<T>): T {
  if (!gelen) return varsayilan;
  const cikti = { ...varsayilan };
  for (const [k, v] of Object.entries(gelen)) {
    if (v === undefined || v === null) continue;
    if (typeof v === "string" && v.trim() === "") continue;
    if (Array.isArray(v) && v.length === 0) continue;
    (cikti as Record<string, unknown>)[k] = v;
  }
  return cikti;
}

function coz(): typeof DEFAULTS {
  const parsed = siteContentSchema.safeParse(ham);
  if (!parsed.success) {
    console.error("[content] content.json gecersiz, varsayilanlar kullanildi:", parsed.error.issues);
    return DEFAULTS;
  }
  const g = parsed.data;
  return {
    practitioner: birlestir(DEFAULTS.practitioner, g.practitioner),
    home: birlestir(DEFAULTS.home, g.home),
    about: birlestir(DEFAULTS.about, g.about),
    services: birlestir(DEFAULTS.services, g.services),
    approach: birlestir(DEFAULTS.approach, g.approach),
    articles: birlestir(DEFAULTS.articles, g.articles),
    faq: birlestir(DEFAULTS.faq, g.faq),
    contact: birlestir(DEFAULTS.contact, g.contact),
  };
}

export const content = coz();
