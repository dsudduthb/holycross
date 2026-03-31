<script setup>
    import holyCross from '../assets/holy_cross.png'
    import { useRouter, useRoute } from 'vue-router'
    import { computed } from 'vue'

    const router = useRouter()
    const route = useRoute()
    const isHome = computed(() => (
      route.path === '/' || route.path === '/our_parish'
    ))

    function goToHome(){
      router.push('/')
    }
</script>

<template>
  <v-card
    class="navbar pa-5 rounded-0 d-flex flex-column align-center elevation-0"
    :class="{
      'bg-transparent': isHome,
      'navbar--solid bg-background': !isHome,
      'navbar--absolute': isHome,
    }"
  >
    <div class="logo-container">
      <div class="holy_cross_logo" :class="{'nav-link--white' : isHome}">Holy</div>

      <img
        :src="holyCross"
        alt="Holy Cross"
        width="70"
        @click="goToHome"
      />

      <div class="holy_cross_logo" :class="{'nav-link--white' : isHome}">Cross</div>
    </div>

    <div class="d-flex ga-4">
      <router-link class="nav-link" :class="{'nav-link--white' : isHome}" to="/">HOME</router-link>
      <router-link class="nav-link" :class="{'nav-link--white' : isHome}" to="/about">ABOUT</router-link>
      <router-link class="nav-link" :class="{'nav-link--white' : isHome}" to="/worship">WORSHIP</router-link>
      <router-link class="nav-link" :class="{'nav-link--white' : isHome}" to="/our_parish">OUR PARISH</router-link>
      <router-link class="nav-link" :class="{'nav-link--white' : isHome}" to="/staff">STAFF</router-link>
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

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.holy_cross_logo {
  display: flex;
  align-items: center;
  height: 70px;
  color:black;
  font-family: "Celtic Font";
  font-size: x-large;
}

.navbar--absolute {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.navbar--solid {
  position: relative; /* or static */
  width: 100%;
}

.nav-link--white{
  color:white;
}
</style>