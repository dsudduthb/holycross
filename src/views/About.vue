<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

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

function goto_apck_site(){
    window.open("https://www.anglicanpck.org/", "_blank");
}
</script>

<template>
<v-container style="width: 60%;">
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
            <v-card color="primary">
                <v-row no-gutters>
                <v-col cols="6">
                    <v-img :src="creed_image" cover height="100%"/>
                </v-col>
                <v-col cols="6">
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
            <v-card color="primary">
                <v-row no-gutters>
                <v-col cols="6">
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
                            <v-list-item-title class="info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We believe in seven sacraments</v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title class="info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We the seven ecumenical councils</v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title class="info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We believe in the apostolic succession of our bishops</v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title class="info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We believe in the Real Presence of the Eucharist</v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title class="info-card-text" style="font-family: 'Times New Roman', Times, serif; font-size: larger;">
                                We believe in the efficacy of baptism</v-list-item-title>
                        </v-list-item>
                    </v-list>
                    <div align="center" class="pa-3">
                        <v-btn @click="goToWorship" class="mt-5 text-center" style="color: black; font-family: Georgia, 'Times New Roman', Times, serif;" flat rounded="0">
                            What are the Sacraments?
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
            <v-card color="primary">
                <v-row no-gutters>
                <v-col cols="6">
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
                        <v-list-item prepend-icon="mdi-circle-small">
                            <v-list-item-title style="font-family: 'Times New Roman', Times, serif; font-size: large;">
                                The Anglican Catholic Church (ACC)</v-list-item-title>
                            <v-list-item-title style="font-family: 'Times New Roman', Times, serif; font-size: large;">
                                The United Episcopal Church of North America (UECNA)</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="6">
                    <v-img :src="continuing" cover height="100%"/>
                </v-col>
                </v-row>
            </v-card>
        </div>
    </div>
</v-container>

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
.info-card-title{
    font-size: 200%;
}
.info-card-text{
    font-size: 120%;
}
.about-btn{
    font-family: Georgia, 
    'Times New Roman', Times, serif; 
    font-weight: bold;
}
.subtext{
    color: #993939;
    font-size: xxx-large;
}
</style>