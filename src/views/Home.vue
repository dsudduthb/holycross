<script setup>
  import mass_icon from '../assets/eucharist.png'
  import what_anglican from '../assets/save_thy_people.jpg'
  import apck from '../assets/APCK_seal.png' 
  import parish from '../assets/church_landscape2.png'

  import { useRouter } from 'vue-router'

  const router = useRouter()

  function goToWorship() {
    router.push('/worship')
  }

  function goto_apck_site(){
    window.open("https://www.anglicanpck.org/", "_blank");
  }
</script>
<template>
<AppNavbar />
<v-img :src="parish">

</v-img>

<!-- <v-container style="max-width: 50%;">
    <div class="mt-10 mb-10">
      <h1 class="title">Traditional Anglicanism</h1>
      <h2 class="subtext">in Oklahoma City</h2>
    </div>

    <div>
      <v-card color="primary" class="d-flex">

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
  </v-container> -->
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

    <v-img
      :src="what_anglican"
      cover
      height="500">
      <div class="text-h4 text-white overlay-text" style="font-family: 'Times New Roman', Times, serif;">
        “No earthly pleasures, no kingdoms of this world can benefit me in any way. I prefer death in Christ Jesus to power over the farthest limits of the earth. He who died in place of us is the one object of my quest. He who rose for our sakes is my one desire.”
        <br>
       - St. Ignatius of Antioch
      </div>
    </v-img>

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

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 50%;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}

.seal{
  width: 100px;
}
</style>