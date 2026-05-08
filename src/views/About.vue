<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Province from '../components/Province.vue'
import MassTimes from '../components/MassTimes.vue'

import CREED from '../assets/creed.txt?raw'
import creed_image from '../assets/priest_kneeling_mass.png'
import anglicanism_image from '../assets/washington_cathedral.png'
import catholicism_image from '../assets/augustine_of_canterbury.png'
import agnus_dei from '../assets/agnus_dei.png'
import ctbry_cross from '../assets/canterbury_cross.png'
import apck2 from '../assets/APCK_alt.png'
import mitre from '../assets/mitre.png'
import continuing from '../assets/continuing.jpg'
import apck from '../assets/APCK_seal.png' 

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
<v-container class="main-container">
    <div>
        <div class="mt-5">
            <h2 class="subtext">"One, Holy, Catholic, and Apostolic Church"</h2>
        </div>

        <div class="mt-5 mb-10" style="font-family: Georgia, 'Times New Roman', Times, serif; text-align: center;">
            <v-row>
                <v-col class="text-center">
                    <v-img :src="agnus_dei" class="card pa-7 mx-auto" style="width: 70%;" @click="scrollTo('christian-card')"/>
                    <div class="about-btn">Christian</div>
                </v-col>
                <v-col class="text-center">
                    <v-img :src="mitre" class="card pa-7 mx-auto" style="width: 70%;" @click="scrollTo('catholic-card')"/>
                    <div class="about-btn">Catholic</div>
                </v-col>
                <v-col class="text-center">
                    <v-img :src="ctbry_cross" class="card pa-7 mx-auto" style="width: 70%;" @click="scrollTo('anglican-card')"/>
                    <div class="about-btn">Anglican</div>
                </v-col>
                <v-col class="text-center">
                    <v-img :src="apck2" class="card pa-7 mx-auto" style="width: 70%;" @click="scrollTo('continuing-card')"/>
                    <div class="about-btn">Continuing</div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
        </div>

        <!--CREED CARD-->
        <div class="pt-5" id="christian-card">
            <v-card color="primary" class="info-card">
                <v-row no-gutters>
                <v-col cols="12" md="6">
                    <v-img :src="creed_image" cover height="100%"/>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="info-card-title pt-3" style="font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold; text-align: center;">
                        Christian
                    </div>
                    <div class="info-card-text pl-5 pr-5 pb-5" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        The Christian faith is summarized in the creed composed at the first Nicene council and the first council of Constantinople:
                    </div>
                    <div class="info-card-text pl-5 pr-5 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        "{{CREED}}"
                    </div>
                </v-col>
                </v-row>
            </v-card>
        </div>
         <!--CATHOLIC CARD-->
        <div class="pt-5" id="catholic-card">
            <v-card color="primary" class="info-card">
                <v-row no-gutters>
                <v-col cols="12" md="6">
                    <div class="info-card-title pt-3" style="font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold; text-align: center;">
                        Catholic
                    </div>
                    <div class="info-card-text pl-3 pr-3 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        The word "Catholic" comes from a greek word meaning "apart of the whole." The Catholic religion therefore can be was described as 
                        Saint Vincent did: "what has been believed everywhere, always, and by all."
                        We seek to live the Apostolic faith as it has been passed down through scripture and tradition.
                        The aim of the Catholic Church is unity with our Lord, Jesus Christ. The height of the Catholic worship is the mass, 
                        which we participate in every Sunday morning at 10AM.
                    </div>
                    <v-list class="bg-primary">
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title class="text-wrap info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We believe in seven sacraments</v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title class="text-wrap info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We the seven ecumenical councils</v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title class="text-wrap info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We believe in the apostolic succession of our bishops</v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title class="text-wrap info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We believe in the Real Presence of the Eucharist</v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title class="text-wrap info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We believe in the efficacy of baptism</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    <div align="center" class="pa-3">
                        <v-btn @click="goToWorship" class="mt-5 text-center" style="color: black; font-family: Georgia, 'Times New Roman', Times, serif;" flat rounded="0">
                            What are the Sacraments?
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <v-img :src="catholicism_image" cover height="100%"/>
                </v-col>
                </v-row>
            </v-card>
        </div>
        <!--ANGLICANISM CARD-->
        <div class="pt-5" id="anglican-card">
            <v-card color="primary" class="info-card">
                <v-row no-gutters>
                <v-col cols="12" md="6">
                    <v-img :src="anglicanism_image" cover height="100%"/>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="info-card-title pt-3" style="font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold; text-align: center;">
                        Anglican
                    </div>                    
                    <div  class="info-card-text pl-3 pr-3 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        Anglicanism is a form of Catholic Christianity expressed through the traditions of the English Church. We emphasize scripture,
                        tradition, and reason as the "three-legged stool" of the Church. Our faith is summarized by the Creed of the first Council of Nicaea
                        and it is practiced in that beautiful tradition charished and passed down since before 314AD, when the first Christians arrived in what is now England in 
                    </div>
                    <br>
                    <div  class="info-card-text pl-3 pr-3 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        “We have no doctrine of our own.  We only possess the Catholic doctrine of the Catholic Church enshrined in the Catholic Creeds, and these creeds we hold without addition or diminution.  We stand firm on that rock.”
                        - The Most Revd Geoffrey Fisher (1887-1972), Archbishop of Canterbury
                    </div>
                </v-col>
                </v-row>
            </v-card>
        </div>
        <div class="pt-5" id="continuing-card">
            <v-card color="primary" class="info-card">
                <v-row no-gutters>
                <v-col cols="12" md="6">
                    <div class="info-card-title pt-3" style="font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold; text-align: center;">
                        Continuing
                    </div>
                    <div class="info-card-text pl-3 pr-3 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        "WE affirm that the Church of our fathers, sustained by the most Holy Trinity, lives yet, 
                        and that we, being moved by the Holy Spirit to walk only in that way, are determined to 
                        continue in the Catholic Faith, Apostolic Order, Orthodox Worship and Evangelical Witness 
                        of the traditional Anglican Church, doing all things necessary for the continuance of the same. 
                        We are upheld and strengthened in this determination by the knowledge that many provinces 
                        and dioceses of the Anglican Communion have continued steadfast in the same Faith, Order, 
                        Worship and Witness, and that they continue to confine ordination to the priesthood and the 
                        episcopate to males. We rejoice in these facts and we affirm our solidarity with these 
                        provinces and dioceses."<br>- The Affirmation of Saint Louis, 1977 
                    </div>
                    <div class="info-card-text pl-3 pr-3 pb-3" style="font-family: 'Times New Roman', Times, serif; text-align: justify;">
                        Our province, the Anglican Province of Christ the King (APCK) is Anglo-Catholic and "high-church", though some Continuing 
                        Anglican provinces are themselves more reformed.
                    </div>
                    <v-list class="info-card-text bg-primary pa-3">
                        <div style="font-family: Georgia, 'Times New Roman', Times, serif;">We are in Communion with:</div>
<v-list-item>
  <v-list-item-title class="text-wrap">
    The Anglican Catholic Church (ACC)
  </v-list-item-title>
</v-list-item>

<v-list-item>
  <v-list-item-title class="text-wrap">
    The United Episcopal Church of North America (UECNA)
  </v-list-item-title>
</v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="12" md="6">
                    <v-img :src="continuing" cover height="100%"/>
                </v-col>
                </v-row>
            </v-card>
        </div>
    </div>
</v-container>

<MassTimes/>
<Province/>
</template>
<style>
.main-container {
  width: 60%;
}

.info-card {
  padding: 24px;
}

.info-card-text {
font-size: 130%;
line-height: 1.7;
}

.info-card-title {
font-size: 150%;
}

@media (max-width: 960px) {
  .main-container {
    width: 98%;
  }

  .info-card {
    padding: 32px;
  }

  .info-card-title {
    font-size: 150%;
  }

  .info-card-text {
    font-size: 110%;
    line-height: 1.7;
  }

  .subtext {
    font-size: xx-large;
    text-align: center;
  }
}

</style>