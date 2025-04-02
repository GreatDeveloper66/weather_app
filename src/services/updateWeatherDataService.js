import { ref } from 'vue';

// const weatherData = ref({
//   today: {},
//   forecast: {
//     day1: {},
//     day2: {},
//     day3: {},
//     day4: {},
//     day5: {},
//     day6: {}
//   }
// });

/**
 * Updates the weather data object with the provided data.
 *
 * @param {Object} weatherData - The existing weather data object to be updated.
 * @param {Object} data - The new data to update the weather data object with.
 * @param {Object} data.currentConditions - The current weather conditions.
 * @param {number} data.currentConditions.temp - The current temperature.
 * @param {string} data.currentConditions.conditions - The current weather conditions (e.g., "Sunny").
 * @param {string} data.currentConditions.description - A description of the current weather.
 * @param {string} data.sunriseTime - The time of sunrise.
 * @param {string} data.sunsetTime - The time of sunset.
 * @param {string[]} data.svgArray - An array of SVG image URLs for weather icons.
 * @param {string[]} data.week - An array of dates for the current week.
 * @param {string} data.location - The location for the weather data.
 * @param {Object[]} data.days - An array of forecast data for the upcoming days.
 * @param {number} data.days[].temp - The forecasted temperature for a specific day.
 * @param {string} data.days[].conditions - The forecasted weather conditions for a specific day.
 * @param {string} data.days[].description - A description of the forecasted weather for a specific day.
 * @returns {Object} The updated weather data object.
 */
const updateWeatherData = (weatherData, data) => {
  weatherData = {
    today: {
      temperature: data.currentConditions.temp,
      conditions: data.currentConditions.conditions,
      description: data.currentConditions.description,
      sunrise: data.sunriseTime,
      sunset: data.sunsetTime,
      img: data.svgArray[0],
      todayDate: data.week[0],
      location: data.location
    },
    forecast: {
      day1: {
        temperature: data.days[0].temp,
        conditions: data.days[0].conditions,
        description: data.days[0].description,
        img: data.svgArray[1],
        day: data.week[1]
      },
      day2: {
        temperature: data.days[1].temp,
        conditions: data.days[1].conditions,
        description: data.days[1].description,
        img: data.svgArray[2],
        day: data.week[2]
      },
      day3: {
        temperature: data.days[2].temp,
        conditions: data.days[2].conditions,
        description: data.days[2].description,
        img: data.svgArray[3],
        day: data.week[3]
      },
      day4: {
        temperature: data.days[3].temp,
        conditions: data.days[3].conditions,
        description: data.days[3].description,
        img: data.svgArray[4],
        day: data.week[4]
      },
      day5: {
        temperature: data.days[4].temp,
        conditions: data.days[4].conditions,
        description: data.days[4].description,
        img: data.svgArray[5],
        day: data.week[5]
      },
      day6: {
        temperature: data.days[5].temp,
        conditions: data.days[5].conditions,
        description: data.days[5].description,
        img: data.svgArray[6],
        day: data.week[6]
      }
    }
  };
  return weatherData;
};

export default updateWeatherData;