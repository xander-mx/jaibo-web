export const site = {
  name: 'Desconchadero El Jaibo',
  phoneDisplay: '33 1527 1922',
  phoneE164: '523315271922',
  instagram: 'https://www.instagram.com/mariscoseljaibogdl/',
  maps: 'https://maps.app.goo.gl/nqQGrD7ZGcDhiDWe9',
  review: 'https://g.page/r/CWdHDZP67G5QEBE/review',
  address: 'Calle Francisco de Ayza 324, frente al local 108, San Felipe, 44380 Guadalajara, Jalisco',
  locationHint: 'Puesto exterior del Mercado del Mar de la 34, cerca de la esquina de Francisco de Ayza y Esteban Loera, frente a pescadería Santa Cruz.',
  opening: 'Viernes a domingo · 9:00 a. m. a 5:00 p. m.',
  whatsappMessage: 'Hola, vi el menú de El Jaibo en su página web y quiero hacer un pedido. ¿Me ayudan con la disponibilidad y las opciones para recoger o recibir a domicilio?'
};
export const whatsappUrl = `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(site.whatsappMessage)}`;
