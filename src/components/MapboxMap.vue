<template>
  <div>
    <h1 class="map-heading">Interactive Map: Click to View Weather at a Location</h1>
    <div ref="mapContainer" style="height: 500px; width: 100%;"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const mapContainer = ref(null);
const emit = defineEmits(['locationSelected']);

onMounted(() => {
  if (mapContainer.value) {
    const map = new mapboxgl.Map({
      container: mapContainer.value, // Ensure this is a DOM element
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });

    map.on('click', (event) => {
      const { lng, lat } = event.lngLat;
      console.log('Longitude:', lng);
      console.log('Latitude:', lat);
      // Fetch weather data using lng and lat
      emit('locationSelected', { lng, lat });
    });
  } else {
    console.error('Map container is not available');
  }
});
</script>

<style scoped>
#mapContainer {
  height: 500px;
  width: 100%;
}

.map-heading {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

</style>
