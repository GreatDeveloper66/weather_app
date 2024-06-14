import axios from 'axios';
import getWeatherDataService from '../services/getWeatherDataService';

jest.mock('axios');

describe('getWeatherDataService', () => {
  it('should fetch weather data successfully', async () => {
    const mockWeatherData = { /* mock weather data object */ };
    axios.get.mockResolvedValueOnce({ status: 200, data: mockWeatherData });

    const weatherData = await getWeatherDataService();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(expect.any(String), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(weatherData).toEqual(mockWeatherData);
  });

  it('should throw an error if there is an error fetching weather data', async () => {
    const mockError = new Error('Failed to fetch weather data');
    axios.get.mockRejectedValueOnce(mockError);

    await expect(getWeatherDataService()).rejects.toThrow(mockError);
  });
});