<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Province from '../components/Province.vue'
import MassTimes from '../components/MassTimes.vue'
import MediaBar from '../components/MediaBar.vue'

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

const tab = ref('overview')

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
<v-tabs
    v-model="tab"
    color="primary"
>
    <v-tab value="who">
    Who Are We?
    </v-tab>

    <v-tab value="faq">
    FAQ
    </v-tab>

    <v-tab value="resources">
    Resources
    </v-tab>
</v-tabs>

<v-divider />

<v-tabs-window v-model="tab">
    <v-tabs-window-item value="who">
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
                                and it is practiced in that beautiful tradition charished and passed down since before 314AD, when the first Christians arrived in what is now England.
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
    </v-tabs-window-item>

    <v-tabs-window-item value="faq">
        <v-container class="main-container">
            <div class="mt-5">
                    <h2 class="subtext">Frequently Asked Questions</h2>
                </div>
            <div class="faq-title pa-5">
                What is Your Sunday Schedule?
                <v-divider />
                <div class="faq-text">
                    We begin our Sunday morning at 9:30AM with the office of Morning Prayer. 
                    This office is largely composed of the Psalms and scripture readings. Holy Communion, 
                    our primary service of the day, begins after morning prayer at 10AM. Immediately after 
                    Holy Communion we gather in the Parish Hall for fellowship and refreshments.
                </div>
            </div>
            <div class="faq-title pa-5">
                Will I be able to follow along?
                <v-divider />
                <div class="faq-text">
                    When you arrive, one of our greeters will meet you at the door. 
                    The greeter can provide you with a booklet upon request that will 
                    help you along with the service. Feel to ask any of our church members 
                    any questions you might about how to follow along.  Our priest is happy 
                    to visit with you about any questions you might have.
                </div>
            </div>
            <div class="faq-title pa-5">
                What Childrens Activities do you Have?
                <v-divider />
                <div class="faq-text">
                    On most Sundays, our volunteer Sunday school teachers take children to the classroom during the 
                    sermon for lessons and activities on the day's readings.  Visiting children are welcome to 
                    participate but you may choose to keep them with you in church.
                </div>
            </div>
            <div class="faq-title pa-5">
                What Should I Wear?
                <v-divider />
                <div class="faq-text">
                    We believe the church is holy ground and the Eucharist is a sacred moment. We simply ask that you dress with respect — 
                    nothing overly formal, just something that feels appropriate for a holy place. Come as you are, and know you're welcome!
                </div>
            </div>
            <div class="faq-title pa-5">
                What if I am not Comfortable with Everything?
                <v-divider />
                <div class="faq-text">
                   Often, visiting a liturgical service for the first time can be confusing. 
                   There may even be points in the liturgy that are baffling to new-comers. Generally, we kneel for prayer, 
                   sit for instruction, and stand for praise.  You may participate to the extent you're comfortable.
                </div>
            </div>
            <div class="faq-title pa-5">
                Can I Take Communion?
                <v-divider />
                <div class="faq-text">
                   There are three conditions in which you can receive communion:
                    <v-list bg-color="transparent">
                        <v-list-item prepend-icon="mdi-circle-small">You are a Baptized Christian.</v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">You Believe in the Real Presense of Jesus Christ in the Eucharist.</v-list-item>
                        <v-list-item prepend-icon="mdi-circle-small">You are permitted by the discipline of your own denomination.</v-list-item>
                    </v-list>
                    If you do not meet these qualifications (or if you do not wish to participate) then you may still approach the altar ritual
                    with everyone else to receieve a blessing. To receive a blessing, simply cross your arms in an 'X' shape across you chest. 
                    You may also remain in your pew.
                </div>
            </div>
            <div class="faq-title pa-5">
                How do I Receive Communion?
                <v-divider />
                <div class="faq-text">
                    You may receive in both kinds, in one kind, or by intinction.  If you receive in both kinds, 
                    you may receive the host on your tongue or in your hand.  If you choose intinction, please leave the host 
                    on your hand and the minister will dip it in the cub and place it on your tongue.
                </div>
            </div>
            <div class="faq-title pa-5">
                How do I join Holy Cross?
                <v-divider />
                <div class="faq-text">
                    If you wish to join our community, please talk to our priest before or after the service.
                </div>
            </div>
        </v-container>
    </v-tabs-window-item>

    <v-tabs-window-item value="resources">
        <v-container>
        <iframe
            align="center"
            src="../../public/files/the-affirmation-of-st.-louis.pdf"
            width="100%"
            height="800"
            style="border: none;"
        ></iframe></v-container>
    </v-tabs-window-item>
</v-tabs-window>

<MassTimes/>
<Province/>
<MediaBar/>
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

.faq-title{
    font-size: xx-large;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
}

.faq-text{
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
}

</style>