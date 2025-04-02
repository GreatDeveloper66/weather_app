/* This JavaScript code is defining a function `getCurrentLocationFromLatitudeAndLongitude` that takes
latitude and longitude as parameters. It uses Axios to make a GET request to a geocoding API
endpoint constructed using the provided latitude, longitude, and API key. */
import axios from 'axios';

const GEOCODING_API_URL = import.meta.env.VITE_GEOCODING_API_URL;
const GEOCODING_API_KEY = import.meta.env.VITE_GEOCODING_API_KEY;


/**
 * Fetches the current location based on latitude and longitude using a geocoding API.
 *
 * @async
 * @function getCurrentLocationFromLatitudeAndLongitude
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Promise<string>} A promise that resolves to a string containing the city and state of the location.
 * @throws {Error} Throws an error if the API request fails or returns an unexpected status code.
 *
 * @example
 * const location = await getCurrentLocationFromLatitudeAndLongitude(37.7749, -122.4194);
 * console.log(location); // Output: "San Francisco, California"
 */
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
            const city = data.address.city || data.address.town || data.address.village || data.address.hamlet || data.address.county || data.address.state_district || data.address.state || data.address.country || data.address.continent || data.address.postcode || data.address.road || data.address.neighbourhood || data.address.suburb || data.address.city_district || data.address.building || data.address.house_number || data.address.residential || data.address.commercial || data.address.farm || data.address.allotments || data.address.industrial || data.address.military || data.address.retail || data.address.fast_food || data.address.cafe || data.address.bakery || data.address.supermarket || data.address.convenience || data.address.department_store || data.address.mall || data.address.grocery || data.address.alcohol || data.address.beverages || data.address.tobacco || data.address.fuel || data.address.car || data.address.parking || data.address.bicycle || data.address.motorcycle || data.address.public_transport || data.address.taxi || data.address.bus || data.address.train || data.address.tram || data.address.ferry || data.address.airport || data.address.hotel || data.address.motel || data.address.hostel || data.address.camp_site || data.address.guest_house || data.address.chalet || data.address.apartment || data.address.holiday_let || data.address.villa || data.address.house || data.address.detached || data.address.terrace || data.address.farmhouse || data.address.bungalow || data.address.cabin || data.address.static_caravan || data.address.residential_park || data.address.terrace || data.address.residential || data.address.commercial || data.address.retail || data.address.fast_food || data.address.cafe || data.address.bakery || data.address.supermarket || data.address.convenience || data.address.department_store || data.address.mall || data.address.grocery || data.address.alcohol || data.address.beverages || data.address.tobacco || data.address.fuel || data.address.car || data.address.parking || data.address.bicycle || data.address.motorcycle || data.address.public_transport || data.address.taxi || data.address.bus || data.address.train || data.address.tram || data.address.ferry || data.address.airport || data.address.hotel || data.address.motel || data.address.hostel || data.address.camp_site || data.address.guest_house || data.address.chalet || data.address.apartment || data.address.holiday_let || data.address.villa || data.address.house || data.address.detached || data.address.terrace || data.address.farmhouse || data.address.bungalow || data.address.cabin || data.address.static_caravan || data.address;
            const state = data.address.state;
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

