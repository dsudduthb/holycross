<script setup>
import { ref } from 'vue'
import CREED from '../assets/creed.txt?raw'
import creed_image from '../assets/priest_kneeling_mass.png'
import anglicanism_image from '../assets/washington_cathedral.png'

var show_creed = ref(false);
</script>

<template>
    <div>
        <div class="mt-5">
            <h2 class="subtext">"One, Holy, Catholic, and Apostolic Church"</h2>
        </div>

        <!--CREED CARD-->
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
        <!--ANGLICANISM CARD-->
        <div class="pt-5">
            <v-card color="primary">
                <v-row no-gutters>
                <v-col cols="6">
                    <div class="pt-3" style="font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold; text-align: center;">
                        Anglicanism
                    </div>                    
                    <div  class="pl-3 pr-3 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        Anglicanism is a form of Catholic Christianity expressed through the traditions of the English Church. We emphasize scripture,
                        tradition, and reason as the "three-legged stool" of the Church. Our faith is summarized by the Creed of the first Council of Nicaea
                        and it is practiced in that beautiful tradition charished and passed down since before 314AD, when the first Christians arrived in what is now England in 
                    </div>
                    <br>
                    <div  class="pl-3 pr-3 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        “We have no doctrine of our own.  We only possess the Catholic doctrine of the Catholic Church enshrined in the Catholic Creeds, and these creeds we hold without addition or diminution.  We stand firm on that rock.”
                        - The Most Revd Geoffrey Fisher (1887-1972), Archbishop of Canterbury
                    </div>
                </v-col>
                <v-col cols="6">
                    <v-img :src="anglicanism_image" cover height="100%"/>
                </v-col>
                </v-row>
            </v-card>
        </div>
    </div>
</template>