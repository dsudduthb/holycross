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
import red_doors from '../assets/the_space/red_doors.jpg'
import chapel from '../assets/the_space/chapel.jpg'
import tabernacle from '../assets/the_space/tabernacle.jpg'

import Province from '../components/Province.vue'
import MassTimes from '../components/MassTimes.vue'

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
  <v-row class="text-center ga-6" justify="center">
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

<v-container class="my-10 mx-auto" max-width="1200">
  <v-row>
    <v-col cols="12" md="7">
      <v-img :src="red_doors" class="space-img"/>
    </v-col>
    <v-col cols="12" md="5">
      <div class="space-title">The Red Doors</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        You will first enter through red doors when you come visit us. In the Anglican Church, the red doors symbolize
        the blood of the paschal lamb as told in the story of the passover (Exodus 12). The blood of the lamb over the
        door signifies sanctuary and refuge in God's divine love.
      </div>
    </v-col>
  </v-row>
  <v-row>
      <v-col cols="12" md="7">
        <v-img :src="sanctuary" class="space-img"/>
      </v-col>
      <v-col cols="12" md="5">
        <div class="space-title">The Sanctuary</div>
        <v-divider></v-divider>
        <div class="sacra-text">
          The Sanctuary is where we gather to participate in worship together. It is supposed to reflect both the throneroom of heaven and
          the Temple (as well as Tabernacle) that God had the Israelites build for Him. The Sanctuary faces East because Christ will return
          from the East.
        </div>
      </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="7">
      <v-img :src="font" class="space-img"/>
    </v-col>
    <v-col cols="12" md="5">
      <div class="space-title">The Holy Water Font</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        The Font is to the right of the door as you enter into the sanctuary. It is the first thing you interact with
        as you enter. We dip our fingers of our right hand in the font and do the sign of the cross over ourselves. This
        reminds us of our baptism as we come to worship Christ. It also reflects the ritual washing for Israelites who 
        came to the temple to worship. When we leave the sanctuary we do it again to remember our baptism as we return into
        the world.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="7">
      <v-img :src="baptistry" class="space-img"/>
    </v-col>
    <v-col cols="12" md="5">
      <div class="space-title">The Baptistry</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        The Baptistry is where the sacrament of baptism takes place. This one can be
        moved around for ease of use to the parish. It remains on the epistle side (the north side) of the church
        when not in use.
      </div>
    </v-col>
  </v-row>
    <v-row>
      <v-col cols="12" md="7">
        <v-img :src="stations" class="space-img"/>
      </v-col>
      <v-col cols="12" md="5">
        <div class="space-title">The Stations of the Cross</div>
        <v-divider></v-divider>
        <div class="sacra-text">
          Hanging on the wall around the whole sanctuary are 14 images depicting
          the struggle of Christ from the night he was betrayed to the moment he was
          crucified. Every year during lent (the season before Easter) we walk these 14
          stations of the cross with Christ, praying at each stop.
        </div>
      </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="7">
      <v-img :src="mary_altar" class="space-img"/>
    </v-col>
    <v-col cols="12" md="5">
      <div class="space-title">Votives for Mary</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        On the Epistle side of the sanctuary (the north side) on the wall before the altar, there is 
        a statue of the Blessed Virgin Mary, Mother of God. Oil lights are set before the icon to be lit
        for the prayer and contemplation. In this depiction, Our Lady stands on the moon which references
        the queen of heaven and she holds the infant Christ which reflects the queen of heaven in the Book
        of the Revelation of Saint John, chapter 12.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="7">
      <v-img :src="bishop_chair" class="space-img"/>
    </v-col>
    <v-col cols="12" md="5">
      <div class="space-title">The Bishop's Chair</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        By the altar on the Gospel side (the south side) there are a few seats, the most
        ornate of which is the chair of the bishop. This chair is especially reserved for him.
        In the early church, the bishop presided over every eucharistic liturgy -- representing
        the Father and the Lamb of God on the throne in the heavenly worship. Now, out of practicality
        the bishop cannot preside over every mass, but his throne remains for when his is with us.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="7">
      <v-img :src="lamp" class="space-img"/>
    </v-col>
    <v-col cols="12" md="5">
      <div class="space-title">The Sanctuary Lamp</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        The Sanctuary Lamp is lit when the blessed sacrament is reserved in the tabernacle
        at the altar. It is following the teaching of God in Exodus chapter 27. The red lamp
        represents the presence of Christ. In our sanctuary, it hangs on the wall on the Gospel
        (left side) of the altar.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="7">
      <v-img :src="altar" class="space-img"/>
    </v-col>
    <v-col cols="12" md="5">
      <div class="space-title">The Altar</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        The altar is the table of communion with God. It is the focal point of the whole sanctuary.
        On it, the consecration of the blessed sacrament takes place and the sacrafice of the mass
        is presented before God. It is a reflection of the altar of the tabernacle, the altar of the temple,
        the altar of heaven, and the table where Christ shared His last supper with the disciples before His
        death.
      </div>
    </v-col>
  </v-row>
  <v-row>
      <v-col cols="12" md="7">
        <v-img :src="tabernacle" class="space-img"/>
      </v-col>
      <v-col cols="12" md="5">
        <div class="space-title">The Tabernacle</div>
        <v-divider></v-divider>
        <div class="sacra-text">
          The Tabernacle is the golden box on top of the altar that holds the reserves of the
          blessed sacrament. The name comes from the old testament 'dwelling place' of God.
          Because Jesus is truly present in the blassed sacrament, He dwells in the tabernacle.
        </div>
      </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="7">
      <v-img :src="altar_crux" class="space-img"/>
    </v-col>
    <v-col cols="12" md="5">
      <div class="space-title">The Altar Crucifix</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        The crucifix sits on the east wall just above the altar. It depicts the suffering and dead Christ
        upon the cross. It draws the mind of the celebrant and the participators of the liturgy to the 
        sacrafice of Christ on the cross. The inscription "INRI" is the latin characters of the english phrase
        "Jesus of Nazareth, King of the Jews" which was placed on His cross as a symbol of mockery. The cross, 
        which was a tool of Roman humiliation and torture, is now the means of hope for humanity by Christs death
        and resurection. Thus it is the principle symbol of the Christian faith.
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="7">
      <v-img :src="veiled_crux" class="space-img"/>
    </v-col>
    <v-col cols="12" md="5">
      <div class="space-title">The Veiled Crucifix</div>
      <v-divider></v-divider>
      <div class="sacra-text">
        During the time of lent and passiontide, the altar crucifix is veiled with purple cloth. At this time, 
        the altar is stripped (on Maundy Thursday) and no "Alleluias" are said in worship. The veils are removed 
        for the Easter celebration and the altar is fully adorned again.
      </div>
    </v-col>
  </v-row>
  <v-row>
  <v-col cols="12" md="7">
    <v-img :src="chapel" class="space-img"/>
  </v-col>
  <v-col cols="12" md="5">
    <div class="space-title">The Chapel</div>
    <v-divider></v-divider>
    <div class="sacra-text">
      The Chapel is a quiet place of prayer where anyone is welcome to pray and reflect. The 
      Rector also takes confession in the chapel.
    </div>
  </v-col>
</v-row>
</v-container>

<MassTimes/>
<Province/>
</template>
<style>
.sacra-title{
    font-size: xx-large;
    color: #742b2b;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.sacra-text{
    font-size: large;
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
  width: 100%;
  border-radius: 8px;
}

.space-title{
  font-size: xx-large;
  color: #742b2b;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>