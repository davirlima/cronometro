let second = 0;
let minute = 0;
let hour = 0;
let interval;
let alreadyPlay = false;

function timer() {
  second++;
  if (second < 10) {
    document.getElementById("second").innerText = `0${second}`;
  } else {
    document.getElementById("second").innerText = second;
  }

  if (second == 60) {
    minute++;
    second = 0;
    if (minute < 10) {
      document.getElementById("minute").innerText = `0${minute}`;
    } else {
      document.getElementById("minute").innerText = minute;
    }
  }

  if (minute == 60) {
    hour++;
    minute = 0;
    if (hour < 10) {
      document.getElementById("hour").innerText = `0${hour}`;
    } else {
      document.getElementById("hour").innerText = hour;
    }
  }
}

function start() {
  if (alreadyPlay == false) {
    interval = setInterval(timer, 1000);
    alreadyPlay = true;
  }
}

function pause() {
  if (alreadyPlay == true) {
    if (document.getElementById("pauseButton").innerText == "Pausar") {
      document.getElementById("pauseButton").innerText = "Play";
      clearInterval(interval);
    } else {
      interval = setInterval(timer, 1000);
      document.getElementById("pauseButton").innerText = "Pausar";
    }
  }
}

function stop() {
  clearInterval(interval);
  document.getElementById("hour").innerText = "0";
  document.getElementById("minute").innerText = "00";
  document.getElementById("second").innerText = "00";
  document.getElementById("pauseButton").innerText = "Pausar";
  second = 0;
  minute = 0;
  hour = 0;
  alreadyPlay = false;
}
