<script setup lang="ts">
  import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <v-app class="app-background">
    <AppNavbar />
    <v-main>
      <v-container style="max-width: 33%;">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.v-main {
  padding: 0 !important;
}
</style>