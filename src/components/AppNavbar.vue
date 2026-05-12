<script setup>
import holyCross from '../assets/holy_cross.png'
import { useRouter, useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { useDisplay } from 'vuetify'

const router = useRouter()
const route = useRoute()

const { mobile } = useDisplay()
const drawer = ref(false)

const isHome = computed(() => (
  route.path === '/' ||
  route.path === '/our_parish' ||
  route.path === '/worship' ||
  route.path === '/give'
))

function goToHome(){
  router.push('/')
  drawer.value = false
}

const links = [
  { title: 'HOME', path: '/' },
  { title: 'ABOUT', path: '/about' },
  { title: 'WORSHIP', path: '/worship' },
  { title: 'PARISH', path: '/our_parish' },
  { title: 'STAFF', path: '/staff' },
  { title: 'KALENDAR', path: '/kalendar' },
  { title: 'GIVE', path: '/give' },
]
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

    <!-- MOBILE TOP BAR -->
    <div
      v-if="mobile"
      class="d-flex justify-center w-100"
    >
      <div class="logo-container" @click="goToHome" style="cursor:pointer;">
        <div class="holy_cross_logo" :class="{'nav-link--white' : isHome}">
          Holy
        </div>

        <img
          :src="holyCross"
          alt="Holy Cross"
          width="70"
        />

        <div class="holy_cross_logo" :class="{'nav-link--white' : isHome}">
          Cross
        </div>
      </div>

      <v-btn
        icon
        color="primary"
        class="mobile-menu-btn"
        @click="drawer = true"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>

    <!-- DESKTOP LAYOUT -->
    <template v-else>
      <div class="logo-container">
        <div class="holy_cross_logo" :class="{'nav-link--white' : isHome}">
          Holy
        </div>

        <img
          :src="holyCross"
          alt="Holy Cross"
          width="70"
          @click="goToHome"
        />

        <div class="holy_cross_logo" :class="{'nav-link--white' : isHome}">
          Cross
        </div>
      </div>

      <div class="nav-links d-flex ga-4">
        <router-link
          v-for="link in links"
          :key="link.path"
          class="nav-link"
          :class="{'nav-link--white' : isHome}"
          :to="link.path"
        >
          {{ link.title }}
        </router-link>
      </div>
    </template>

    <!-- MOBILE DRAWER -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
    >
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.path"
          @click="router.push(link.path); drawer = false"
        >
          <v-list-item-title>
            {{ link.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </v-card>
</template>

<style scoped>
.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 8px;
}

@media (max-width: 700px) {
  .nav-links {
    gap: 12px !important;
  }

  .nav-link {
    font-size: medium;
  }
}
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
  z-index: 1000;
}

.navbar--solid {
  position: relative;
  width: 100%;
}

.nav-link--white{
  color:white;
}

.mobile-menu-btn {
  position: fixed !important;
  bottom: 24px;
  left: 24px;
  z-index: 2000;
}
</style>