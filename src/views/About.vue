<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import CREED from '../assets/creed.txt?raw'
import creed_image from '../assets/priest_kneeling_mass.png'
import anglicanism_image from '../assets/washington_cathedral.png'
import catholicism_image from '../assets/augustine_of_canterbury.png'

const router = useRouter()

function scrollTo(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  })
}

function goToWorship(){
    router.push('/worship')
}
</script>

<template>
    <div>
        <div class="mt-5">
            <h2 class="subtext">"One, Holy, Catholic, and Apostolic Church"</h2>
        </div>

        <div class="mt-3" style="font-family: Georgia, 'Times New Roman', Times, serif; text-align: center;">
            <v-row>
                <v-col>
                    <v-card class="card pa-7" color="grey" @click="scrollTo('christian-card')">
                        Christian
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="card pa-7" color="grey" @click="scrollTo('catholic-card')">
                        Catholic
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="card pa-7" color="grey" @click="scrollTo('anglican-card')">
                        Anglican
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="card pa-7" color="grey">
                        Continuuing
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <!--CREED CARD-->
        <div class="pt-5" id="christian-card">
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
         <!--CATHOLIC CARD-->
        <div class="pt-5" id="catholic-card">
            <v-card color="primary">
                <v-row no-gutters>
                <v-col cols="6">
                    <div class="pt-3" style="font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold; text-align: center;">
                        Catholic
                    </div>                    
                    <div  class="pl-3 pr-3 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        The word "Catholic" comes from a greek word meaning "apart of the whole." The Catholic religion therefore can be was described as 
                        Saint Vincent did: "what has been believed everywhere, always, and by all."
                        We seek to live the Apostolic faith as it has been passed down through scripture and tradition.
                        The aim of the Catholic Church is unity with our Lord, Jesus Christ. The height of the Catholic worship is the mass, 
                        which we participate in every Sunday morning at 10AM.
                    </div>

                    <div class="text-center">
                        <v-btn @click="goToWorship()"
                            class="mt-10 mb-10" 
                            color="white" 
                            style="font-family: Georgia, 'Times New Roman', Times, serif;">
                            Join Us in Worship
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="6">
                    <v-img :src="catholicism_image" cover height="100%"/>
                </v-col>
                </v-row>
            </v-card>
        </div>
        <!--ANGLICANISM CARD-->
        <div class="pt-5" id="anglican-card">
            <v-card color="primary">
                <v-row no-gutters>
                <v-col cols="6">
                    <v-img :src="anglicanism_image" cover height="100%"/>
                </v-col>
                <v-col cols="6">
                    <div class="pt-3" style="font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold; text-align: center;">
                        Anglican
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
                </v-row>
            </v-card>
        </div>
    </div>
</template>