<script setup lang="ts">
import holyCross from './assets/holy_cross.png'

</script>

<template>
  <v-app class="app-background">
    <v-main>
      <v-card color="primary" :rounded="0" class="pa-5">
        <nav class="d-flex align-center ga-4">
          <img :src="holyCross" alt="Holy Cross" width="4%"/>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
        </nav>
      </v-card>
    <router-view />
    </v-main>
  </v-app>
</template>
<style>
  .nav-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: large;
  }

  .nav-link:hover {
    text-decoration: underline;
  }
</style>