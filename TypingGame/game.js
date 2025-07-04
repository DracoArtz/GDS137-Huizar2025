var canvas;
var context;
var timer;
var interval = 1000/60;

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
timer = setInterval(animate, interval);

var states = [];
currentState = "menu";

function animate()
{
    states[currentState]();
}

states["menu"] = function menu()
{
    var startButton = new GameObject();
    startButton.x = canvas.width/2;
    startButton.y = canvas.height + 100;
    startButton.width = 100;
    startButton.height = 50;

    startButton.drawRect();
}

states["game"] = function game()
{
var player = new GameObject();
player.x = 100;
player.y = canvas.height/2;
player.width = 300;
player.height = 300;

    //rendering
    player.drawRect();
}