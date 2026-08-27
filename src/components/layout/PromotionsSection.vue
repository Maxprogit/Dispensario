<template>
  <div v-if="activeOffers.length" class="promotions-section">
    <v-row class="my-4">
      <v-col cols="12" class="text-center">
        <span class="section-title">✦ Promociones ✦</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="offer in activeOffers" :key="offer.id" cols="12" sm="6" md="4">
        <v-card class="promo-card">
          <v-img :src="offer.imageUrl" height="160" cover class="promo-img">
            <template #error>
              <div class="promo-img-fallback d-flex align-center justify-center">
                <v-icon size="40" color="grey-darken-1">mdi-tag-heart</v-icon>
              </div>
            </template>
          </v-img>
          <v-card-title class="promo-title">{{ offer.title }}</v-card-title>
          <v-card-text class="promo-details">{{ offer.details }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="my-6 border-opacity-25" />
  </div>
</template>

<script setup>
import { useOffers } from '@/composables/useOffers';

const { activeOffers } = useOffers();
</script>

<style scoped>

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #4caf50;
  letter-spacing: 0.1em;
}
.promo-card {
  background: #1a1a1a;
  border-radius: 14px;
  overflow: hidden;
  height: 100%;
}
.promo-img {
  border-radius: 14px 14px 0 0;
}
.promo-img-fallback {
  height: 100%;
  background: #111;
}
.promo-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #eee;
}
.promo-details {
  color: #bbb;
  font-size: 0.85rem;
}
</style>
