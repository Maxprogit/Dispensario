// Mapa de color por "tipo" de producto, usado tanto en ProductCard como
// en ProductDetail para que el chip/badge se vea igual en toda la app.
// Antes vivía duplicado en cada componente y con valores de una
// taxonomía vieja (Hybrid/Sativa/Indica) que ya no existe en los datos
// reales; aquí queda uno solo con los tipos que de verdad vienen de
// Supabase.
const TYPE_COLORS = {
  Outdoor: 'brown',
  Indoor: 'teal',
  Hydro: 'blue',
  Exotic: 'deep-purple',
  Frasco: 'lime',
  Cart: 'cyan',
  'Pre-Roll': 'orange',
  Hongos: 'pink',
};

export function typeColor(type) {
  return TYPE_COLORS[type] || 'grey';
}
