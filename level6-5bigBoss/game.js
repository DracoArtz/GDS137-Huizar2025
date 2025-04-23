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
	seedAmt = 9;
	//original seed place


for(p = 0; p < plotAmt; p++)
	{
		for(s = 0; s < seedAmt; s++ )
			{
			plots[p].seeds[s] = new GameObject;
			plots[p].seeds[s].width = 10;
			plots[p].seeds[s].height = 10;
			plots[p].seeds[s].color = "yellow";
			plots[p].seeds[s].x = 0;
			plots[p].seeds[s].y = 1000000;
			}
	}
	function plant(obj)
	{
		for(s = 0; s < seedAmt; s++)
			{
				obj.seeds[s].x = (Math.random() * obj.width) + obj.x - obj.width/2;
				obj.seeds[s].y = (Math.random() * obj.height) + obj.y - obj.height/2;
				obj.seeded = true;

			}
	}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

//rendering array objects

		plots[1].x = 200;
		plots[2].x = 300;


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
for(p = 0; p < plotAmt; p++)
	{
		if(mouse.pressed && mouseOver(plots[p]) && iSlot.select && plots[p].seeded == false)
		{
			plant(plots[p]);
			plots[p].frames = 0;
		}
		if(plots[p].seeded)plots[p].frames ++;

		for(s = 0; s < seedAmt; s++)
				{
					
					if(plots[p].frames < 300 && plots[p].seeded)plots[p].seeds[s].height += .25;
				}
	}
	
//all the rendering
	context.font = "16px Arial";
	iSlot.drawRect().strokeRect();
	context.fillText(`seeds`, iSlot.x - 20, iSlot.y);

	iSlot1.drawRect().strokeRect();
	context.fillText(`other`, iSlot1.x - 20, iSlot1.y);

	for(let p = 0; p < plotAmt; p++)
		{
			plots[p].drawRect();
			for(s = 0; s < seedAmt; s++)
				{
				plots[p].seeds[s].drawSeed();
				}
		}

	//context.drawImage(img, ball.x - ball.width/2, ball.y - ball.height/2, ball.width, ball.height);
}