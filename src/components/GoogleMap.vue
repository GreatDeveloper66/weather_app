<!-- <script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
import { getGoogleMapService } from '../services/getGoogleMapService';

</script>

<template>
  <div id="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6710.082688282712!2d-97.06824492650921!3d32.7646374736688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e87167e9bb95d%3A0x78cf616ebf0dda48!2s2408%20Wynncrest%20Cir%2C%20Arlington%2C%20TX%2076006!5e0!3m2!1sen!2sus!4v1722211414175!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


  </div>
</template> -->

<!-- <script>
import { ref } from 'vue';
import { onMounted } from 'vue';
const onClick = () => {
  console.log('clicked');
}
</script>


<template>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12397.4624585688!2d-89.53451626914624!3d39.029782547131255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8875b709d6e84681%3A0x1f630e351a358123!2sPanama%2C%20IL!5e0!3m2!1sen!2sus!4v1722801701085!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template> -->


<template>
  <div id="map"></div>
</template>

<script>
  import { onMounted } from 'vue';

  export default {
    name: 'GoogleMap',
    setUp() {
      const initMap = () => {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        });
        

        map.addEventListener('click', (event) => {
          const lat = event.latLng.lat();
          const lng = event.latLng.lng();
          console.log('Latitude:', lat);
          console.log('Longitude:', lng);
        });
      };
        onMounted(() => {
        initMap();
      });
      }
     
    }
</script>

<style>
  #map {
    height: 500px;
    width: 100%;
  }
</style>

