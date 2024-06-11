import weather_conditions from '../assets/json/weather_conditions.json';
const getIcons = (svgArray) => {
    return svgArray.map((weather_condition) => {
        const icon = weather_conditions[weather_condition] || 'weather.svg';
        return new URL(`../assets/img/${icon}`, import.meta.url).href;
    });
};

export default getIcons;
