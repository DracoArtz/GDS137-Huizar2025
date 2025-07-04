var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var ball;
var scythe;
var score = 0;
var gravity = 1;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
//var img = document.getElementById("ScaryGuy");
var startButton = new GameObject();
startButton.width = 300;
startButton.height = 100;
startButton.x = canvas.width/2;
startButton.y = canvas.height - 150;

var instructButton = new GameObject();
instructButton.width = 200;
instructButton.height = 100;
instructButton.x = canvas.width/5;
instructButton.y = canvas.height - 150;
instructButton.color = "yellow";

var sButton = new GameObject();
sButton.width = 80;
sButton.height = 60;
sButton.x = canvas.width - sButton.width/2
sButton.y = 0 + sButton.height/2
sButton.color = "#b9ff00";

var sellButton = new GameObject();
sellButton.width = 80;
sellButton.height = 60;
sellButton.x = canvas.width - sButton.width/2
sellButton.y = canvas.height - sButton.height/2
sellButton.color = "yellow";

var shopOpen = false;
var corn = false;

player = new GameObject();
player.x = 500;
player.y = 550;
player.width = 250;
player.height = 40;
player.friction = 0.725;

scythe = new GameObject();
scythe.x = 0 + 150;
scythe.y = canvas.height - 50;
scythe.width = 20;
scythe.height = 40;
scythe.color = 'blue';
scytheHold = false;

var wheat = 0;
var cornAmt = 0;
var coins = 0;

var plots = [];
var plotAmt = 3;

var plantCount = 0;

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

iSlot2 = new GameObject();
iSlot2.x = 0 + 250;
iSlot2.y = canvas.height - 50;
iSlot2.width = 50;
iSlot2.height = 50;
iSlot2.color = "white";

var backButton = new GameObject();
backButton.width = 100;
backButton.height = 100;
backButton.x = 0 + backButton.width/2;
backButton.y = canvas.height - backButton.height/2;


var state = [];
var currentState;
currentState = "menu";
timer = setInterval(animate, interval);

function animate()
{
	state[currentState]();
}
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
		for(c = 0; c < cornRend; c++)
		{
			plots[p].cornStalk[c] = new GameObject;
			plots[p].cornStalk[c].width = 10;
			plots[p].cornStalk[c].height = 10;
			plots[p].cornStalk[c].color = "orange";
			plots[p].cornStalk[c].x = 0;
			plots[p].cornStalk[c].y = 1000000;
		}
	}
	function plant(obj)
	{
		for(s = 0; s < seedAmt; s++)
			{
				obj.seeds[s].x = (Math.random() * obj.width) + obj.x - obj.width/2;
				obj.seeds[s].y = (Math.random() * obj.height) + obj.y - obj.height/2;
				obj.seeded = true;
				obj.seedNum = 9;
				obj.frames = 0;
			}
	}

	function plantCorn(obj)
	{
		for(c = 0; c < seedAmt; c++)
			{
				obj.cornStalk[c].x = (Math.random() * obj.width) + obj.x - obj.width/2;
				obj.cornStalk[c].y = (Math.random() * obj.height) + obj.y - obj.height/2;
				obj.seededCorn = true;
				obj.cornNum = 9;
				obj.frames = 0;
			}
	}

state["menu"] = function menu()
{
	context.clearRect(0, 0, canvas.width, canvas.height)
	if(mouseOver(startButton)) startButton.color = 'green';
	else{startButton.color = 'red'}
	if(mouseOver(startButton) && mouse.pressed)currentState = "game";

	if(mouseOver(instructButton)) instructButton.color = 'blue';
	else{instructButton.color = 'yellow'}
	if(mouseOver(instructButton) && mouse.pressed)currentState = "instructions";

	context.font = "60px Arial";
	context.fillText(`Big Draco Farm`, canvas.width/3.5, canvas.height/4);
	context.font = "30px Arial";
	context.fillText(`By Draco Huizar`, canvas.width/2.5, canvas.height/3);
	startButton.drawRect().strokeRect();
	instructButton.drawRect().strokeRect();
	context.fillText(`Click to Play`, startButton.x - startButton.width/3.5, startButton.y);
	context.fillText(`Instructions`, instructButton.x - instructButton.width/2.5, instructButton.y);
}

state["instructions"] = function instructions()
{
	backButton.x = 0 + backButton.width/2;
	backButton.y = canvas.height - backButton.height/2;
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.font = "60px Arial";
	context.fillText(`Instructions`, canvas.width/3.5, canvas.height/4);
	context.font = "30px Arial";
	context.fillText(`1. Use the number keys to select inventory slots (1, 2, 3)`, canvas.width/5, canvas.height/3);
	context.fillText(`2. Click and drag the scythe to harvest crops.`, canvas.width/5, canvas.height/2);
	backButton.drawRect().strokeRect();
	context.fillText('Back', backButton.x - 40, backButton.y)

	if(mouseOver(backButton)) backButton.color = "lime";
	else{backButton.color = "pink"}
	if(mouseOver(backButton) && mouse.pressed) currentState = "menu";

}

state["game"] = function game()
{
	context.clearRect(0,0,canvas.width, canvas.height);

//plot location

		plots[1].x = 200;
		plots[2].x = 300;


//inventory
	if(keys["1"])
	{
		iSlot.select = true;
		iSlot1.select = false;
		iSlot2.select = false;
		iSlot.color = "yellow";
		iSlot1.color = "white";
		iSlot2.color = "white";
	}
	if(keys["2"])
		{
			iSlot1.select = true;
			iSlot.select = false;
			iSlot2.select = false;
			iSlot1.color = "yellow";
			iSlot.color = "white";
			iSlot2.color = "white";
		}
	if(keys["3"])
		{
			iSlot2.select = true;
			iSlot.select = false;
			iSlot1.select = false;
			iSlot2.color = "yellow";
			iSlot.color = "white";
			iSlot1.color = "white";
		}
//planting in the plots
for(p = 0; p < plotAmt; p++)
	{	
		if(mouse.pressed && mouseOver(plots[p]) && iSlot.select && plots[p].seeded == false && !plots[p].seededCorn)
		{
			plant(plots[p]);
		}
		if(mouse.pressed && mouseOver(plots[p]) && iSlot2.select && plots[p].seededCorn == false && !plots[p].seeded)
		{
			plantCorn(plots[p]);
		}
		if(plots[p].seeded)plots[p].frames ++;
		if(plots[p].seededCorn)plots[p].frames ++;

		for(s = 0; s < seedAmt; s++)
				{
					if(plots[p].frames < 300 && plots[p].seeded) plots[p].seeds[s].height += .25;

					if(plots[p].seeds[s].seedCollision(scythe) && plots[p].frames > 300)
						{
							wheat++;
							plots[p].seeds[s].height = 10;
							plots[p].seeds[s].y = 1000000;
							plots[p].seedNum--;
						}
				}
		for(c = 0; c < seedAmt; c++)
				{
					if(plots[p].frames < 600 && plots[p].seededCorn) plots[p].cornStalk[c].height += .1;

					if(plots[p].cornStalk[c].seedCollision(scythe) && plots[p].frames > 600)
						{
							cornAmt += 3;
							plots[p].cornStalk[c].height = 10;
							plots[p].cornStalk[c].y = 1000000;
							plots[p].cornNum--;
							
						}
				}
				if(plots[p].seedNum == 0 && plots[p].cornNum == 0)
					{
						plots[p].seeded = false;
						plots[p].seededCorn = false;
					}
	}
	//scythe clicking and moving
	if(mouse.pressed && mouseOver(scythe) && iSlot1.select)
		{
			scytheHold = true;
		}
	else if(!mouse.pressed || !iSlot1.select)
		{
			scytheHold = false;
			scythe.x = 0 + 150
			scythe.y = canvas.height - 50;
		}
	if(scytheHold)
	{
		scythe.x = mouse.x;
		scythe.y = mouse.y;
	}

	//shop
	if(mouse.pressed && mouseOver(sButton))
		{
			shopOpen = true;
		}

	if(mouse.pressed && mouseOver(sellButton))
		{
			coins += wheat 
			coins += cornAmt;
			wheat = 0;		
			cornAmt = 0;
		}

	if(corn == true)
		{
			iSlot2.drawRect().strokeRect();
			context.fillText(`Corn`, iSlot2.x-iSlot2.width/2 + 8, iSlot2.y);
		}

//all the rendering
	context.font = "16px Arial";
	iSlot.drawRect().strokeRect();

	context.fillText(`Wheat`, iSlot.x-iSlot.width/2, iSlot.y);

	iSlot1.drawRect().strokeRect();


	for(let p = 0; p < plotAmt; p++)
		{
			plots[p].drawRect();
			for(s = 0; s < seedAmt; s++)
				{
				plots[p].seeds[s].drawSeed();
				}
			for(c = 0; c < seedAmt; c++)
				{
				plots[p].cornStalk[c].drawSeed();
				}
		}
		backButton.x = canvas.width - backButton.width/2;
		backButton.y = canvas.height - 300;
		backButton.width = 75;
		backButton.height = 75;
		if(mouseOver(backButton)) backButton.color = "lime";
		else{backButton.color = "pink"}
		if(mouseOver(backButton) && mouse.pressed) currentState = "menu";

	scythe.drawRect();
	sButton.drawRect().strokeRect();
	sellButton.drawRect().strokeRect();
	backButton.drawRect().strokeRect();
	context.fillText(`Scythe`, iSlot1.x-iSlot1.width/2, iSlot1.y);
	context.fillText(`Wheat: ${wheat}`, 10, 30);
	context.fillText(`Corn: ${cornAmt}`, 10, 50);
	context.fillText(`Coins: ${coins}`, 10, 100);
	context.fillText(`Shop`, sButton.x - sButton.width/4, sButton.y);
	context.fillText(`Sell All`, sellButton.x - sellButton.width/4, sellButton.y);
	context.fillText(`Crops`, sellButton.x - sellButton.width/4, sellButton.y + 20);
	context.fillText(`Back`, backButton.x - 20, backButton.y);
	if(cAlert)
		{
			alert("Car-bine Harvester won't be added until version 7.8. You're in version 0.3.")
			cAlert = false;
		}

	if (shopOpen == true) shop();
	//context.drawImage(img, ball.x - ball.width/2, ball.y - ball.height/2, ball.width, ball.height);
}