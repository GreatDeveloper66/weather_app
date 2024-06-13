const getCurrentDateInTextFormat = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const getCurrentDateInTextFormatInXDays = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const translateMilitaryTimeToStandardTime = (militaryTime) => {
    const [hours, minutes, seconds] = militaryTime.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes} ${period}`;
};


const getAWeekOfDates = () => {
    return [
        getCurrentDateInTextFormat(),
        getCurrentDateInTextFormatInXDays(1),
        getCurrentDateInTextFormatInXDays(2),
        getCurrentDateInTextFormatInXDays(3),
        getCurrentDateInTextFormatInXDays(4),
        getCurrentDateInTextFormatInXDays(5),
        getCurrentDateInTextFormatInXDays(6)
    ];

}

export { getAWeekOfDates, translateMilitaryTimeToStandardTime };