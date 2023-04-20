const clock_hours = document.getElementById("hours");
const clock_minutes = document.getElementById("minutes");
const clock_seconds = document.getElementById("seconds");
const clock_amPm = document.getElementById("amPm");

setInterval(function(){
const date = new Date()
let hours = date.getHours();
let amPm = "AM";
if(hours > 11){
    amPm = "PM";
    if(hours > 12 ){
        hours -= 12;
    }
}

clock_hours.innerText = hours;
clock_minutes.innerText = date.getMinutes();
clock_seconds.innerText = date.getSeconds();
clock_amPm.innerText = amPm;

// console.log(date)

}, 1000)
