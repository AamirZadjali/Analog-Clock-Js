var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hour = document.getElementById("hour");

setInterval(function () {
  sec.style.transform += "rotate(6deg)";
}, 1000);

setInterval(function () {
  min.style.transform += "rotate(6deg)";
}, 60000);

setInterval(function () {
  hour.style.transform += "rotate(31deg)";
}, 3600000);
