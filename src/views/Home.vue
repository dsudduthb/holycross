<script setup>
  import mass_icon from '../assets/eucharist.png'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function goToWorship() {
    router.push('/worship')
  }
</script>
<template>
  <div>

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
            style="font-family: Georgia, 'Times New Roman', Times, serif; {left: '50%', transform:'translateX(-50%)'}">
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

  </div>
</template>