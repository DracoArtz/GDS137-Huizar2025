var canvas;
var context;
var timer;
var interval = 1000/60;

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
timer = setInterval(animate, interval);

var states = [];
currentState = "game";

var player = new GameObject();
player.x = 100;
player.y = canvas.height/2;
player.width = 30;
player.height = 300;
player.friction = .7;

var playerP = new GameObject();
playerP.x = player.x + player.height/2;
playerP.y = canvas.height/2;
playerP.width = 30;
playerP.height = 40;

var pond = new GameObject();
pond.x = 800;
pond.y = canvas.height/2;
pond.width = 450;
pond.height = 300;
pond.color = "#64ade2";
pond.friction = .5;

var rod = new GameObject();
rod.x = player.x + player.width/2 + 10;
rod.y = canvas.height/2;
rod.width = 10;
rod.height = 60;
rod.color = "brown";

function animate()
{
    states[currentState]();
}
states["game"] = function game()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //player controls
    if(keys["w"]) player.vy += -2;
    if(keys["a"]) player.vx += -2;
    if(keys["s"]) player.vy += 2;
    if(keys["d"]) player.vx += 2;
    //so player doesnt fly infinitly away
    player.vx *= player.friction;
    player.vy *= player.friction;
    player.move();
    //canvas wall collision
    if(player.x < 0 + player.width/2) player.x = 0 + player.width/2;
    if(player.x > canvas.width - player.width/2) player.x = canvas.width - player.width/2;
    if(player.y < 0 + player.height/2) player.y = 0 + player.height/2;
    if(player.y > canvas.height - player.height/2) player.y = canvas.height - player.height/2;
    //walking in the pond
    if(player.collision(pond)) 
        {
            player.vx *= pond.friction;
            player.vy *= pond.friction;
        }
    else
    {
        player.width = 30;
        player.height = 40;
        playerP.drawRect();
    }
    if(player.collision(pond.bottom())) player.y = pond.y - pond.height/2 + player.height;
    playerP.x = player.x;
    playerP.y = player.y + player.height;
    rod.x = player.x + player.width/2 + 10;
    rod.y = player.y + player.height/2 - 60;
    //rendering
    playerP.drawRect();
    pond.drawRect();
    player.drawRect();
    rod.drawRect();
}