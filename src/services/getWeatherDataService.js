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

const getWeatherDataService = async () => {
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

export default getWeatherDataService;
