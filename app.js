//Functions of the stopwatch

var millis = 0,
    seconds = 0,
    minutes = 0,
    hours = 0,
    isStarted = false;
var millisScreen = document.getElementById("millis");
millisScreen.innerHTML = millis + "0 ";
var secondsScreen = document.getElementById("seconds");
secondsScreen.innerHTML = seconds + " ";
var minutesScreen = document.getElementById("minutes");
minutesScreen.innerHTML = minutes + " ";
var hoursScreen = document.getElementById("hours");
hoursScreen.innerHTML = hours + " ";
var stopwatch = "";
var startBtn = document.getElementById("start-button");
var stopBtn = document.getElementById("stop-button");
stopBtn.disabled = true;
stopBtn.className = "disabled";
var lapBtn = document.getElementById("lap-button");
lapBtn.disabled = true;
lapBtn.className = "disabled";
var clearLapBtn = document.getElementById("lap-clear-button");
clearLapBtn.disabled = true;
clearLapBtn.className = "disabled";
var resetBtn = document.getElementById("reset-button");
resetBtn.disabled = true;
resetBtn.className = "disabled";

//Start the stopwatch

function start() {
    stopwatch = setInterval(function () {
        millis += 1;
        if (millis === 100) {
            millis = 0;
            seconds += 1;
            if (seconds === 60) {
                seconds = 0;
                minutes += 1;
                if (minutes === 60) {
                    minutes = 0;
                    hours += 1;
                    if (hours === 24) {
                        hoursScreen.innerHTML = hours;
                        clearInterval(stopwatch);
                        alert("You have reached the time limit of this stopwatch program.");
                    }
                    hoursScreen.innerHTML = hours;
                }
                minutesScreen.innerHTML = minutes + " ";
            }
            secondsScreen.innerHTML = seconds + " ";
        }
        if (millis < 10) {
            millisScreen.innerHTML = "0" + millis + " ";
        } else {
            millisScreen.innerHTML = millis + " ";
        }

        //Disable the start button

        startBtn.disabled = true;
        startBtn.className = "disabled";
        stopBtn.disabled = false;
        stopBtn.className = "";
        lapBtn.disabled = false;
        lapBtn.className = "";
        resetBtn.disabled = false;
        resetBtn.className = "";
    }, 10);
}

function stop() {
    startBtn.disabled = false;
    startBtn.className = "";
    stopBtn.disabled = true;
    stopBtn.className = "disabled";
    clearInterval(stopwatch);
}

function lap() {
    var lapList = document.getElementById("laps-list");
    if (millis < 10) {
        var millis00 = "0" + millis;
    } else {
        millis00 = millis;
    }
    lapList.innerHTML += "<li id='lap'>" + hours + " h " + minutes + " m " + seconds + " s " + millis00 + " ms" + "</li>";
    clearLapBtn.disabled = false;
    clearLapBtn.className = "";
}

function clearLap() {
    var lapList = document.getElementById("laps-list");
    lapList.innerHTML = "";
    clearLapBtn.disabled = true;
    clearLapBtn.className = "disabled";
}

function reset() {
    clearInterval(stopwatch);
    millis = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    millisScreen.innerHTML = millis + "0 ";
    secondsScreen.innerHTML = seconds + " ";
    minutesScreen.innerHTML = minutes + " ";
    hoursScreen.innerHTML = hours + " ";
    startBtn.disabled = false;
    startBtn.className = "";
    stopBtn.disabled = true;
    stopBtn.className = "disabled";
    lapBtn.disabled = true;
    lapBtn.className = "disabled";
    resetBtn.disabled = true;
    resetBtn.className = "disabled";
}
