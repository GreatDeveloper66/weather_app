<template>
  <div v-if="weatherData && weatherData.today && weatherData.forecast">
    <h1 class="card-heading">Weather Forecast</h1>
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
    <div class="weather-forecast-card">
      <!-- Repeat for each day -->
      <div class="weather-forecast-card-day" v-for="(day, index) in weatherData.forecast" :key="index">
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
          <div class="weather-forecast-card-description">
            {{ day.description }}
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
import { defineProps } from 'vue';

const props = defineProps({
  weatherData: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.weather-card, .weather-forecast-card-day {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
}

.weather-card__icon, .weather-forecast-card-icon {
  margin-right: 1rem;
}

.weather-card__icon img, .weather-forecast-card-icon img {
  width: 100px;
  height: 100px;
}

.weather-card__details, .weather-forecast-card-details {
  display: flex;
  flex-direction: column;
}

.weather-card__location {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.weather-card__temperature, .weather-forecast-card-temperature {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff0000;
}

.weather-card__conditions, .weather-forecast-card-conditions {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ff00;
}

.weather-card__description, .weather-forecast-card-description {
  font-size: 1.25rem;
  font-style: italic;
  color: #333;
}

.weather-card__sunrise, .weather-card__sunset, .date {
  font-size: 1rem;
  color: #666;
}

.weather-forecast-card {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.weather-forecast-card-day {
  margin-bottom: 1rem;
}

.card-heading {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
