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
player.color = "cyan";

ball = new GameObject();
ball.width = 40;
ball.height = 40;
ball.vx = -5;
ball.vy = 0;
ball.color = "magenta";

timer = setInterval(animate, interval);

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

    if (a){
        player.x += -5;
    }
    if (d){
        player.x += 5;
    }

    if(player.x > canvas.width - player.width/2)
        {
            player.x = canvas.width - player.width/2;	
        }
    if(player.x < 0 + player.width/2)
            {
                player.x = 0 + player.width/2;	
            }

	ball.move();
	//player.move();

	if(ball.x > canvas.width - ball.width/2)
		{
			ball.vx = -ball.vx;	
		}
	if(ball.x < 0 + ball.width/2)
		{
			ball.vx = -ball.vx;	
		}
	if(ball.y > canvas.height - ball.height/2)
		{
			ball.vy = -ball.vy*.67;	
			ball.y = canvas.height - ball.height/2;
			score = 0;
		}
	if(ball.y < 0 + ball.height/2)
		{
			ball.vy = -ball.vy;	
		}

		ball.vy += gravity;

		if(ball.collision(player)){
			ball.y = player.y - player.height/2 - ball.height/2;
			// ball.vy = -ball.vy;
			score++;
			//middle
			if(ball.x < player.x - player.width/6 && ball.x > player.x + player.width/6){
				ball.vy = -35;
			}
			//right most sixth
			else if(ball.x > player.x + player.width/3){
				ball.vy = -35;
				ball.vx = ball.vx*5;
			}
			//2nd right most sixth
			else if(ball.x > player.x + player.height/6){
				ball.vy = -35;
				ball.vx = ball.vx;
			}
			//left most sixth
			else if(ball.x < player.x - player.height/3){
				ball.vy = -35;
				ball.vx = ball.vx*5;
			}
			//2nd left most sixth
			else if(ball.x < player.x - player.height/6){
				ball.vy = -35;
				ball.vx = -ball.vx*5;
			}
		}
		context.font = "16px Ariel";
		context.fillText(`score: ${score}`, 80, 25);

		
	player.drawRect();
    ball.drawCircle();
	
	context.save();
	context.strokeStyle = "black";
	context.beginPath();
	context.moveTo(ball.x, ball.y);
	context.lineTo(player.x, player.y);
	context.closePath();
	context.lineWidth = 1;
	context.stroke();
	context.restore();

	//context.drawImage(img, ball.x - ball.width/2, ball.y - ball.height/2, ball.width, ball.height);
}