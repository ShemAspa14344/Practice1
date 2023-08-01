
function toHours(seconds){
    var Hours = Math.floor(seconds/3600);
    var remainder = seconds % 3600;
    return {Hours: Hours, remainder: remainder};
}

function toMinutes(seconds){
    var Minutes = Math.floor(seconds/60);
    var remainder = seconds % 60;
    return {Minutes: Minutes, remainder: remainder};
}

function HumanDuration(duration){
    var HoursObject = toHours(duration);
    var MinutesObject = toMinutes(HoursObject.remainder);
    var Seconds = MinutesObject.remainder;

    console.log(`The formatted duration of ${duration} is ${HoursObject.Hours}${HoursObject.Hours > 1?" Hours": " Hour"},${MinutesObject.Minutes}${MinutesObject.Minutes > 1?" Minutes":" Minute"} and ${Seconds}${Seconds > 1?" Seconds": " Second"}.`)
}

HumanDuration(4800)
HumanDuration(5212)
HumanDuration(300)