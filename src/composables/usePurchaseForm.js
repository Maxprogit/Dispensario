import { reactive } from 'vue';
import { supabase } from '@/supabase';

const state = reactive({
  isOpen: false,
  product: null,
  prefillQuantity: 1,
  prefillPeso: null,
});

export function usePurchaseForm() {
  
  const openPurchaseForm = async (product, quantity = 1, peso = null) => {
    state.product = product;
    state.prefillQuantity = quantity > 0 ? quantity : 1;
    state.prefillPeso = peso;
    state.isOpen = true;

    try {
      await supabase.from('system_logs').insert([
        { event_type: `Intento de compra: ${product?.name ?? 'Desconocido'} (${peso ?? 'General'})` }
      ]);
    } catch (error) {
      
    }
  };

  const closePurchaseForm = () => {
    state.isOpen = false;
  };

  return { state, openPurchaseForm, closePurchaseForm };
}