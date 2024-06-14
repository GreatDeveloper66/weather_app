import getIcons from '../services/getImagesService';

describe('getIcons', () => {
  it('should return an array of URLs for weather icons based on the provided weather conditions', () => {
    const svgArray = ['sunny', 'cloudy', 'rainy'];
    const expectedIcons = [
      new URL('../assets/img/sunny.svg', import.meta.url).href,
      new URL('../assets/img/cloudy.svg', import.meta.url).href,
      new URL('../assets/img/rainy.svg', import.meta.url).href,
    ];

    const result = getIcons(svgArray);

    expect(result).toEqual(expectedIcons);
  });

  it('should return an array of URLs with default icon when weather condition is not found', () => {
    const svgArray = ['sunny', 'unknown', 'rainy'];
    const expectedIcons = [
      new URL('../assets/img/sunny.svg', import.meta.url).href,
      new URL('../assets/img/weather.svg', import.meta.url).href,
      new URL('../assets/img/rainy.svg', import.meta.url).href,
    ];

    const result = getIcons(svgArray);

    expect(result).toEqual(expectedIcons);
  });
});