<script setup>
import parish_photo2 from '../assets/parish_photo2.png'
import christ_window from '../assets/building/christ.jpg'
import mary_window from '../assets/building/theotokos.jpg'
import eucharist_window from '../assets/building/eucharist.jpg'
import window from '../assets/building/stained_glass.jpg'
import cross_window from '../assets/building/sanctus_crux.jpg'
import sanctuary from '../assets/the_space/sanctuary.jpg'

import MassTimes from '../components/MassTimes.vue'
import Province from '../components/Province.vue'

const modules = import.meta.glob('/src/assets/parish_life/*', {
  eager: true,
  import: 'default'
})

const images = Object.values(modules)
</script>
<template>
<v-img :src="parish_photo2" cover>
    <div class="text-h2 text-white overlay-text" style="font-family: 'Times New Roman', Times, serif; text-align: center;">
       "One thing have I desired of the Lord, that will I seek after; 
       that I may dwell in the house of the Lord all the days of my life, 
       to behold the beauty of the Lord, and to enquire in his temple."<br>
        - Psalm 27:4
    </div>
</v-img>

<v-container class="ma-10 mx-auto" width="50%">
    <div class="about-text pa-10 ma-10">
        Hidden in the north-west corner of Oklahoma City is our little parish. We are a diverse group: accountants, engineers, soldiers
        students, nurses, teachers, and more. But we all come together in the beautiful english tradition of the worship of the one, true God.
    </div>
</v-container>

<v-container width="80%">
    <v-divider>
        <div class="about-text">
            Parish Life
        </div>
    </v-divider>
</v-container>

<v-container width="50%" class="mb-10">
  <v-carousel
    max-width="700"
    height="500"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
    >
      <v-img
        :src="image"
        contain
        height="100%"
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
      <v-img :src="window" width="250"/>
    </v-col>
  </v-row>
</v-container>

<v-container width="80%" class="mt-10 mb-10">
  <v-divider>
    <div class="about-text">
      The Sanctuary
    </div>
  </v-divider>

  <div class="d-flex justify-center mt-10">
    <v-img 
      :src="sanctuary" 
      max-width="800"
      class="mx-auto d-block"
    >
  </v-img>
  </div>
</v-container>

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
</style>