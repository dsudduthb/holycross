<script setup>
  import mass_icon from '../assets/eucharist.png'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function goToWorship() {
    router.push('/worship')
  }
</script>
<template>

<v-container style="max-width: 50%;">
    <div class="mt-10 mb-10">
      <h1 class="title">Traditional Anglicanism</h1>
      <h2 class="subtext">in Oklahoma City</h2>
    </div>

    <!--The invitation to worship card-->
    <div>
      <v-card color="primary" class="d-flex">

        <!--The Eucharist icon for the card-->
        <v-img :src="mass_icon" />

        <div class="pa-5 text-center">

          <div style="font-family: 'Times New Roman', Times, serif; font-size: 150%; text-align: center;">
            +Traditional Liturgy+
          </div>

          <v-btn @click="goToWorship()"
            class="mt-10 mb-10" 
            color="white" 
            style="font-family: Georgia, 'Times New Roman', Times, serif;">
            Join Us in Worship
          </v-btn>

          <div style="font-family: 'Times New Roman', Times, serif; text-align: center;">
            "O COME, let us sing unto the LORD;<br>
            let us heartily rejoice<br> 
            in the strength of our salvation.""
          </div>

        </div>
      </v-card>
      

    </div>  
  </v-container>
    <v-container fluid class="px-0">
      <v-card class="mt-10 w-100 text-center pa-10" color="primary">
        <v-row justify="center" class="pa-10">
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
  </v-container>
</template>
<style>
.schedule-header{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: larger;
  font-weight: bold;
}

.schedule-times{
  font-family: 'Times New Roman', Times, serif;
  font-size: large;
}
</style>