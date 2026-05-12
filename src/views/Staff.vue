<script setup>
import newcomb from '../assets/staff/fr_newcomb.png'
import williams from '../assets/staff/fr_mark.jpg'
import vestry from '../assets/staff/vestry.jpg'
import anthony from '../assets/staff/Xu_Anthony.jpg'
import apck from '../assets/APCK_seal.png'

import MassTimes from '../components/MassTimes.vue'
import Province from '../components/Province.vue'
</script>
<template>
<v-container class="my-10 mx-auto" max-width="1200">

  <v-row align="center" class="mb-12">
    <v-col cols="12" md="4">
      <v-img :src="newcomb" class="staff-img" cover />
    </v-col>

    <v-col cols="12" md="8">
      <div class="staff-title">
        The Rev'd. Charles Newcomb<br>Rector
      </div>

      <v-divider></v-divider>

      <div class="staff-text mt-6">
            Ordained May 18, 2024, by the Right Reverend Peter F. Hansen, 
            Bishop Coadjutor of the Diocese of the Western States, 
            Father Newcomb has a degree in Communication from the 
            University of Central Oklahoma and studies at St. Joseph of Arimathea 
            Anglican Theological College.  He worked for many years in the 
            radio and television field.
      </div>
    </v-col>
  </v-row>

  <v-row align="center" class="mb-12">
    <v-col cols="12" md="4">
      <v-img :src="anthony" class="staff-img" cover />
    </v-col>

    <v-col cols="12" md="8">
      <div class="staff-title">
        Jiapeng (Anthony) Xu,<br>Staff Organist
      </div>

      <v-divider></v-divider>

      <div class="staff-text mt-6">
            Anthony is a doctoral student at the University of Oklahoma 
            and has previously studied at the University of North Texas, 
            the Royal College of Music (UK), and the Nanyang Academy of Fine Arts (Singapore).
      </div>
    </v-col>
  </v-row>

  <v-row align="center" class="mb-12">
    <v-col cols="12" md="4">
      <v-img :src="vestry" class="staff-img" cover />
    </v-col>

    <v-col cols="12" md="8">
      <div class="staff-title">Our Leadership</div>

      <v-divider></v-divider>

      <div class="staff-text mt-6">
            From Left: Senior Warden Paul Ogbalu, Junior Warden Bruce Rosier, Vestry Member Blake Perry, Clerk Judith Johnson, Treasurer Giacomo Domenack, Vestry Member Samuel Emesiani
            Not Pictured: Vestry Member Merrilyn Livermon
      </div>
    </v-col>
  </v-row>

</v-container>
<MassTimes/>
<Province/>
</template>
<style>
.staff-title{
    font-size: xx-large;
    color: #742b2b;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.staff-text{
    font-size: larger;
    font-family: 'Times New Roman', Times, serif;
}

@media (max-width: 600px) {
  .v-container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .staff-title {
    text-align: center;
  }

  .staff-text {
    text-align: justify;
  }
}
</style>