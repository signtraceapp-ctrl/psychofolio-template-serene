import { z } from "zod";

const metin = z.string().max(5000);

const madde = z.object({
  title: metin.optional(),
  description: metin.optional(),
  meta: metin.optional(),
});

export const siteContentSchema = z.object({
  practitioner: z
    .object({
      name: metin.optional(),
      title: metin.optional(),
      city: metin.optional(),
      email: z.string().email().optional(),
      phone: metin.optional(),
      bookingUrl: z.string().url().optional(),
    })
    .optional(),

  home: z
    .object({
      headline: metin.optional(),
      highlight: metin.optional(),
      intro: metin.optional(),
      ctaLabel: metin.optional(),
    })
    .optional(),

  about: z
    .object({
      heading: metin.optional(),
      body: z.array(metin).optional(),
    })
    .optional(),

  services: z
    .object({ heading: metin.optional(), intro: metin.optional(), items: z.array(madde).optional() })
    .optional(),

  approach: z
    .object({ heading: metin.optional(), intro: metin.optional(), items: z.array(madde).optional() })
    .optional(),

  articles: z
    .object({
      heading: metin.optional(),
      intro: metin.optional(),
      items: z
        .array(madde.extend({ url: z.string().url().optional() }))
        .optional(),
    })
    .optional(),

  faq: z
    .object({
      heading: metin.optional(),
      items: z.array(z.object({ q: metin, a: metin })).optional(),
    })
    .optional(),

  contact: z
    .object({ heading: metin.optional(), intro: metin.optional(), address: metin.optional() })
    .optional(),
});

export type SiteContent = z.infer<typeof siteContentSchema>;
