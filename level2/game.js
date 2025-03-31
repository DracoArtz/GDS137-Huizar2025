var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var ball;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();
player.x = 5;
player.width = 15;
player.height = 60;
player.color = "purple";

ball = new GameObject();
ball.width = 20;
ball.height = 20;
ball.vx = 5;
ball.vy = 5;

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
	
ball.move();

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -ball.vx;	
	}
	// if(ball.x < 0 + ball.width/2)
	// 	{
	// 		ball.vx = -ball.vx;	
	// 	}
	if(ball.y > canvas.height - ball.height/2)
			{
				ball.vy = -ball.vy;	
			}
	if(ball.y < 0 + ball.height/2)
				{
					ball.vy = -ball.vy;	
				}

		if(ball.collision(player)){
			ball.vx = 5;
			console.log("colliding");
		}

	// if (player.x + player.width - ball.x >= 0 && ball.y - player.y == 0){
	// 	ball.vx = -ball.vx;
	// }
	player.drawRect();
    ball.drawCircle();
}