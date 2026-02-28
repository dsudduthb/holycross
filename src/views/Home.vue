<script setup>
  import mass_icon from '../assets/eucharist.png'
</script>
<template>
  <div>
    <div class="mt-10 mb-10">
      <h1 class="title">Traditional Anglicanism</h1>
      <h2 class="subtext">in Oklahoma City</h2>
    </div>
    <div>
      <v-card color="primary" class="d-flex">
        <img :src="mass_icon"/>
        <div class="pa-5">
          <div style="font-family: 'Times New Roman', Times, serif; font-size: 150%; text-align: center;">
            +Traditional Liturgy+
          </div>
          <v-btn color="white" style="font-family: Georgia, 'Times New Roman', Times, serif;">Join Us in Worship</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style>
  .title {
    color: black;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: unset;
    font-size:300%;
    text-align: center;
  }

  .subtext {
    color: black; 
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    font-weight: unset;
  }
</style>