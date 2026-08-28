const TYPE_COLORS = {
  Outdoor: 'brown',
  Indoor: 'teal',
  Hydro: 'blue',
  Exotic: 'deep-purple',
  Frasco: 'lime',
  Cart: 'cyan',
  'Pre-Roll': 'orange',
  Hongos: 'pink',
  Oferta: 'red',
};

export function typeColor(type) {
  return TYPE_COLORS[type] || 'grey';
}
