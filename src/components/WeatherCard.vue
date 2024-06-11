<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  weatherData: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div v-if="weatherData && weatherData.today && weatherData.forecast">
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
      <div class="weather-forecast-card-day1">
        <div class="weather-forecast-card1-icon">
          <img :src="weatherData.forecast.day1.img" alt="Weather icon" />
        </div>
        <div class="weather-forecast-card1-details">
          <div class="weather-forecast-card1-temperature">
            {{ weatherData.forecast.day1.temperature }}°C
          </div>
          <div class="weather-forecast-card1-conditions">
            {{ weatherData.forecast.day1.conditions }}
          </div>
          <div class="weather-forecast-card1-description">
            {{ weatherData.forecast.day1.description }}
          </div>
          <div class="date">
            {{ weatherData.forecast.day1.day }}
          </div>
        </div>
      </div>
      <!-- Repeat similar structure for day2, day3, day4, day5, and day6 -->
      <div class="weather-forecast-card-day2">
        <div class="weather-forecast-card2-icon">
          <img :src="weatherData.forecast.day2.img" alt="Weather icon" />
        </div>
        <div class="weather-forecast-card2-details">
          <div class="weather-forecast-card2-temperature">
            {{ weatherData.forecast.day2.temperature }}°C
          </div>
          <div class="weather-forecast-card2-conditions">
            {{ weatherData.forecast.day2.conditions }}
          </div>
          <div class="weather-forecast-card2-description">
            {{ weatherData.forecast.day2.description }}
          </div>
          <div class="date">
            {{ weatherData.forecast.day2.day }}
          </div>
        </div>
      </div>
      <div class="weather-forecast-card-day3">
        <div class="weather-forecast-card3-icon">
          <img :src="weatherData.forecast.day3.img" alt="Weather icon" />
        </div>
        <div class="weather-forecast-card3-details">
          <div class="weather-forecast-card3-temperature">
            {{ weatherData.forecast.day3.temperature }}°C
          </div>
          <div class="weather-forecast-card3-conditions">
            {{ weatherData.forecast.day3.conditions }}
          </div>
          <div class="weather-forecast-card3-description">
            {{ weatherData.forecast.day3.description }}
          </div>
          <div class="date">
            {{ weatherData.forecast.day3.day }}
          </div>
        </div>
      </div>
      <div class="weather-forecast-card-day4">
        <div class="weather-forecast-card4-icon">
          <img :src="weatherData.forecast.day4.img" alt="Weather icon" />
        </div>
        <div class="weather-forecast-card4-details">
          <div class="weather-forecast-card4-temperature">
            {{ weatherData.forecast.day4.temperature }}°C
          </div>
          <div class="weather-forecast-card4-conditions">
            {{ weatherData.forecast.day4.conditions }}
          </div>
          <div class="weather-forecast-card4-description">
            {{ weatherData.forecast.day4.description }}
          </div>
          <div class="date">
            {{ weatherData.forecast.day4.day }}
          </div>
        </div>
      </div>
      <div class="weather-forecast-card-day5">
        <div class="weather-forecast-card5-icon">
          <img :src="weatherData.forecast.day5.img" alt="Weather icon" />
        </div>
        <div class="weather-forecast-card5-details">
          <div class="weather-forecast-card5-temperature">
            {{ weatherData.forecast.day5.temperature }}°C
          </div>
          <div class="weather-forecast-card5-conditions">
            {{ weatherData.forecast.day5.conditions }}
          </div>
          <div class="weather-forecast-card5-description">
            {{ weatherData.forecast.day5.description }}
          </div>
          <div class="date">
            {{ weatherData.forecast.day5.day }}
          </div>
        </div>
      </div>
      <div class="weather-forecast-card-day6">
        <div class="weather-forecast-card6-icon">
          <img :src="weatherData.forecast.day6.img" alt="Weather icon" />
        </div>
        <div class="weather-forecast-card6-details">
          <div class="weather-forecast-card6-temperature">
            {{ weatherData.forecast.day6.temperature }}°C
          </div>
          <div class="weather-forecast-card6-conditions">
            {{ weatherData.forecast.day6.conditions }}
          </div>
          <div class="weather-forecast-card6-description">
            {{ weatherData.forecast.day6.description }}
          </div>
          <div class="date">
            {{ weatherData.forecast.day6.day }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>


<style scoped>
.weather-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.weather-card__icon {
  margin-right: 1rem;
}

.weather-card__icon img {
  width: 100px;
  height: 100px;
}

.weather-card__details {
  display: flex;
  flex-direction: column;
}

.weather-card__temperature {
  font-size: 2rem;
  font-weight: bold;
}

.weather-card__conditions {
  font-size: 1.5rem;
}

.weather-card__description {
  font-size: 1.25rem;
}

.weather-card__sunrise,
.weather-card__sunset {
  font-size: 1rem;
}

.weather-forecast-card {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.weather-forecast-card-day1,
.weather-forecast-card-day2,
.weather-forecast-card-day3,
.weather-forecast-card-day4,
.weather-forecast-card-day5,
.weather-forecast-card-day6 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.weather-forecast-card1-icon,
.weather-forecast-card2-icon,
.weather-forecast-card3-icon,
.weather-forecast-card4-icon,
.weather-forecast-card5-icon,
.weather-forecast-card6-icon {
  margin-right: 1rem;
}

.weather-forecast-card1-icon img,
.weather-forecast-card2-icon img,
.weather-forecast-card3-icon img,
.weather-forecast-card4-icon img,
.weather-forecast-card5-icon img,
.weather-forecast-card6-icon img {
  width: 50px;
  height: 50px;
}

.weather-forecast-card1-details,
.weather-forecast-card2-details,
.weather-forecast-card3-details,
.weather-forecast-card4-details,
.weather-forecast-card5-details,
.weather-forecast-card6-details {
  display: flex;
  flex-direction: column;
}

.weather-forecast-card1-temperature,
.weather-forecast-card2-temperature,
.weather-forecast-card3-temperature,
.weather-forecast-card4-temperature,
.weather-forecast-card5-temperature,
.weather-forecast-card6-temperature {
  font-size: 1.5rem;
  font-weight: bold;
}

.weather-forecast-card1-conditions,
.weather-forecast-card2-conditions,
.weather-forecast-card3-conditions,
.weather-forecast-card4-conditions,
.weather-forecast-card5-conditions,
.weather-forecast-card6-conditions {
  font-size: 1rem;
}

.weather-forecast-card1-description,
.weather-forecast-card2-description,
.weather-forecast-card3-description,
.weather-forecast-card4-description,
.weather-forecast-card5-description,
.weather-forecast-card6-description {
  font-size: 0.75rem;
}
</style>
