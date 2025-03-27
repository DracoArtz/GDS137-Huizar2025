var canvas;
var context;
var timer;
var interval = 1000/60;

canvas = document.getElementById("canvas");

context = canvas.getContext("2d");

timer = setInterval(animate, interval);