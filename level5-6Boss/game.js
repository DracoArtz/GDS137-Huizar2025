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

var plots = [];
var plotAmt = 3;

var seeds = [];
var seedAmt = 27;

plantCount = 0;

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

//making plots
for(let p = 0; p < plotAmt; p++)
{
	plots[p] = new GameObject();
	plots[p].width = 80;
	plots[p].height = 80;
	plots[p].x = 100;
	plots[p].y = 200;
	plots[p].color = "#5b3010";

}
//function for if the mouse is over a thing
function mouseOver(obj)
	{
		 if(mouse.x < obj.x + obj.width/2 &&
		 mouse.x > obj.x - obj.width/2 &&
		 mouse.y < obj.y + obj.height/2 &&
		 mouse.y > obj.y - obj.height/2)
		 {
			return true;
		 }
		 return false; 
	}
//original seed place
	for(let s = 0; s < seedAmt; s++)
		{
			seeds[s] = new GameObject();
			seeds[s].width = 10;
			seeds[s].height = 10;
			seeds[s].color = "yellow";
			seeds[s].x = 0;
			seeds[s].y = 1000000;

		}
//planting seeds function
function plant(obj)
	{
		for(s = plantCount; s < seedAmt; s++){
		seeds[s].x = (Math.random() * obj.width) + obj.x - obj.width/2;
		seeds[s].y = (Math.random() * obj.height) + obj.y - obj.height/2;
		obj.seeded = true;
		if(s > plantCount + 8)
			{
				seeds[s].x = 0;
				seeds[s].y = 1000000;
			}
		}
		
		plantCount += 9;
	}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
//rendering array objects
	for(let r = 0; r < plotAmt; r++)
		{
			plots[r].drawRect();
		}
		plots[1].x = 200;
		plots[2].x = 300;

		for(s = 0; s < seedAmt; s++)
		{
		seeds[s].drawRect();
		}
//inventory
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
//planting in the plots
	if(mouse.pressed && mouseOver(plots[0]) && iSlot.select && plots[0].seeded == false)
		{
			plant(plots[0]);
		}
	if(mouse.pressed && mouseOver(plots[1]) && iSlot.select && plots[1].seeded == false)
		{
			plant(plots[1]);
		}
	if(mouse.pressed && mouseOver(plots[2]) && iSlot.select && plots[2].seeded == false)
		{
			plant(plots[2]);
		}
//all the rendering
	context.font = "16px Arial";
	iSlot.drawRect().strokeRect();
	context.fillText(`seeds`, iSlot.x - 20, iSlot.y);

	iSlot1.drawRect().strokeRect();
	context.fillText(`other`, iSlot1.x - 20, iSlot1.y);
	//context.drawImage(img, ball.x - ball.width/2, ball.y - ball.height/2, ball.width, ball.height);
}