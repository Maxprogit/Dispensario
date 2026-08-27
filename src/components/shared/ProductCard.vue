<template>
  <v-card class="product-card" :elevation="hovered ? 8 : 2"
    @mouseenter="hovered = true" @mouseleave="hovered = false"
    @click="$emit('select', product)">
    <v-img :src="product.imageUrl" height="300px" fill class="product-img">
      <template #error>
        <div class="img-error-fallback d-flex align-center justify-center">
          <v-icon size="48" color="grey-darken-1">mdi-image-off</v-icon>
        </div>
      </template>
    </v-img>
    <v-chip
      v-if="product.type"
      class="type-chip ma-2"
      :color="typeColor(product.type)"
      size="small"
      variant="tonal"
    >{{ product.type }}</v-chip>

    <v-card-title class="product-name text-center">{{ product.name }}</v-card-title>
    <v-card-subtitle class="text-center text-caption" :class="`text-${typeColor(product.type)}`">
      {{ product.subcategory }}
    </v-card-subtitle>
    <v-card-text v-if="product.price" class="text-center price-tag">
      <span v-if="product.presentaciones?.length > 1">Desde </span>{{ product.price }}
      <span v-if="product.peso" class="price-weight"> · {{ product.peso }}</span>
    </v-card-text>

    <v-card-actions class="d-flex justify-center pb-3">
      <v-btn variant="flat" color="green-darken-3" size="small" @click.stop="buyProduct">
        <FontAwesomeIcon icon="fa-brands fa-whatsapp" class="mr-1" /> Comprar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { usePurchaseForm } from '@/composables/usePurchaseForm';
import { typeColor } from '@/utils/productType';

const props = defineProps({ product: Object });
defineEmits(['select']);
const hovered = ref(false);

const { openPurchaseForm } = usePurchaseForm();


const buyProduct = () => {
  openPurchaseForm(props.product);
};
</script>

<style scoped>
.product-card {
  border-radius: 14px;
  background: #1a1a1a;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}
.product-card:hover {
  transform: translateY(-4px);
}
.product-img {
  border-radius: 14px 14px 0 0;
  background: #111;
}
.img-error-fallback {
  height: 100%;
  background: #111;
}
.product-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #eee;
  line-height: 1.3;
  white-space: normal;
}
.price-tag {
  color: #4caf50;
  font-weight: 600;
  font-size: 0.9rem;
}
.price-weight {
  color: #9e9e9e;
  font-weight: 500;
  font-size: 0.8rem;
}
.type-chip {
  position: absolute;
  top: 8px;
  left: 8px;
}
</style>
