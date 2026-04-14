/**
 * WhatsApp utility functions
 */

export const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '919876543210';

export const openWhatsApp = (message?: string) => {
  const encodedMessage = encodeURIComponent(message || 'Hi! I would like to connect with you.');
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export const getWhatsAppLink = (message?: string) => {
  const encodedMessage = encodeURIComponent(message || 'Hi! I would like to connect with you.');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
