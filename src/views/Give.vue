<script setup>
import banner from '../assets/giving.png'
import tithe from '../assets/tithely.jpg'

import Province from '../components/Province.vue'
import MassTimes from '../components/MassTimes.vue'

function goto_tithe_site(){
  window.open("https://give.tithe.ly/?formId=a0569f8e-358a-40cd-a26e-6734a20fa009", "_blank");
}
</script>
<template>
<v-img :src="banner" cover class="banner-img">
    <div class="banner-overlay">
        <div class="banner-text">
            Giving
        </div>
    </div>
</v-img>

<v-container class="ma-10 mx-auto" width="auto">
  <div class="about-text pa-10 ma-10">
      "It is more blessed to give than to receive."
  </div>
</v-container>
<v-divider></v-divider>

<div class="mb-5 mt-5" align="center">
    <v-img :src="tithe" class="tithe-img"
    @click="goto_tithe_site()"></v-img>
</div>
<MassTimes/>
<Province/>
</template>
<style>
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
  font-family: 'Celtic Font';
  text-align: center;
  color: white;
  font-size: clamp(2rem, 6vw, 4rem);
}

@media (max-width: 600px) {
  .banner-img {
    height: 40vh;
  }
}

.banner-overlay {
  background: rgba(0, 0, 0, 0.4);
}

.tithe-img {
  width: 25%;
  cursor: pointer;
}

@media (max-width: 600px) {
  .tithe-img {
    width: 80%;
  }
}
</style>