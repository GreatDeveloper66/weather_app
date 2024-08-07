// import { Loader } from "@googlemaps/js-api-loader";
// const weatherAPIKey = VITE_GOOGLE_MAPS_API_KEY;

// const loader = new Loader({
//     apiKey: weatherAPIKey,
//     version: "weekly"
// });

// export const getGoogleMapService = async () => {
//     const { Map } = await loader();
//     loader.then(async () => {
//         const map = new Map(document.getElementById("map"), {
//           center: { lat: -34.397, lng: 150.644 },
//           zoom: 8,
//         });
//         return map;
//     }).catch((e) => {
//         console.error(e);
//     });
// };