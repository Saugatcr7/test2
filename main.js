// Get the current date and time
var currentDate = new Date();

// Prompt the user to set an alarm time
var alarmTime = input("Set your alarm (e.g., 'hh:mm:ss'):");

// Convert the alarm time to a Date object
var alarmDate = new Date(alarmTime);

// Check if the alarm time is in the future
if (alarmDate > currentDate) {
    // Calculate the time difference between now and the alarm time
    var timeUntilAlarm = alarmDate - currentDate;

    // Use setTimeout to play the alarm sound after the specified time
    setTimeout(function () {
        var audio = new Audio('https://www.myinstants.com/media/sounds/japanese-eas-alarm-49485.mp3');
        audio.play();
    }, timeUntilAlarm);
} else {
    console.log("Please set a future alarm time.");
}
