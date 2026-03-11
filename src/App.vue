<script setup lang="ts">
  import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <v-app class="app-background">
    <AppNavbar />
    <v-main>
        <router-view />
    </v-main>
  </v-app>
</template>

<style>
.v-main {
  padding: 0 !important;
}
  .title {
    color: black;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: unset;
    font-size:300%;
    text-align: center;
  }

  .subtext {
    color: black; 
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    font-weight: unset;
  }
</style>