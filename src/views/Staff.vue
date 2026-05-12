<script setup>
import newcomb from '../assets/staff/fr_newcomb.png'
import williams from '../assets/staff/fr_mark.jpg'
import vestry from '../assets/staff/vestry.jpg'
import anthony from '../assets/staff/Xu_Anthony.jpg'
import shultz from '../assets/staff/bp_shultz.png'
import hansen from '../assets/staff/bp_hansen.png'
import ashman from '../assets/staff/bp_ashman.png'

import MassTimes from '../components/MassTimes.vue'
import Province from '../components/Province.vue'
</script>
<template>
<v-container class="my-10" max-width="1200">

  <v-row align="center" class="mb-12">
    <v-col cols="12" md="4">
      <v-img :src="shultz" class="staff-img" />
    </v-col>

    <v-col cols="12" md="8">
      <div class="staff-title">
        The Most Reverend Blair William Schultz<br>Archbishop
      </div>

      <v-divider></v-divider>

      <div class="staff-text mt-6">
            The fifth Archbishop of the Anglican Province of Christ the King. 
            Elected on June 14, 2023, he previously served as Bishop Suffragan 
            of the Diocese of the Atlantic States and later as Bishop Coadjutor. 
            He became Bishop Ordinary following the death of Archbishop John Exley Upham.
            <br>
            <br>
            Archbishop Schultz holds a B.A. in Chemistry from Monmouth College and an M.S. 
            in Forensic Science. He worked as a forensic scientist for the Bureau of Alcohol, 
            Tobacco and Firearms and spent thirty years with the Illinois State Police. Called 
            to the priesthood, he earned a Bachelor of Sacred Theology in 2007 and was ordained 
            priest in 2006. Since 2008 he has served as Rector of All Saints Anglican Church in 
            Bolingbrook, Illinois. He has held multiple diocesan leadership roles, including 
            President of the Standing Committee, and has been deeply involved in children's ministry 
            and community service for decades.
      </div>
    </v-col>
  </v-row>

  <v-row align="center" class="mb-12">
    <v-col cols="12" md="4">
      <v-img :src="ashman" class="staff-img" />
    </v-col>

    <v-col cols="12" md="8">
      <div class="staff-title">
        The Right Reverend Donald M. Ashman<br>Bishop of the Western States
      </div>

      <v-divider></v-divider>

      <div class="staff-text mt-6">
        He was elected on April 22, 2016, and enthroned the following day at Saint Peter's 
        Pro-Cathedral in Oakland, California. He previously served as Suffragan Bishop, 
        having been consecrated in 2012.
        <br>
        <br>
        Born in Los Angeles and raised in Burbank, Bishop Ashman earned a degree in History 
        from California State University, Long Beach (1970) and did graduate work in Classics 
        at UCLA. He taught Latin, Greek, and AP History for over forty years. Currently, he 
        serves as Provost of Saint Joseph of Arimathea College, teaching Ecclesiastical Latin, 
        Theology, and Biblical Greek. Bishop Ashman and his wife Ellen have two children and 
        three grandsons.
      </div>
    </v-col>
  </v-row>

  <v-row align="center" class="mb-12">
    <v-col cols="12" md="4">
      <v-img :src="hansen" class="staff-img" />
    </v-col>

    <v-col cols="12" md="8">
      <div class="staff-title">
        The Right Reverend Peter Falconer Hansen<br>Bishop Suffragan of the Western States
      </div>

      <v-divider></v-divider>

      <div class="staff-text mt-6">
        Elected Coadjutor Bishop in 2021, he was consecrated on September 21, 2017, in Tulsa, 
        Oklahoma.
        <br>
        <br>
        Originally trained as an architect with a Bachelor of Architecture from U.C. Berkeley 
        (1972), Bishop Hansen worked in industrial construction for sixteen years before 
        being called to the priesthood. Since 1991, he has served as Rector of St. Augustine 
        of Canterbury Church in Chico, California.
        <br>
        <br>
        Deeply involved in his community, he founded the pro-life ministry ChicoLife, served 
        as a police chaplain, helped acquire and restore a historic church building, and worked 
        with suicide prevention, tutoring, Street Pastors, hospital bio-ethics, and counseling 
        ministries. 
        <br>
        <br>
        Bishop Hansen and his wife Giti have been married since 1973. They have one son and four 
        grandchildren. He is also a singer, guitarist, and songwriter, and the author of I Was 
        There: Eyewitnesses at the Foot of the Cross.
      </div>
    </v-col>
  </v-row>

  <v-row align="center" class="mb-12">
    <v-col cols="12" md="4">
      <v-img :src="newcomb" class="staff-img" />
    </v-col>

    <v-col cols="12" md="8">
      <div class="staff-title">
        The Rev'd. Charles Newcomb<br>Rector
      </div>

      <v-divider></v-divider>

      <div class="staff-text mt-6">
            Ordained May 18, 2024, by the Right Reverend Peter F. Hansen, 
            Bishop Coadjutor of the Diocese of the Western States, 
            Father Newcomb has a degree in Communication from the 
            University of Central Oklahoma and studies at St. Joseph of Arimathea 
            Anglican Theological College.  He worked for many years in the 
            radio and television field.
      </div>
    </v-col>
  </v-row>

  <v-row align="center" class="mb-12">
    <v-col cols="12" md="4">
      <v-img :src="anthony" class="staff-img" />
    </v-col>

    <v-col cols="12" md="8">
      <div class="staff-title">
        Jiapeng (Anthony) Xu,<br>Staff Organist
      </div>

      <v-divider></v-divider>

      <div class="staff-text mt-6">
            Anthony is a doctoral student at the University of Oklahoma 
            and has previously studied at the University of North Texas, 
            the Royal College of Music (UK), and the Nanyang Academy of Fine Arts (Singapore).
      </div>
    </v-col>
  </v-row>

  <v-row align="center" class="mb-12">
    <v-col cols="12" md="4">
      <v-img :src="vestry" class="staff-img" />
    </v-col>

    <v-col cols="12" md="8">
      <div class="staff-title">Our Leadership</div>

      <v-divider></v-divider>

      <div class="staff-text mt-6">
            From Left: Senior Warden Paul Ogbalu, Junior Warden Bruce Rosier, Vestry Member Blake Perry, Clerk Judith Johnson, Treasurer Giacomo Domenack, Vestry Member Samuel Emesiani
            Not Pictured: Vestry Member Merrilyn Livermon
      </div>
    </v-col>
  </v-row>

</v-container>
<MassTimes/>
<Province/>
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

@media (max-width: 600px) {
  .v-container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .staff-title {
    text-align: center;
  }

  .staff-text {
    text-align: justify;
  }
}

.staff-img{
  width: 100%;
  border-radius: 8px;
}
</style>