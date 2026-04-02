<script setup>
import banner from '../assets/Eucharist-from-Side.jpg'
</script>
<template>
<v-img :src="banner" cover>
    <div class="text-h1 text-white overlay-text" style="font-family: 'Celtic Font'; text-align: center;">
       Worship & Sacraments
    </div>
</v-img>

<v-container class="ma-10 mx-auto" width="auto">
    <div class="about-text pa-10 ma-10">
        Scripture teaches us "thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength."
        Therefore we worship using all our senses. Even the space in which we come togethor is itself a pattern of worship.
    </div>
</v-container>

<v-container width="80%">
    <v-divider>
        <div class="sacra-title" style="font-style: italic;">
            The Sacraments
        </div>
    </v-divider>
</v-container>

<v-container>
  <v-row class="text-center" justify="center">
    <v-col cols="auto">
      <div class="sacra-title">Holy Communion</div>
      <div class="sacra-text">...</div>
    </v-col>
    <v-col cols="auto">
      <div class="sacra-title">Baptism</div>
      <div class="sacra-text">...</div>
    </v-col>
    <v-col cols="auto">
      <div class="sacra-title">Confirmation</div>
      <div class="sacra-text">...</div>
    </v-col>
    <v-col cols="auto">
      <div class="sacra-title">Matrimony</div>
      <div class="sacra-text">...</div>
    </v-col>
    <v-col cols="auto">
      <div class="sacra-title">Orders</div>
      <div class="sacra-text">...</div>
    </v-col>
    <v-col cols="auto">
      <div class="sacra-title">Reconciliation</div>
      <div class="sacra-text">...</div>
    </v-col>
    <v-col cols="auto">
      <div class="sacra-title">Unction</div>
      <div class="sacra-text">...</div>
    </v-col>
  </v-row>
</v-container>

  <v-card   class="w-100 text-center pa-10 ma-0" color="primary" rounded="0" elevation="0">
    <div style="font-size: x-large; font-family: Georgia, 'Times New Roman', Times, serif; font-style: italic; font-weight: bold;">Service Times</div>
    <v-row justify="center" class="pa-8">
      <v-col cols="auto">
        <div class="schedule-header">Morning Prayer</div>
        <div class="schedule-times">Sunday - 9:30 AM</div>
      </v-col>
      <v-col cols="auto">
        <div class="schedule-header">Holy Eucharist</div>
        <div class="schedule-times">Sunday - 10:00 AM</div>
      </v-col>
      <v-col cols="auto">
        <div class="schedule-header">Evening Prayer</div>
        <div class="schedule-times">Thursday - 6:00 PM</div>
      </v-col>
    </v-row>
  </v-card>
</template>
<style>
.sacra-title{
    font-size: xx-large;
    color: #742b2b;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.sacra-text{
    font-size: larger;
    font-family: 'Times New Roman', Times, serif;
}
</style>