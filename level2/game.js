var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var ball;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();
player.x = 30;
player.width = 15;
player.height = 90;
player.color = "purple";

ball = new GameObject();
ball.width = 20;
ball.height = 20;
ball.vx = -2;
ball.vy = 0;

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
			ball.vx = -ball.vx;
			//bottom third
			if(ball.y > player.y + player.height/6){
				ball.vx += 2;
				ball.vy += 2;
			}
			//top third
			else if(ball.y < player.y - player.height/6){
				ball.vx += 2;
				ball.vy -= 2;
			}
		}
		if(ball.x < -20){

			ball.x = canvas.width/2;
			ball.y = canvas.height/2;
			
		}
	player.drawRect();
    ball.drawCircle();
}