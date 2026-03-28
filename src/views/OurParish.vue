<script setup>
import parish_photo2 from '../assets/parish_photo2.png'
</script>
<template>
<v-img :src="parish_photo2" cover>
    <div class="text-h2 text-white overlay-text" style="font-family: 'Times New Roman', Times, serif; text-align: center;">
       "One thing have I desired of the Lord, that will I seek after; 
       that I may dwell in the house of the Lord all the days of my life, 
       to behold the beauty of the Lord, and to enquire in his temple."<br>
        - Psalm 27:4
    </div>
</v-img>

<v-container class="ma-10">
    <div class="about-text pa-10 ma-10">
        Hidden in the north-west corner of Oklahoma City is our little parish. We are a diverse group: accountants, engineers, soldiers
        students, nurses, teachers, and more. But we all come together in the beautiful english tradition of the worship of the one, true God.
    </div>


    <v-divider>
        <div class="about-text">
            Our Building
        </div>
    </v-divider>
    <v-row class="mt-10">
        <v-col>
            <v-img :src="parish_photo" :width="500"/>
        </v-col>
    </v-row>
    
</v-container>
</template>
<style>
.about-text{
    font-family:'Times New Roman', Times, serif;
    color: #742b2b;
    font-size: x-large;
    font-style: italic;
    text-align: center;
}
</style>