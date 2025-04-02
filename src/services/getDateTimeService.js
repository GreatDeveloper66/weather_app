const getCurrentDateInTextFormat = (days = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const translateMilitaryTimeToStandardTime = (militaryTime) => {
    const [hours, minutes] = militaryTime.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes} ${period}`;
};

/**
 * Returns an array of dates representing a week.
 * @returns {Array} An array of dates in text format.
 */
/**
 * Generates an array representing a week of dates starting from today.
 * The first element is the string "TODAY", followed by the next six dates
 * in text format.
 *
 * @returns {string[]} An array of seven strings, where the first element is "TODAY"
 * and the subsequent elements are the next six dates in text format.
 */
const getAWeekOfDates = () => {
    return [
        "TODAY",
        getCurrentDateInTextFormat(1),
        getCurrentDateInTextFormat(2),
        getCurrentDateInTextFormat(3),
        getCurrentDateInTextFormat(4),
        getCurrentDateInTextFormat(5),
        getCurrentDateInTextFormat(6)
    ];
}

export { getAWeekOfDates, translateMilitaryTimeToStandardTime };
