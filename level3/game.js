var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var player2;
var ball;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

player = new GameObject();
player.x = 30;
player.width = 15;
player.height = 90;
player.color = "purple";

player2 = new GameObject();
player2.x = 990;
player2.width = 15;
player2.height = 90;
player2.color = "orange";

ball = new GameObject();
ball.width = 20;
ball.height = 20;
ball.vx = -5;
ball.vy = 0;

timer = setInterval(animate, interval);

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
	//player 1
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
	//player 2
	if (up){
        player2.y += -5;
    }
    if (down){
        player2.y += 5;
    }
    if(player2.y > canvas.height - player2.height/2)
        {
            player2.y = canvas.height - player2.height/2;	
        }
    if(player2.y < 0 + player2.height/2)
            {
                player2.y = 0 + player2.height/2;	
            }
	
ball.move();

	if(ball.y > canvas.height - ball.height/2)
			{
				ball.vy = -ball.vy;	
			}
	if(ball.y < 0 + ball.height/2)
				{
					ball.vy = -ball.vy;	
				}

		if(ball.collision(player)){
			ball.x = player.x + player.width/2 + ball.width/2;
			ball.vx = -ball.vx;
			
			//bottom third
			if(ball.y > player.y + player.height/6){
				ball.vy = 5;
			}
			//top third
			else if(ball.y < player.y - player.height/6){
				ball.vy = -5;
			}
		}
		
		if(ball.collision(player2)){
			ball.x = player2.x - player2.width/2 - ball.width/2;
			ball.vx = -ball.vx;
			
			//bottom third
			if(ball.y > player2.y + player2.height/6){
				ball.vy = 5;
			}
			//top third
			else if(ball.y < player2.y - player2.height/6){
				ball.vy = -5;
			}
		}

		if(ball.x < -20){
			ball.x = canvas.width/2;
			ball.y = canvas.height/2;
		}
		
		if(ball.x > 1020){
			ball.x = canvas.width/2;
			ball.y = canvas.height/2;
		}
	player.drawRect();
	player2.drawRect();
    ball.drawCircle();
}