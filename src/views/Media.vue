<script setup>
import MassTimes from '../components/MassTimes.vue'
import Province from '../components/Province.vue'
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
<v-container width="66%">
<div class="about-text">Follow us on Social Media</div>

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

<v-divider></v-divider>

<div align="center" class="pt-5">
    <iframe 
        width="560" height="315" src="https://www.youtube.com/embed/ZgSfPbDWkHY?si=J_7JEjZqkKRmVsRA&amp;start=2063" 
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
</div>

</v-container>

<MassTimes/>
<Province/>
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