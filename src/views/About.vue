<script setup>
import { ref } from 'vue'
import CREED from '../assets/creed.txt?raw'
import creed_image from '../assets/priest_kneeling_mass.png'

var show_creed = ref(false);

function expandCreed(){
  console.log(show_creed.value);
  (show_creed.value == false) 
    ? (show_creed.value = true) 
    : (show_creed.value = false);
  console.log(show_creed.value);
}
</script>

<template>
    <div>
        <div class="mt-5 mb-10">
            <h2 class="subtext">"One, Holy, Catholic, and Apostolic Church"</h2>
        </div>

        <div>
            <v-card color="primary" class="pa-1">
                <v-btn variant="text" @click="expandCreed()" :ripple="false" style="font-family: Georgia, 'Times New Roman', Times, serif;">The Creed</v-btn>
                <v-card v-if="show_creed" class="ml-3 mr-3 mb-3 pa-2" :rounded="0" style="font-family: 'Times New Roman', Times, serif;">
                    {{ CREED }}
                </v-card>
            </v-card>
        </div>

        <div class="pt-5">
            <v-card color="primary">
                <v-row no-gutters>
                <v-col cols="6">
                    <v-img :src="creed_image" cover height="100%"/>
                </v-col>
                <v-col cols="6">
                    <div class="pt-3" style="font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold; text-align: center;">
                        THE NICENE CREED
                    </div>
                    <div  class="pl-3 pr-3 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        "{{CREED}}"
                    </div>
                </v-col>
                </v-row>
            </v-card>
        </div>
    </div>
</template>