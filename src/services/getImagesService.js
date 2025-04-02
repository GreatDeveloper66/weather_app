import weather_conditions from '../assets/json/weather_conditions.json';
/**
 * Returns an array of URLs for weather icons based on the provided weather conditions.
 *
 * @param {string[]} svgArray - An array of weather conditions.
 * @returns {string[]} - An array of URLs for weather icons.
 */
/**
 * Generates an array of URLs pointing to weather condition icons.
 *
 * @param {string[]} svgArray - An array of weather condition strings.
 * @returns {string[]} An array of URLs for the corresponding weather condition icons.
 *
 * Each weather condition in the input array is mapped to its corresponding icon file.
 * If a weather condition does not have a matching icon, a default icon ('weather.svg') is used.
 */
const getIcons = (svgArray) => {
    return svgArray.map((weather_condition) => {
        const icon = weather_conditions[weather_condition] || 'weather.svg';
        return new URL(`../assets/img/${icon}`, import.meta.url).href;
    });
};

export default getIcons;
