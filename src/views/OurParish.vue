<script setup>
import { ref } from 'vue'
import parish_photo2 from '../assets/parish_photo2.png'
import christ_window from '../assets/building/christ.jpg'
import mary_window from '../assets/building/theotokos.jpg'
import eucharist_window from '../assets/building/eucharist.jpg'
import normal_window from '../assets/building/stained_glass.jpg'
import cross_window from '../assets/building/sanctus_crux.jpg'
import sanctuary from '../assets/the_space/sanctuary.jpg'

import MassTimes from '../components/MassTimes.vue'
import Province from '../components/Province.vue'
import MediaBar from '../components/MediaBar.vue'

const tab = ref('about')
const acolyte_customary = ref(false)
const altar_guild = ref(false)
const lay_reader = ref(false)
const penance_guide = ref(false)
const examine_conscience = ref(false)

const modules = import.meta.glob('/src/assets/parish_life/*', {
  eager: true,
  import: 'default'
})

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
<v-tabs
    v-model="tab"
    color="primary"
>
    <v-tab value="about">
    At a Glance
    </v-tab>

    <v-tab value="resources">
    Parish Resources
    </v-tab>
</v-tabs>

<v-tabs-window v-model="tab">
<v-tabs-window-item value="about">
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
</v-tabs-window-item>
<v-tabs-window-item value="resources">
  <v-container align="center">  
    <div v-if="!$vuetify.display.smAndDown">
      <div>
        <v-btn class="resource-text-button" variant="text" @click="lay_reader = !lay_reader" color="primary">
          View Lay Reader Guide
        </v-btn>
        <iframe
          v-if="lay_reader"
          src="/files/lay-reader-guide.pdf"
          width="100%"
          height="800"
          style="border: none;"
        ></iframe>
      </div>
    </div>

    <v-btn
      v-else
      color="primary"
      href="/files/lay-reader-guide.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Lay Reader Guide PDF
    </v-btn>
  </v-container>
  <v-container align="center">  
    <div v-if="!$vuetify.display.smAndDown">
      <div>
        <v-btn class="resource-text-button" variant="text" @click="acolyte_customary = !acolyte_customary" color="primary">
          View Acolyte Customary
        </v-btn>
        <iframe
          v-if="acolyte_customary"
          src="/files/acolyte-customary.pdf"
          width="100%"
          height="800"
          style="border: none;"
        ></iframe>
      </div>
    </div>

    <v-btn
      v-else
      color="primary"
      href="/files/acolyte-customary.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Acolyte Customary PDF
    </v-btn>
  </v-container>
  <v-container align="center">  
    <div v-if="!$vuetify.display.smAndDown">
      <div>
        <v-btn class="resource-text-button" variant="text" @click="altar_guild = !altar_guild" color="primary">
          View Altar Guild Checklist
        </v-btn>
        <iframe
          v-if="altar_guild"
          src="/files/altar-guild-checklist.pdf"
          width="100%"
          height="800"
          style="border: none;"
        ></iframe>
      </div>
    </div>

    <v-btn
      v-else
      color="primary"
      href="/files/altar-guild-checklist.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Altar Guild Checklist
    </v-btn>
  </v-container>
  <v-container align="center">  
    <div v-if="!$vuetify.display.smAndDown">
      <div>
        <v-btn class="resource-text-button" variant="text" @click="examine_conscience = !examine_conscience" color="primary">
          View Examination of Conscience
        </v-btn>
        <iframe
          v-if="examine_conscience"
          src="/files/examination-of-conscience-guide.pdf"
          width="100%"
          height="800"
          style="border: none;"
        ></iframe>
      </div>
    </div>

    <v-btn
      v-else
      color="primary"
      href="/files/examination-of-conscience-guide.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Examination of Conscience
    </v-btn>
  </v-container>
  <v-container align="center">  
    <div v-if="!$vuetify.display.smAndDown">
      <div>
        <v-btn class="resource-text-button" variant="text" @click="penance_guide = !penance_guide" color="primary">
          View Penance Guide
        </v-btn>
        <iframe
          v-if="penance_guide"
          src="/files/penance-liturgy.pdf"
          width="100%"
          height="800"
          style="border: none;"
        ></iframe>
      </div>
    </div>

    <v-btn
      v-else
      color="primary"
      href="/files/penance-liturgy.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Penance Guide
    </v-btn>
  </v-container>
</v-tabs-window-item>
</v-tabs-window>

<MassTimes/>
<Province/>
<MediaBar/>
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

.resource-text-button{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: x-large;
}
</style>