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
    const today = getCurrentDateInTextFormat();
    const tommorow = getCurrentDateInTextFormatInXDays(1);
    const dayAfterTommorow = getCurrentDateInTextFormatInXDays(2);
    const twoDaysAfterTommorow = getCurrentDateInTextFormatInXDays(3);
    const threeDaysAfterTommorow = getCurrentDateInTextFormatInXDays(4);
    const fourDaysAfterTommorow = getCurrentDateInTextFormatInXDays(5);
    const fiveDaysAfterTommorow = getCurrentDateInTextFormatInXDays(6);

    return {
        "today": today,
        "tomorrow": tommorow,
        "dayAfterTomorrow": dayAfterTommorow,
        "twoDaysAfterTommorow": twoDaysAfterTommorow,
        "threeDaysAfterTommorow": threeDaysAfterTommorow,
        "fourDaysAfterTommorow": fourDaysAfterTommorow,
        "fiveDaysAfterTommorow": fiveDaysAfterTommorow
    };

}

export { getAWeekOfDates, translateMilitaryTimeToStandardTime };