const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const updateClockHands = () => {
    updateHourHand();
    updateMinuteHand();
    updateSecondHand();
};

const getCurrentUnitOfTime = (unit) => {
    const now = new Date();
    switch (unit) {
    case "hours": 
        return now.getHours();
        break;
    case "minutes":
        return now.getMinutes();
        break;
    case "seconds":
        return now.getSeconds();
        break;
    default:
        console.log('Measurement of time not supported.');
        break;
    };
};

const transformClockHand = (attr, degrees) => { 
    attr.style.transform = `rotate(${degrees}deg)`;
};

const updateHourHand = () => {
    const hoursDegrees = ((getCurrentUnitOfTime("hours") / 12) * 360) + 90;
    transformClockHand(hourHand, hoursDegrees);
}

const updateMinuteHand = () => {
    const minutesDegrees = ((getCurrentUnitOfTime("minutes") / 60) * 360) + 90;
    transformClockHand(minuteHand, minutesDegrees);
}

const updateSecondHand = () => {
    const secondsDegrees = ((getCurrentUnitOfTime("seconds") / 60) * 360) + 90;
    transformClockHand(secondHand, secondsDegrees);
};

setInterval(updateClockHands, 1000);