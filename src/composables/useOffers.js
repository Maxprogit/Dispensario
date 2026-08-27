import { ref, computed, onMounted } from 'vue';

/**
 * Carga public/offers.json y expone solo las promociones activas.
 * Una promoción se considera activa si no trae "active: false"
 * (así las promos existentes, sin ese campo, se siguen mostrando).
 */
export function useOffers() {
  const offers = ref([]);
  const loading = ref(true);

  onMounted(async () => {
    try {
      const res = await fetch('/offers.json');
      offers.value = await res.json();
    } catch (e) {
      console.error('Error cargando promociones:', e);
    } finally {
      loading.value = false;
    }
  });

  const activeOffers = computed(() => offers.value.filter((offer) => offer.active !== false));

  return { offers, activeOffers, loading };
}
