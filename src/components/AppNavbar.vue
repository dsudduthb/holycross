<script setup>
    import holyCross from '../assets/holy_cross.png'
</script>

<template>
  <v-card
    class="navbar pa-5 bg-white text-white rounded-0 d-flex flex-column align-center"
  >
    <img
      :src="holyCross"
      alt="Holy Cross"
      width="70"
      class="mb-3"
    />

    <div class="d-flex ga-4">
      <router-link class="nav-link" to="/">HOME</router-link>
      <router-link class="nav-link" to="/about">ABOUT</router-link>
      <router-link class="nav-link" to="/worship">WORSHIP</router-link>
      <router-link class="nav-link" to="/our_parish">OUR PARISH</router-link>
      <router-link class="nav-link" to="/staff">STAFF</router-link>
    </div>
  </v-card>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  font-size: large;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: black;
}

.nav-link:hover {
  text-decoration: underline;
  color: #993939;
}
</style>