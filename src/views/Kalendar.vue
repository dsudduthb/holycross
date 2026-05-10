<script setup>
import Province from '../components/Province.vue'
import MassTimes from '../components/MassTimes.vue'
</script>
<template>
<div align="center" class="calendar-container">
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&showNav=0&showTitle=0&showTabs=0&showCalendars=0&src=OGU0YTljYjU2YTJmZWRhMDZhNTAyZGI2MDIxZGI4YmI0ODA5YmFkODBkMGFmNjJkZGI5ODZkYWUyODY1MTJjOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238e24aa" 
        style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"
    ></iframe>
</div>

<MassTimes/>
<Province/>
</template>
<style scoped>
.calendar-container {
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.calendar-container iframe {
  width: 100%;
  height: 70vh;
  min-height: 500px;
  border: 0;
}
</style>