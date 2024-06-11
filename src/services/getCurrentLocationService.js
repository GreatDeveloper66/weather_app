import axios from 'axios';

const GEOCODING_API_URL = import.meta.env.VITE_GEOCODING_API_URL;
const GEOCODING_API_KEY = import.meta.env.VITE_GEOCODING_API_KEY;


const getCurrentLocationService = async (latitude, longitude) => {
    const AXIOS_API_URL = `${GEOCODING_API_URL}${latitude}&lon=${longitude}&api_key=${GEOCODING_API_KEY}`
    try {
        const response = await axios.get(AXIOS_API_URL);
        console.log("response from getCurrentLocationService", response);
        if (response.status == 401) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        } else if (response.status == 200) {
            const data = response.data;
            console.log('Location data:', data);
            return data;
        } else if (response.status == 404) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        } else if (response.status == 500) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
        throw error;
    }
}

const getCityAndState = async (latitude, longitude) => {
    try {
        const locationData = await getCurrentLocationService(latitude, longitude);
        console.log("locationData", locationData);
        const city = locationData.address.city;
        const state = locationData.address.state;
        return { city, state  };
    }
    catch (error) {
        console.error('Error fetching city and state:', error);
        throw error;
    }
}

const getCurrentLocationFromLatitudeAndLongitude = async (latitude, longitude) => {
    const currentLocation = await getCityAndState(latitude, longitude);
    console.log('Current location:', currentLocation);
    return `${currentLocation.city}, ${currentLocation.state}`;
  };

export default getCurrentLocationFromLatitudeAndLongitude;

// const callGoogleLocationAPI = async (latitude, longitude) => {
//     try {
//         console.log(`${GEOCODING_API_URL}/json?latlng=${latitude},${longitude}&key=${GEOCODING_API_KEY}`)
//         axios.get(`${GEOCODING_API_URL}/json?latlng=${latitude},${longitude}&key=${GEOCODING_API_KEY}`).then((response) => {
//             console.log(response);
//         }).then((data) => {
//             console.log(data);
//         }).catch((error) => {
//             console.error('Error fetching location data:', error);
//             throw error;
//         });     
//     }   catch (error) {
//         console.error('Error fetching location data:', error);
//         throw error;
//     }

// }

// const getCityAndState = async (latitude, longitude) => {
//     try {
//         const response = await callGoogleLocationAPI(latitude, longitude);
//         console.log(response);
//         return { city, state, address };
//     } catch (error) {
//         console.error('Error fetching city and state:', error);
//         throw error;
//     }
// }

// export default getCityAndState;
// // const getCurrentLocationService = async (latitude, longitude) => {
// //     try {
// //         const response = await axios.get(`${GEOCODING_API_URL}/json?latlng=${latitude},${longitude}&key=${GEOCODING_API_KEY}`);
    
// //         if (response.status !== 200) {
// //         throw new Error(`Error ${response.status}: ${response.statusText}`);
// //         }
    
// //         const data = response.data;
// //         console.log('Location data:', data);
// //         return data;
// //     } catch (error) {
// //         console.error('Error fetching location data:', error);
// //         throw error;
// //     }
// //     }


// //     const getCityAndState = async (latitude, longitude) => {
// //         try {
// //             const response = await getCurrentLocationService(latitude, longitude);
// //             console.log(response);
// //             return { city, state, address };
// //         } catch (error) {
// //             console.error('Error fetching city and state:', error);
// //             throw error;
// //         }
// //     }


// // export default getCityAndState;
