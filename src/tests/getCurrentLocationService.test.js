import axios from 'axios';
import getCurrentLocationFromLatitudeAndLongitude from '../services/getCurrentLocationService';

jest.mock('axios');

describe('getCurrentLocationFromLatitudeAndLongitude', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the current location when the API call is successful', async () => {
    const latitude = 37.7749;
    const longitude = -122.4194;
    const expectedLocation = 'San Francisco, CA';

    const mockResponse = {
      status: 200,
      data: {
        address: {
          city: 'San Francisco',
          state: 'CA',
        },
      },
    };

    axios.get.mockResolvedValue(mockResponse);

    const location = await getCurrentLocationFromLatitudeAndLongitude(latitude, longitude);

    expect(axios.get).toHaveBeenCalledWith(
      `https://example.com/api/geocoding?lat=${latitude}&lon=${longitude}&api_key=YOUR_API_KEY`
    );
    expect(location).toBe(expectedLocation);
  });

  it('should throw an error when the API call returns a 401 status', async () => {
    const latitude = 37.7749;
    const longitude = -122.4194;

    const mockResponse = {
      status: 401,
      statusText: 'Unauthorized',
    };

    axios.get.mockResolvedValue(mockResponse);

    await expect(getCurrentLocationFromLatitudeAndLongitude(latitude, longitude)).rejects.toThrow(
      'Error 401: Unauthorized'
    );
  });

  it('should throw an error when the API call returns a 404 status', async () => {
    const latitude = 37.7749;
    const longitude = -122.4194;

    const mockResponse = {
      status: 404,
      statusText: 'Not Found',
    };

    axios.get.mockResolvedValue(mockResponse);

    await expect(getCurrentLocationFromLatitudeAndLongitude(latitude, longitude)).rejects.toThrow(
      'Error 404: Not Found'
    );
  });

  it('should throw an error when the API call returns a 500 status', async () => {
    const latitude = 37.7749;
    const longitude = -122.4194;

    const mockResponse = {
      status: 500,
      statusText: 'Internal Server Error',
    };

    axios.get.mockResolvedValue(mockResponse);

    await expect(getCurrentLocationFromLatitudeAndLongitude(latitude, longitude)).rejects.toThrow(
      'Error 500: Internal Server Error'
    );
  });

  it('should throw an error when the API call returns an unexpected status', async () => {
    const latitude = 37.7749;
    const longitude = -122.4194;

    const mockResponse = {
      status: 403,
      statusText: 'Forbidden',
    };

    axios.get.mockResolvedValue(mockResponse);

    await expect(getCurrentLocationFromLatitudeAndLongitude(latitude, longitude)).rejects.toThrow(
      'Error 403: Forbidden'
    );
  });

  it('should throw an error when the API call fails', async () => {
    const latitude = 37.7749;
    const longitude = -122.4194;

    const mockError = new Error('Network Error');

    axios.get.mockRejectedValue(mockError);

    await expect(getCurrentLocationFromLatitudeAndLongitude(latitude, longitude)).rejects.toThrow(
      'Error fetching location data: Network Error'
    );
  });
});