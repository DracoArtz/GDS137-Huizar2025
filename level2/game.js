var canvas;
var context;
var timer;
var interval = 1000/60;
var player;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();
player.x = 30;
player.width = 15;
player.height = 60;
player.color = "purple";
timer = setInterval(animate, interval);

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
    if (w){
        player.y += -5;
    }
    if (s){
        player.y += 5;
    }
    if(player.y > canvas.height - player.height/2)
        {
            player.y = canvas.height - player.height/2;	
        }
    if(player.y < 0 + player.height/2)
            {
                player.y = 0 + player.height/2;	
            }
	

	player.drawRect();
}