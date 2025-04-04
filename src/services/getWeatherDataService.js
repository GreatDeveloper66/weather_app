/**
 * Retrieves weather data from the API based on the current user's location.
 * @returns {Promise<Object>} The weather data object.
 * @throws {Error} If there is an error fetching the weather data.
 */
/**
 * Fetches weather data based on the user's current geographical location.
 * 
 * This function retrieves the user's current latitude and longitude using the 
 * `getCurrentPosition` function, constructs a request URL using the Visual Crossing 
 * Weather API, and fetches the weather data for the specified location.
 * 
 * @async
 * @function getWeatherDataServiceBasedonCurrentLocation
 * @returns {Promise<Object>} A promise that resolves to the weather data object.
 * @throws {Error} Throws an error if the request fails or the response status is not 200.
 */

import axios from 'axios';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const visualCrossingURL = import.meta.env.VITE_VISUAL_CROSSING_API_URL;

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve([position.coords.latitude, position.coords.longitude]),
      error => reject(error)
    );
  });
};

const getWeatherDataServiceBasedonCurrentLocation = async () => {
  try {
    const [latitude, longitude] = await getCurrentPosition();
    const url = `${visualCrossingURL}/${latitude},${longitude}?key=${apiKey}`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status !== 200) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const weatherData = response.data;
    console.log('Weather data:', weatherData);
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

const getWeatherDataServiceAtLatLong = async (latitude, longitude) => {
  try {
    const url = `${visualCrossingURL}/${latitude},${longitude}?key=${apiKey}`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status !== 200) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const weatherData = response.data;
    console.log('Weather data:', weatherData);
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export { getWeatherDataServiceBasedonCurrentLocation, getWeatherDataServiceAtLatLong };
