<template>
  <div v-if="weatherData && weatherData.today && weatherData.forecast">
    <h1 class="card-heading">Weather Forecast for the Next Six Days</h1>
    <div class="weather-card">
      <div class="weather-card__icon">
        <img :src="weatherData.today.img" alt="Weather icon" />
      </div>
      <div class="weather-card__details">
        <div class="weather-card__location">
          {{ weatherData.today.location }}
        </div>
        <div class="weather-card__temperature">
          {{ weatherData.today.temperature }}°C
        </div>
        <div class="weather-card__conditions">
          {{ weatherData.today.conditions }}
        </div>
        <div class="weather-card__description">
          {{ weatherData.today.description }}
        </div>
        <div class="weather-card__sunrise">
          Sunrise: {{ weatherData.today.sunrise }}
        </div>
        <div class="weather-card__sunset">
          Sunset: {{ weatherData.today.sunset }}
        </div>
        <div class="date">
          {{ weatherData.today.todayDate }}
        </div>
      </div>
    </div>

    <!-- Forecast Section with 2x3 Grid -->
    <div class="weather-forecast-grid">
      <div class="weather-forecast-cell" v-for="(day, index) in weatherData.forecast" :key="index">
        <div class="weather-forecast-card-icon">
          <img :src="day.img" alt="Weather icon" />
        </div>
        <div class="weather-forecast-card-details">
          <div class="weather-forecast-card-temperature">
            {{ day.temperature }}°C
          </div>
          <div class="weather-forecast-card-conditions">
            {{ day.conditions }}
          </div>
          <div class="date">
            {{ day.day }}
          </div>
        </div>
      </div>
    </div>

  </div>
  <div v-else>
    Loading...
  </div>
</template>


<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  weatherData: {
    type: Object,
    required: true
  }
});

// Create a formatted forecast array with titles
const formattedForecast = computed(() => {
  const titles = ['Today', 'Tomorrow', ...props.weatherData.forecast.map((_, idx) => `Day ${idx + 3}`)];
  return props.weatherData.forecast.map((day, index) => ({
    ...day,
    title: titles[index]
  }));
});
</script>
<style scoped>

.weather-forecast-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
}

.weather-card, .weather-forecast-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: linear-gradient(to bottom, #ffffff, #f1f1f1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-heading {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

</style>
