var countDownDate = new Date("july 18, 2022 00:00:00").getTime();
let x;

x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    let weeks = Math.floor(distance/ (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor(distance/ (1000*60*60*24));
    let hours = Math.floor(distance% (1000*60*60*24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance% (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(distance% (1000 * 60) / 1000);

    document.getElementById("weeks").innerHTML = weeks;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("weeks").innerHTML = 00;
        document.getElementById("days").innerHTML = 00;
        document.getElementById("hours").innerHTML = 00;
        document.getElementById("minutes").innerHTML = 00;
        document.getElementById("seconds").innerHTML = 00;

    }

}, 1000);