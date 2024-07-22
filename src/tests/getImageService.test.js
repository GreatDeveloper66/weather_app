import { describe, expect, test } from 'vitest';
import { getIcons } from '../services/getImageService';

describe('getIconsService', () => {
  test('should return a string', async () => {
    const image = await getIcons(['clear']);
    expect(typeof image).toBe('string');
  });
});

describe('getIconsServiceWithArray', () => {
  test('should return an array of strings', async () => {
    const images = await getIcons(['clear', 'cloudy']);
    expect(images).toBeInstanceOf(Array);
    expect(typeof images[0]).toBe('string');
  });
});

describe('getIconsServiceWithInvalidInput', () => {
    test('should return a string', async () => {
        const image = await getIcons(['invalid']);
        expect(image).toEqual('weather.svg');
    });
});