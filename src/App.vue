<script setup lang="ts">
  import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <v-app class="app-background">
    <v-main>
      <AppNavbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.v-main {
  padding: 0 !important;
}
</style>