<script setup>
import { ref, onMounted } from 'vue';
import WeatherCard from './components/WeatherCard.vue';
import MapboxMap from './components/MapboxMap.vue';
import getCurrentLocationFromLatitudeAndLongitude from './services/getCurrentLocationService';
import { getAWeekOfDates, translateMilitaryTimeToStandardTime } from './services/getDateTimeService';
import getIcons from './services/getImagesService';
import { getWeatherDataServiceBasedonCurrentLocation, getWeatherDataServiceAtLatLong } from './services/getWeatherDataService';
import updateWeatherData from './services/updateWeatherDataService';

const weatherData = ref({
  today: {},
  forecast: {
    day1: {},
    day2: {},
    day3: {},
    day4: {},
    day5: {},
    day6: {}
  }
});

const updateWeatherCardFromCurrentUserLocation = async () => {
  try {
    const data = await getWeatherDataServiceBasedonCurrentLocation();
    data.week = getAWeekOfDates();
    const svgArray = getIcons([data.currentConditions.icon, ...data.days.map(day => day.icon)]);
    data.location = await getCurrentLocationFromLatitudeAndLongitude(data.latitude, data.longitude);
    data.currentConditions.icon = svgArray[0];
    data.days.slice(1).forEach((day, index) => {
      day.icon = svgArray[index + 1];
    });
    data.sunriseTime = translateMilitaryTimeToStandardTime(data.currentConditions.sunrise);
    data.sunsetTime = translateMilitaryTimeToStandardTime(data.currentConditions.sunset);
    data.svgArray = svgArray;

    weatherData.value = updateWeatherData(weatherData.value, data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

const updateWeatherCardFromEmittedLocation = async (location) => {
  try {
    const data = await getWeatherDataServiceAtLatLong(location.lat, location.lng);
    data.week = getAWeekOfDates();
    const svgArray = getIcons([data.currentConditions.icon, ...data.days.map(day => day.icon)]);
    data.location = await getCurrentLocationFromLatitudeAndLongitude(data.latitude, data.longitude);
    data.currentConditions.icon = svgArray[0];
    data.days.slice(1).forEach((day, index) => {
      day.icon = svgArray[index + 1];
    });
    data.sunriseTime = translateMilitaryTimeToStandardTime(data.currentConditions.sunrise);
    data.sunsetTime = translateMilitaryTimeToStandardTime(data.currentConditions.sunset);
    data.svgArray = svgArray;

    weatherData.value = updateWeatherData(weatherData.value, data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

onMounted(async () => {
  updateWeatherCardFromCurrentUserLocation();
});
</script>

<template>
  <div id="app">
    <WeatherCard :weatherData="weatherData" />
    <MapboxMap @locationSelected="updateWeatherCardFromEmittedLocation" />
  </div>
</template>

<style scoped>
#app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: darkgrey;
  height: 100vh;
  overflow: hidden;
}

#app > * {
  height: 100%;
}

@media (max-width: 768px) {
  #app {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
}
</style>
