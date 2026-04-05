<script setup>
import banner from '../assets/Eucharist-from-Side.jpg'

import sanctuary from '../assets/the_space/sanctuary.jpg'
import font from '../assets/the_space/holy_water_font.jpg'
import baptistry from '../assets/the_space/baptistry.jpg'
import stations from '../assets/the_space/station.jpg'
import mary_altar from '../assets/the_space/mary_altar.jpg'
import bishop_chair from '../assets/the_space/bishops_chair.jpg'
import lamp from '../assets/the_space/lamp_of_the_presence.jpg'
import altar from '../assets/the_space/altar.jpg'
import altar_crux from '../assets/the_space/altar_crucifix.jpg'
import veiled_crux from '../assets/the_space/veiled_crucifix.jpg'

</script>
<template>
<v-img :src="banner" cover class="banner-img">
  <div class="banner-overlay">
    <div class="banner-text">
      Worship & Sacraments
    </div>
  </div>
</v-img>

<v-container class="ma-10 mx-auto" width="auto">
  <div class="about-text pa-10 ma-10">
      Scripture teaches us "thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength."
      Therefore we worship using all our senses. Even the space in which we come togethor is itself a pattern of worship.
  </div>
</v-container>

<v-container width="80%">
  <v-divider>
      <div class="sacra-title" style="font-style: italic;">
          The Sacraments
      </div>
  </v-divider>
</v-container>

<v-container class="ma-10 mx-auto" width="auto">
  <div class="about-text">
      A sacrament is an outward and visible sign 
      of an inward and spiritual grace, given by 
      God as a means through which His life and 
      presence are received.
  </div>
</v-container>

<v-container width="80%">
  <v-row class="text-center" justify="center">
    <v-col cols="12" md="3">
      <div class="sacra-title">Holy Communion</div>
      <v-divider/>
      <div class="sacra-text">
        Communion (aka the Eucharist) is the central act of 
        Christian worship, in which Christ is truly 
        present under the forms of bread and wine. 
        In receiving Holy Communion, believers are 
        nourished spiritually and drawn into deeper 
        union with Christ and one another. We begin our liturgy
        of the Eucharist (aka the Mass) at 10AM on Sundays.
      </div>
    </v-col>
    <v-col cols="12" md="3">
      <div class="sacra-title">Baptism</div>
      <v-divider/>
      <div class="sacra-text">
        Baptism is the sacrament of new birth, 
        through which a person is united to Christ 
        and incorporated into the Church. Through 
        water and the Holy Spirit, sins are 
        forgiven and a new life of grace is begun. 
        It marks the beginning of a lifelong 
        journey of faith and discipleship.
      </div>
    </v-col>
    <v-col cols="12" md="3">
      <div class="sacra-title">Confirmation</div>
      <v-divider/>
      <div class="sacra-text">
        Confirmation strengthens and deepens the 
        grace given in Baptism through the laying 
        on of hands and prayer. It seals the 
        believer with the Holy Spirit and equips 
        them for mature Christian life and witness. 
        It is often associated with a personal 
        affirmation of faith and commitment to the 
        Church.
      </div>
    </v-col>
    <v-col cols="12" md="3">
      <div class="sacra-title">Matrimony</div>
      <v-divider/>
      <div class="sacra-text">
        Marriage is a sacred covenant in which 
        a couple is joined together in a 
        lifelong union of love and fidelity. It 
        reflects the relationship between Christ 
        and the Church and serves as a means of 
        grace for the couple's shared life. The 
        commitment is made publicly before God 
        and the community.
      </div>
    </v-col>
    <v-col cols="12" md="3">
      <div class="sacra-title">Holy Orders</div>
      <v-divider/>
      <div class="sacra-text">
        Holy Orders is the sacrament through 
        which individual men are ordained to serve 
        as deacons, priests, or bishops. Through 
        it, they are set apart for ministry in 
        preaching, teaching, pastoral care, and 
        the administration of the sacraments. It 
        continues the Church's mission through 
        ordered and authorized leadership.
      </div>
    </v-col>
    <v-col cols="12" md="3">
      <div class="sacra-title">Confession</div>
      <v-divider/>
      <div class="sacra-text">
        Confession is the sacrament in which sins 
        are acknowledged before God and absolution 
        is pronounced by a priest. It offers 
        assurance of forgiveness, spiritual healing, 
        and guidance for growth in holiness. While 
        not always required, it is a valuable means 
        of grace for those seeking reconciliation.
      </div>
    </v-col>
    <v-col cols="12" md="3">
      <div class="sacra-title">Unction</div>
      <v-divider/>
      <div class="sacra-text">
        Anointing of the Sick is given to 
        those who are ill or facing serious 
        hardship, offering prayer, anointing 
        with oil, and God's grace. It provides 
        comfort, strength, and, when it is 
        God's will, healing. The sacrament 
        assures the person of Christ's 
        presence in times of suffering and 
        need.
      </div>
    </v-col>
  </v-row>
</v-container>

<v-container width="80%">
  <v-divider>
      <div class="sacra-title" style="font-style: italic;">
          The Space
      </div>
  </v-divider>
</v-container>

<v-container class="ma-10 mx-auto" width="auto">
  <div class="about-text">
    Physical space and objects in the church help 
    focus attention, inspire reverence, and make the 
    presence of God tangible during worship.
  </div>
</v-container>

<v-container class="ma-10 mx-auto" width="50%">
  <v-row>
      <v-col col="auto">
        <v-img :src="sanctuary" class="space-img"/>
      </v-col>
      <v-col col="auto">
        <div class="space-title">The Sanctuary</div>
        <v-divider></v-divider>
        <div class="sacra-text">
          Communion (aka the Eucharist) is the central act of 
          Christian worship, in which Christ is truly 
          present under the forms of bread and wine. 
          In receiving Holy Communion, believers are 
          nourished spiritually and drawn into deeper 
          union with Christ and one another. We begin our liturgy
          of the Eucharist (aka the Mass) at 10AM on Sundays.
        </div>
      </v-col>
  </v-row>
  <v-row>
    <v-col col="auto">
      <v-img :src="font" class="space-img"/>
    </v-col>
    <v-col col="auto">
      <div class="space-title">The Holy Water Font</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        Communion (aka the Eucharist) is the central act of 
        Christian worship, in which Christ is truly 
        present under the forms of bread and wine. 
        In receiving Holy Communion, believers are 
        nourished spiritually and drawn into deeper 
        union with Christ and one another. We begin our liturgy
        of the Eucharist (aka the Mass) at 10AM on Sundays.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col col="auto">
      <v-img :src="baptistry" class="space-img"/>
    </v-col>
    <v-col col="auto">
      <div class="space-title">The Baptistry</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        Communion (aka the Eucharist) is the central act of 
        Christian worship, in which Christ is truly 
        present under the forms of bread and wine. 
        In receiving Holy Communion, believers are 
        nourished spiritually and drawn into deeper 
        union with Christ and one another. We begin our liturgy
        of the Eucharist (aka the Mass) at 10AM on Sundays.
      </div>
    </v-col>
  </v-row>
    <v-row>
      <v-col col="auto">
        <v-img :src="stations" class="space-img"/>
      </v-col>
      <v-col col="auto">
        <div class="space-title">The Stations of the Cross</div>
        <v-divider></v-divider>
        <div class="sacra-text">
          Communion (aka the Eucharist) is the central act of 
          Christian worship, in which Christ is truly 
          present under the forms of bread and wine. 
          In receiving Holy Communion, believers are 
          nourished spiritually and drawn into deeper 
          union with Christ and one another. We begin our liturgy
          of the Eucharist (aka the Mass) at 10AM on Sundays.
        </div>
      </v-col>
  </v-row>
  <v-row>
    <v-col col="auto">
      <v-img :src="mary_altar" class="space-img"/>
    </v-col>
    <v-col col="auto">
      <div class="space-title">The Altar of Mary</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        Communion (aka the Eucharist) is the central act of 
        Christian worship, in which Christ is truly 
        present under the forms of bread and wine. 
        In receiving Holy Communion, believers are 
        nourished spiritually and drawn into deeper 
        union with Christ and one another. We begin our liturgy
        of the Eucharist (aka the Mass) at 10AM on Sundays.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col col="auto">
      <v-img :src="bishop_chair" class="space-img"/>
    </v-col>
    <v-col col="auto">
      <div class="space-title">The Bishop's Chair</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        Communion (aka the Eucharist) is the central act of 
        Christian worship, in which Christ is truly 
        present under the forms of bread and wine. 
        In receiving Holy Communion, believers are 
        nourished spiritually and drawn into deeper 
        union with Christ and one another. We begin our liturgy
        of the Eucharist (aka the Mass) at 10AM on Sundays.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col col="auto">
      <v-img :src="lamp" class="space-img"/>
    </v-col>
    <v-col col="auto">
      <div class="space-title">The Sanctuary Lamp</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        Communion (aka the Eucharist) is the central act of 
        Christian worship, in which Christ is truly 
        present under the forms of bread and wine. 
        In receiving Holy Communion, believers are 
        nourished spiritually and drawn into deeper 
        union with Christ and one another. We begin our liturgy
        of the Eucharist (aka the Mass) at 10AM on Sundays.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col col="auto">
      <v-img :src="altar" class="space-img"/>
    </v-col>
    <v-col col="auto">
      <div class="space-title">The Altar</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        Communion (aka the Eucharist) is the central act of 
        Christian worship, in which Christ is truly 
        present under the forms of bread and wine. 
        In receiving Holy Communion, believers are 
        nourished spiritually and drawn into deeper 
        union with Christ and one another. We begin our liturgy
        of the Eucharist (aka the Mass) at 10AM on Sundays.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col col="auto">
      <v-img :src="altar_crux" class="space-img"/>
    </v-col>
    <v-col col="auto">
      <div class="space-title">The Altar Crucifix</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        Communion (aka the Eucharist) is the central act of 
        Christian worship, in which Christ is truly 
        present under the forms of bread and wine. 
        In receiving Holy Communion, believers are 
        nourished spiritually and drawn into deeper 
        union with Christ and one another. We begin our liturgy
        of the Eucharist (aka the Mass) at 10AM on Sundays.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col col="auto">
      <v-img :src="veiled_crux" class="space-img"/>
    </v-col>
    <v-col col="auto">
      <div class="space-title">The Veiled Crucifix</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        Communion (aka the Eucharist) is the central act of 
        Christian worship, in which Christ is truly 
        present under the forms of bread and wine. 
        In receiving Holy Communion, believers are 
        nourished spiritually and drawn into deeper 
        union with Christ and one another. We begin our liturgy
        of the Eucharist (aka the Mass) at 10AM on Sundays.
      </div>
    </v-col>
  </v-row>
</v-container>

  <v-card class="w-100 text-center pa-10 ma-0" color="primary" rounded="0" elevation="0">
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
</template>
<style>
.sacra-title{
    font-size: xx-large;
    color: #742b2b;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.sacra-text{
    font-size: x-large;
    font-family: 'Times New Roman', Times, serif;
    color: #742b2b;
    text-align: justify;
}
.banner-img {
  height: 60vh;
  min-height: 300px;
}

.banner-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.banner-text {
  font-family: 'Celtic Font';
  text-align: center;
  color: white;
  font-size: clamp(2rem, 6vw, 4rem);
}

@media (max-width: 600px) {
  .banner-img {
    height: 40vh;
  }
}

.banner-overlay {
  background: rgba(0, 0, 0, 0.4);
}

.space-img{
  max-height: auto;
}

.space-title{
  font-size: xx-large;
  color: #742b2b;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>