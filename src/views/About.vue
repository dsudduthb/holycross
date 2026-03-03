<script setup>
import { ref } from 'vue'
import CREED from '../assets/creed.txt?raw'

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
    </div>
</template>