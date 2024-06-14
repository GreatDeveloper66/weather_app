import { getAWeekOfDates } from './getDateTimeService';

describe('getAWeekOfDates', () => {
  it('should return an array of dates for the current week', () => {
    const expectedDates = [
      getCurrentDateInTextFormat(),
      getCurrentDateInTextFormat(1),
      getCurrentDateInTextFormat(2),
      getCurrentDateInTextFormat(3),
      getCurrentDateInTextFormat(4),
      getCurrentDateInTextFormat(5),
      getCurrentDateInTextFormat(6)
    ];

    const result = getAWeekOfDates();

    expect(result).toEqual(expectedDates);
  });
});