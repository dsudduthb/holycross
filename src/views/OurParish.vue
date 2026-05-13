<script setup>
import parish_photo2 from '../assets/parish_photo2.png'
import christ_window from '../assets/building/christ.jpg'
import mary_window from '../assets/building/theotokos.jpg'
import eucharist_window from '../assets/building/eucharist.jpg'
import normal_window from '../assets/building/stained_glass.jpg'
import cross_window from '../assets/building/sanctus_crux.jpg'
import sanctuary from '../assets/the_space/sanctuary.jpg'

import facebook from '../assets/facebook_logo.png'

import MassTimes from '../components/MassTimes.vue'
import Province from '../components/Province.vue'

const modules = import.meta.glob('/src/assets/parish_life/*', {
  eager: true,
  import: 'default'
})

function goto_fb_site(){
  window.open("https://www.facebook.com/holycrosschurchokc", "_blank");
}

const images = Object.values(modules)
</script>
<template>
<v-img :src="parish_photo2" cover class="banner-img">
  <div class="banner-overlay">
    <div class="banner-text">
       Our Parish
    </div>
  </div>
</v-img>

<v-container class="ma-10 mx-auto">
    <div class="about-text pa-10 ma-10">
        Our little parish was founded in 1978 by a small group of Christians seeking a traditional home. We are a diverse group: accountants, engineers, soldiers,
        students, nurses, teachers, and more. But we all come together in the beautiful English tradition of the worship of the one, true God.
    </div>
</v-container>

<v-container width="100%">
    <v-divider>
        <div class="about-text">
            Parish Life
        </div>
    </v-divider>
</v-container>

<v-container class="mb-10 img-carousel">
  <v-carousel
    class="parish-carousel"
    hide-delimiters
    :height="$vuetify.display.mobile ? 260 : 500"
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
    >
      <v-img
        :src="image"
        cover
        class="carousel-image"
      />
    </v-carousel-item>
  </v-carousel>
</v-container>

<v-container width="80%" class="mt-10 mb-10">
  <v-divider>
      <div class="about-text">
          Stained Glass Windows
      </div>
  </v-divider>

  <v-row class="mt-10" justify="center">
    <v-col cols="auto">
      <v-img :src="christ_window" width="250"/>
    </v-col>
    <v-col cols="auto">
      <v-img :src="mary_window" width="250"/>
    </v-col>
    <v-col cols="auto">
      <v-img :src="eucharist_window" width="250"/>
    </v-col>
    <v-col cols="auto">
      <v-img :src="cross_window" width="250"/>
    </v-col>
    <v-col cols="auto">
      <v-img :src="normal_window" width="250"/>
    </v-col>
  </v-row>
</v-container>

<div align="center" class="mb-10">
  <div class="about-text mb-10">
    Follow Us on Social Media
  </div>
  <v-img :src="facebook" class="facebook-icon" @click="goto_fb_site()"/>
</div>

<MassTimes/>
<Province/>
</template>

<style>
.about-text{
  font-family:'Times New Roman', Times, serif;
  color: #742b2b;
  font-size: x-large;
  font-style: italic;
  text-align: center;
}
.v-carousel .v-btn {
  background-color: #993939 !important;
  color: white;
}
.window-text{
  font-family:'Times New Roman', Times, serif;
  color: #993939;
  font-size: xx-large;
  font-style: italic;
  text-align: center;
}

.banner-img {
  height: 60vh;
  min-height: 300px;
}

.banner-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.banner-text {
  font-family:'Times New Roman', Times, serif;
  text-align: center;
  color: white;
  font-size: clamp(1.2rem, 3vw, 2rem);
}

@media (max-width: 600px) {
  .banner-img {
    height: 40vh;
  }
}

.facebook-icon {
  width: 8%;
  max-width: 80px;
}

@media (max-width: 600px) {
  .facebook-icon {
    width: 25%;
    max-width: 120px;
  }
}

.img-carousel{
  width: 50%;
}

.parish-carousel {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0,0,0,0.2);
}

.carousel-image {
  height: 100%;
  width: 100%;
}

@media (max-width: 600px) {
  .img-carousel{
    width: 95%;
  }

  .parish-carousel {
    border-radius: 12px;
  }
}
</style>