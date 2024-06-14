import weather_conditions from '../assets/json/weather_conditions.json';
/**
 * Returns an array of URLs for weather icons based on the provided weather conditions.
 *
 * @param {string[]} svgArray - An array of weather conditions.
 * @returns {string[]} - An array of URLs for weather icons.
 */
const getIcons = (svgArray) => {
    return svgArray.map((weather_condition) => {
        const icon = weather_conditions[weather_condition] || 'weather.svg';
        return new URL(`../assets/img/${icon}`, import.meta.url).href;
    });
};

export default getIcons;
