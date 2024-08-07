<script setup>
import { ref, onMounted } from 'vue';
import WeatherCard from './components/WeatherCard.vue';
import MapboxMap from './components/MapboxMap.vue';
import getWeatherDataService from './services/getWeatherDataService';
import getCurrentLocationFromLatitudeAndLongitude from './services/getCurrentLocationService';
import { getAWeekOfDates, translateMilitaryTimeToStandardTime } from './services/getDateTimeService';
import getIcons from './services/getImagesService';
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

onMounted(async () => {
  try {
    const data = await getWeatherDataService();
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
});
</script>

<template>
  <div id="app">
    <WeatherCard :weatherData="weatherData" />
    <MapboxMap />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
