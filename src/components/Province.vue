<script setup>
import apck from '../assets/APCK_seal.png' 

function goto_apck_site(){
window.open("https://www.anglicanpck.org/", "_blank");
}
</script>
<template>
<v-card class="w-100 pa-10 ma-0" color="secondary" rounded="0" elevation="0">
  <v-row align="center" justify="center">
    <v-col cols="auto" class="d-flex justify-center">
      <v-img 
        :src="apck" 
        class="seal"
        max-width="120"
        @click="goto_apck_site()"
      />
    </v-col>
    <v-col cols="auto" class="text-left" style="font-family: Celtic Font;">
      Anglican<br>
      Province<br>
      of Christ<br>
      the King
    </v-col>
  </v-row>
</v-card>
</template>