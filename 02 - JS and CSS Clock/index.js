"use strict";

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = [secondHand,minuteHand,hourHand];

const getNewDate = () => {
    return new Date;
}

const transformClockHand = (attr, degrees) => { 
    attr.style.transform = `rotate(${degrees}deg)`;
};

const updateClockHands = () => {
    const hoursDegrees = (( getNewDate().getHours() / 12) * 360) + 90;
    const minutesDegrees = (( getNewDate().getMinutes() / 60) * 360) + 90;
    const secondsDegrees = (( getNewDate().getSeconds() / 60) * 360) + 90;
    const degreeArray = [secondsDegrees, minutesDegrees, hoursDegrees];

    hands.forEach((hand, id) => {
        transformClockHand(hand, degreeArray[id]);
    }) 
};

setInterval(updateClockHands, 1000);