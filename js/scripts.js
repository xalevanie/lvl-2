// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";


const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    
    //seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360)+  90;
    secondHand.style.transform = 'rotate(${secondsDegrees}deg)';
    
    //minutes
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360)+  90;
    minHand.style.transform = 'rotate(${minsDegrees}deg)';
    
    //hours
     const hour = now.getHour();
    const hourDegrees = ((hour / 12) * 360)+  90;
    hourHand.style.transform = 'rotate(${hourDegrees}deg)';
    
    console.log(seconds);
}

setInterval(setDate, 1000);