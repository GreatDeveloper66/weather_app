import { describe, expect, test } from 'vitest';
import { getAWeekOfDates, translateMilitaryTimeToStandardTime } from '../services/getDateTimeService';

  
    
    describe('getAWeekOfDates', () => {
      const dates = getAWeekOfDates();
      const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
      test('should return an array of dates 7 long', () => {
        expect(dates).toHaveLength(7);
      });
      test('should return an array of dates in the format "Month Day, Year"', () => {
        const today  = new Date();
        for(let i = 0;i < 7;i++){
          const expectedDate = new Date(today);
          expectedDate.setDate(today.getDate() + i);
          const formattedExpectedDate = dateFormatter.format(expectedDate);
          expect(dates[i]).toBe(formattedExpectedDate);
        }
      });
    });

    describe('translateMilitaryTimeToStandardTime', () => {
      const morningTime = '08:00';
      const afternoonTime = '14:00';
      const eveningTime = '20:00';

      test('should return a time in the format "h:mm AM/PM"', () => {
        expect(translateMilitaryTimeToStandardTime(morningTime)).toBe('8:00 AM');
        expect(translateMilitaryTimeToStandardTime(afternoonTime)).toBe('2:00 PM');
        expect(translateMilitaryTimeToStandardTime(eveningTime)).toBe('8:00 PM');
      });
    });