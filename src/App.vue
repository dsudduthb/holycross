<template>
  <v-app class="app-background">
    <v-main>
       <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
    </v-main>
  </v-app>
</template>
<style>
</style>