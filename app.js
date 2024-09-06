const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateTime() {
    var now = new Date();

    document.getElementById("time").innerText =
        zeroPadding(now.getHours(), 2) + ":" +
        zeroPadding(now.getMinutes(), 2) + ":" +
        zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerText =
        now.getFullYear() + "-" + // Corrected method name
        zeroPadding(now.getMonth() + 1, 2) + "-" + // Fixed date format
        zeroPadding(now.getDate(), 2) + " " + // Fixed to get date of the month
        WEEK[now.getDay()];
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, "0");
}
