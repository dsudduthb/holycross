<script setup>
  import come_worship from '../assets/sanctuary.jpg'
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
<v-img :src="parish"/>

<v-card color="primary" class="pa-10" rounded="0">
  <v-row align="center" justify="center">
    <v-col cols="auto">
      <div class="d-flex align-center justify-center">

        <v-img
          :src="come_worship"
          width="500"
          class="mr-8"
          cover
          style="left: -10%;"
        />

        <div class="text-center" style="font-family: Georgia, 'Times New Roman', Times, serif;">
          <div style="font-weight: bold; font-size:250%;">+Traditional Liturgy+</div>
          <div style="font-size: 150%;">Come Worship with Us</div>
          <a class="pt-1" href="https://www.google.com/maps?q=10509+N+Council+Road+Oklahoma+City,+OK+73162" target="_blank" style=" color: inherit;">
            10509 N Council Road<br>
            Oklahoma City, OK 73162<br>
          </a>
          <v-btn @click="goToWorship" class="mt-5" style="color: black;" flat rounded="0">How Do We Worship?</v-btn>
          <div style="text-align: center;" class="mt-5">
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

  <v-img :src="what_anglican" cover class="banner-img">
    <div class="banner-overlay">
      <div class="banner-text">
        “No earthly pleasures, no kingdoms of this world can benefit me in any way. I prefer death in Christ Jesus to power over the farthest limits of the earth. He who died in place of us is the one object of my quest. He who rose for our sakes is my one desire.”
        <br>
        - St. Ignatius of Antioch        
      </div>
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

.banner-img {
  height: 60vh;
  min-height: 300px;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden; /* 👈 prevents spill */
}

.banner-text {
  font-family: 'Celtic Font';
  text-align: center;
  color: white;

  /* More aggressive scaling */
  font-size: clamp(0.8rem, 2.2vw, 2rem);

  max-width: 900px;
  max-height: 100%; /* 👈 critical */
  
  overflow: hidden; /* 👈 prevents vertical overflow */
  
  line-height: 1.25;
  word-break: break-word;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}
</style>