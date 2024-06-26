import axios from 'axios';

const GEOCODING_API_URL = import.meta.env.VITE_GEOCODING_API_URL;
const GEOCODING_API_KEY = import.meta.env.VITE_GEOCODING_API_KEY;


const getCurrentLocationFromLatitudeAndLongitude = async (latitude, longitude) => {
    const AXIOS_API_URL = `${GEOCODING_API_URL}${latitude}&lon=${longitude}&api_key=${GEOCODING_API_KEY}`;
    try {
        const response = await axios.get(AXIOS_API_URL);
        console.log("response from getCurrentLocationService", response);
        switch (response.status) {
            case 401:
            throw new Error(`Error ${response.status}: ${response.statusText}`);
            case 200:
            const data = response.data;
            console.log('Location data:', data);
            const city = data.address.city;
            const state = data.address.state;
            console.log('Current location:', { city, state });
            return `${city}, ${state}`;
            case 404:
            throw new Error(`Error ${response.status}: ${response.statusText}`);
            case 500:
            throw new Error(`Error ${response.status}: ${response.statusText}`);
            default:
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
        throw error;
    }
}

export default getCurrentLocationFromLatitudeAndLongitude;

