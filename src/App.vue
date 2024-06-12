<script setup>
import { ref, onMounted } from 'vue';
import WeatherCard from './components/WeatherCard.vue';
import getWeatherDataService from './services/getWeatherDataService';
import getCurrentLocationFromLatitudeAndLongitude from './services/getCurrentLocationService';
import { getAWeekOfDates, translateMilitaryTimeToStandardTime } from './services/getDateTimeService';
import getIcons from './services/getImagesService';

let weatherData = ref({
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

const updateWeatherData = (data) => {
  weatherData.value = {
    today: {
      temperature: data.currentConditions.temp,
      conditions: data.currentConditions.conditions,
      description: data.currentConditions.description,
      sunrise: data.sunriseTime,
      sunset: data.sunsetTime,
      img: data.svgArray[0],
      todayDate: data.week.today,
      location: data.location
    },
    forecast: {
      day1: {
        temperature: data.days[0].temp,
        conditions: data.days[0].conditions,
        description: data.days[0].description,
        img: data.svgArray[1],
        day: data.week.tomorrow
      },
      day2: {
        temperature: data.days[1].temp,
        conditions: data.days[1].conditions,
        description: data.days[1].description,
        img: data.svgArray[2],
        day: data.week.dayAfterTomorrow
      },
      day3: {
        temperature: data.days[2].temp,
        conditions: data.days[2].conditions,
        description: data.days[2].description,
        img: data.svgArray[3],
        day: data.week.twoDaysAfterTomorrow
      },
      day4: {
        temperature: data.days[3].temp,
        conditions: data.days[3].conditions,
        description: data.days[3].description,
        img: data.svgArray[4],
        day: data.week.threeDaysAfterTomorrow
      },
      day5: {
        temperature: data.days[4].temp,
        conditions: data.days[4].conditions,
        description: data.days[4].description,
        img: data.svgArray[5],
        day: data.week.fourDaysAfterTomorrow
      },
      day6: {
        temperature: data.days[5].temp,
        conditions: data.days[5].conditions,
        description: data.days[5].description,
        img: data.svgArray[6],
        day: data.week.fiveDaysAfterTomorrow
      }
    }
  };
};

onMounted(async () => {
  try {
    const data = await getWeatherDataService();
    console.log('Data:', data);
    data.week = getAWeekOfDates();
    const svgArray = await getIcons([data.currentConditions.icon, data.days[0].icon, data.days[1].icon, data.days[2].icon, data.days[3].icon, data.days[4].icon, data.days[5].icon]);
    data.location = await getCurrentLocationFromLatitudeAndLongitude(data.latitude, data.longitude);
    data.currentConditions.icon = svgArray[0];
    data.days[1].icon = svgArray[1];
    data.days[2].icon = svgArray[2];
    data.days[3].icon = svgArray[3];
    data.days[4].icon = svgArray[4];
    data.days[5].icon = svgArray[5];
    data.days[6].icon = svgArray[6];
    data.sunriseTime = translateMilitaryTimeToStandardTime(data.currentConditions.sunrise);
    data.sunsetTime = translateMilitaryTimeToStandardTime(data.currentConditions.sunset);
    data.svgArray = svgArray;
    updateWeatherData(data);
    console.log('Weather data:', weatherData.value);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
});
</script>

<template>
  <div>
    <WeatherCard :weatherData="weatherData" />
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
