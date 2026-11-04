
<script setup>
import come_worship from '../assets/sanctuary.jpg'
import parish from '../assets/church_landscape2.png'
import seal from '../assets/simple_hc_icon.png'

import Province from '../components/Province.vue'
import MassTimes from '../components/MassTimes.vue'
import MediaBar from '../components/MediaBar.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

function goToWorship() {
  router.push('/worship')
}
</script>

<template>
  <AppNavbar />

  <v-img :src="parish" />

  <v-card
    color="primary"
    class="pa-10 worship-card"
    rounded="0"
  >
    <!-- Decorative crest behind the card content -->
<v-img
  :src="seal"
  class="seal-watermark"
  contain
  aria-hidden="true"
/>

    <v-row
      align="center"
      justify="center"
      class="worship-content"
    >
      <v-col cols="auto">
        <div class="d-flex flex-column flex-md-row align-center justify-center">

          <v-img
            :src="come_worship"
            class="mr-md-8 mb-4 mb-md-0"
            :width="$vuetify.display.smAndDown ? '100%' : 500"
            cover
          />

          <div
            class="text-center"
            style="font-family: Georgia, 'Times New Roman', Times, serif;"
          >
            <div style="font-weight: bold; font-size:250%;">
              +Traditional Liturgy+
            </div>

            <div style="font-size: 150%;">
              Come Worship with Us
            </div>

            <a
              class="pt-1"
              href="https://www.google.com/maps?q=10509+N+Council+Road+Oklahoma+City,+OK+73162"
              target="_blank"
              style="color: inherit;"
            >
              10509 N Council Road<br>
              Oklahoma City, OK 73162<br>
            </a>

            <v-btn
              @click="goToWorship"
              class="mt-5"
              style="color: black;"
              flat
              rounded="0"
            >
              How Do We Worship?
            </v-btn>

            <div class="mt-5" style="text-align: center;">
              "A man can no more diminish God's glory by refusing <br>
              to worship Him than a lunatic can put out the sun by <br>
              scribbling the word, 'darkness' on the walls of his cell."
              <br>- C.S. Lewis
            </div>
          </div>

        </div>
      </v-col>
    </v-row>
  </v-card>

  <MassTimes />
  <Province />
  <MediaBar />
</template>

<style>
.schedule-header {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: larger;
  font-weight: bold;
}

.schedule-times {
  font-family: 'Times New Roman', Times, serif;
  font-size: large;
}

.seal {
  width: 100px;
}

.banner-img {
  height: 60vh;
  min-height: 300px;
  position: relative;
  overflow: visible !important;
  isolation: isolate;
}

.worship-card {
  position: relative;
  overflow: visible !important;
  isolation: isolate;
}

.seal-watermark {
  position: fixed ;
  top: 50vh;
  left: 70vw;
  width: 100%;
  height: 80%;
  transform: translate(-50%, -50%);
  opacity: 0.18;
  filter: brightness(0) invert(1);
  pointer-events: none;
  z-index: 0;
}

.worship-content {
  position: relative;
  z-index: 1;
}

@media (max-width: 600px) {
  .seal-watermark {
    width: 85vw;
    height: 85vw;
    opacity: 0.12;
  }
}
</style>
