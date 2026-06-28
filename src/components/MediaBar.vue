<script setup>
import facebook from '../assets/facebook_logo.png'
import youtube from '../assets/youtube_logo.png'

function goto_fb_site(){
  window.open("https://www.facebook.com/holycrosschurchokc", "_blank");
}
function goto_yt_site(){
  window.open("https://www.youtube.com/@AnglicanChurchoftheHolyCross", "_blank");
}
</script>
<template>
<v-card class="w-100 ma-0" color="secondary" rounded="0" elevation="0">
<v-row justify="center" align="center" class="social-row pb-5 pt-5">
  <v-col cols="auto">
    <v-img
      :src="facebook"
      class="social-icon"
      @click="goto_fb_site"
    />
  </v-col>

  <v-col cols="auto">
    <v-img
      :src="youtube"
      class="social-icon"
      @click="goto_yt_site"
    />
  </v-col>
</v-row>
</v-card>
</template>
<style>
.social-icon {
  width: 64px;
  max-width: 100%;
  cursor: pointer;
}
.social-row {
  gap: 32px;
}
</style>