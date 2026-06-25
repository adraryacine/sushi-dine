import { siteConfig, defaultWhatsAppMessage } from '../data/siteConfig'

export function telLink() {
  return `tel:${siteConfig.phoneE164}`
}

export function whatsappLink(lang = 'fr') {
  const msg = encodeURIComponent(defaultWhatsAppMessage[lang] ?? defaultWhatsAppMessage.fr)
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`
}
