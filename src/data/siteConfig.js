// ============================================================================
//  SUSHIDINE — SITE CONFIG
//  Edit your real contact details, links and hours here. The whole site reads
//  from this file, so you only change things in one place.
//  (Values marked TODO are placeholders — replace them with the real info.)
// ============================================================================

export const siteConfig = {
  name: 'Sushidine',
  tagline: { fr: 'Restaurant Asiatique', en: 'Asian Restaurant' },

  // ----- Contact -----------------------------------------------------------
  // Phone in international format for tel:/WhatsApp links (no spaces, with +).
  phoneDisplay: '+213 0 00 00 00 00', // TODO: real number, as shown to users
  phoneE164: '+213000000000',         // TODO: same number, digits only, e.g. +213770123456
  whatsapp: '213000000000',           // TODO: WhatsApp number, no '+' and no leading 0

  email: '', // optional, e.g. contact@sushidine.dz

  address: {
    fr: 'Adresse du restaurant, Ville, Algérie', // TODO
    en: 'Restaurant address, City, Algeria',     // TODO
  },

  // Google Maps embed: open Google Maps → your place → Share → Embed a map →
  // copy the URL inside src="..." and paste it here.
  mapEmbedUrl:
    'https://www.google.com/maps?q=Alger&output=embed', // TODO: replace with your exact location
  mapLink: 'https://maps.google.com/?q=Sushidine', // TODO: link that opens directions

  // ----- Opening hours -----------------------------------------------------
  hours: {
    monSat: '11:00 – 23:00', // TODO
    sun: '14:00 – 23:00',    // TODO
  },

  // ----- Social ------------------------------------------------------------
  social: {
    instagram: 'https://instagram.com/', // TODO: your Instagram URL
    facebook: '',                        // optional
    tiktok: '',                          // optional
  },

  // ----- Delivery / order --------------------------------------------------
  // Add any delivery app links you use; leave '' to hide a button.
  delivery: {
    yassir: '', // e.g. https://yassir.com/...
  },
}

// Pre-filled WhatsApp message (URL-encoded at use site)
export const defaultWhatsAppMessage = {
  fr: "Bonjour Sushidine 👋, je souhaite passer une commande :",
  en: 'Hello Sushidine 👋, I would like to place an order:',
}
