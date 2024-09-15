let timer;
let seconds = 0;
let isRunning = false;
let startTime, stopTime;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date();
        displayStartTimestamp();
        
        timer = setInterval(function () {
            seconds++;
            displayTime();
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        stopTime = new Date();
        clearInterval(timer);
        displayStopTimestamp();
    }
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    displayTime();
    document.getElementById('start-timestamp').textContent = '';
    document.getElementById('stop-timestamp').textContent = '';
}

function displayTime() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    document.getElementById('timer-display').textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function displayStartTimestamp() {
    document.getElementById('start-timestamp').textContent = 
        'Started at: ' + startTime.toLocaleTimeString();
}

function displayStopTimestamp() {
    document.getElementById('stop-timestamp').textContent = 
        'Stopped at: ' + stopTime.toLocaleTimeString();
}

