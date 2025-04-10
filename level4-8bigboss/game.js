var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var ball;
var score = 0;
var gravity = 1;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
var img = document.getElementById("ScaryGuy");

player = new GameObject();
player.x = 500;
player.y = 550;
player.width = 250;
player.height = 40;
player.friction = 0.725;

iSlot = new GameObject();
iSlot.x = 0 + 50;
iSlot.y = canvas.height - 50;
iSlot.width = 50;
iSlot.height = 50;
iSlot.color = "white";

iSlot1 = new GameObject();
iSlot1.x = 0 + 150;
iSlot1.y = canvas.height - 50;
iSlot1.width = 50;
iSlot1.height = 50;
iSlot1.color = "white";

timer = setInterval(animate, interval);

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

	if(keys["1"])
	{
		iSlot.select = true;
		iSlot1.select = false;
		iSlot.color = "yellow";
		iSlot1.color = "white";
	}
	if(keys["2"])
		{
			iSlot1.select = true;
			iSlot.select = false;
			iSlot1.color = "yellow";
			iSlot.color = "white";
		}

	iSlot.drawRect().strokeRect();
	iSlot1.drawRect().strokeRect();
	//context.drawImage(img, ball.x - ball.width/2, ball.y - ball.height/2, ball.width, ball.height);
}