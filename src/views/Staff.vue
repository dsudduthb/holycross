<script setup>
import newcomb from '../assets/staff/fr_newcomb.png'
import williams from '../assets/staff/fr_mark.jpg'
import vestry from '../assets/staff/vestry.jpg'
import anthony from '../assets/staff/Xu_Anthony.jpg'
import apck from '../assets/APCK_seal.png'

function goto_apck_site(){
  window.open("https://www.anglicanpck.org/", "_blank");
}
</script>
<template>
    <v-container width="50%">
        <v-row>
            <v-col col="auto">
                <v-img :src="newcomb" class="staff-img"/>
            </v-col>
            <v-col>
                <div class="staff-title">Rev. Father Charles Newcomb<br>Rector</div>
                <v-divider></v-divider>
                <div class="staff-text mt-10">
                    Ordained May 18, 2024, by the Right Reverend Peter F. Hansen, 
                    Bishop Coadjutor of the Diocese of the Western States, 
                    Father Newcomb has a degree in Communication from the 
                    University of Central Oklahoma and studies at St. Joseph of Arimathea 
                    Anglican Theological College.  He worked for many years in the 
                    radio and television field.
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col col="auto">
                <v-img :src="anthony" class="staff-img"/>
            </v-col>
            <v-col>
                <div class="staff-title">Jiapeng (Anthony) Xu,<br>Staff Organist</div>
                <v-divider></v-divider>
                <div class="staff-text mt-10">
                    Anthony is a doctoral student at the University of Oklahoma 
                    and has previously studied at the University of North Texas, 
                    the Royal College of Music (UK), and the Nanyang Academy of Fine Arts (Singapore).
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col col="auto">
                <v-img :src="williams" class="staff-img"/>
            </v-col>
            <v-col>
                <div class="staff-title">Rev. Father Mark Williams<br>Rector Emeritus</div>
                <v-divider></v-divider>
                <div class="staff-text mt-10">
                    Retired in August 2023, but still very much in our hearts.  
                    Godspeed Father Mark and family!
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col col="auto">
                <v-img :src="vestry" class="staff-img"/>
            </v-col>
            <v-col>
                <div class="staff-title">Our Leadership</div>
                <v-divider></v-divider>
                <div class="staff-text mt-10">
                    From Left: Senior Warden Paul Ogbalu, Junior Warden Bruce Rosier, Vestry Member Blake Perry, Clerk Judith Johnson, Treasurer Giacomo Domenack, Vestry Member Samuel Emesiani
                    Not Pictured: Vestry Member Merrilyn Livermon
                </div>
            </v-col>
        </v-row>
    </v-container>

<v-card  class="w-100 text-center pa-10 ma-0" color="primary" rounded="0" elevation="0">
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
.staff-title{
    font-size: xx-large;
    color: #742b2b;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.staff-text{
    font-size: larger;
    font-family: 'Times New Roman', Times, serif;
}
.staff-img{
    max-height: auto;
}
</style>