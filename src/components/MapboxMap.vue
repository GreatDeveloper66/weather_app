<template>
    <div ref="mapContainer" style="height: 500px; width: 100%;"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import mapboxgl from 'mapbox-gl';
  
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  
  const mapContainer = ref(null);
  
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
  </style>
  