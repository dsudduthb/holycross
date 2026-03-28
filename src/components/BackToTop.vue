<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>
<template>
<v-btn
    icon
    color="primary"
    class="back-to-top"
    @click="scrollToTop"
  >
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>
<style>
.back-to-top {
  position: fixed !important;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}
</style>