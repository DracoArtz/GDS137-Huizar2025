var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var score = 0;
var danger = [];
var safe = [];
var frames = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");


player = new GameObject();
player.x = canvas.width/2;
player.y = canvas.height - 25;
player.width = 50;
player.height = 50;
player.color = "#ffff00";

timer = setInterval(animate, interval);
for(b = 0; b < 5; b++)
    {
        danger[b] = new GameObject();
        danger[b].x = Math.random() * 800;
        danger[b].y = Math.random() * 800 - 900;
        danger[b].width = 20;
        danger[b].height = 20;
        danger[b].color = "orange";
        danger[b].vy = Math.random() * 10 + 2;
    }  
for(s = 0; s < 5; s++)
    {
        safe[s] = new GameObject();
        safe[s].x = Math.random() * 800;
        safe[s].y = Math.random() * 800 - 900;
        safe[s].width = 20;
        safe[s].height = 20;
        safe[s].color = "blue";
        safe[s].vy = Math.random() * 10 + 2;
    }  
    function color()
    {
        player.color = '#ffff00';
    }
function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);
    if (a){
        player.x += -5;
    }
    if (d){
        player.x += 5;
    }

    for(b = 0; b < 5; b++)
        {
          if(danger[b].y > canvas.height)
          {
            danger[b].y = Math.random() * 200 - 300;
            danger[b].x = Math.random() * 800;
            danger[b].vy = Math.random() * 10 + 2;

          }
          if(danger[b].collision(player))
            {
                player.color = 'red';
                score = 0;
                for(b = 0; b < 5; b++) danger[b].y = Math.random() * 200 - 300;
                for(s = 0; s < 5; s++)safe[s].y = Math.random() * 200 - 300;
                setTimeout(color, 500); 
            }

        }  
    for(s = 0; s < 5; s++)
        {
            if(safe[s].y > canvas.height)
                {
                  safe[s].y = Math.random() * 200 - 300;
                  safe[s].x = Math.random() * 800;
                  safe[s].vy = Math.random() * 10 + 2;
                }
            if(safe[s].collision(player))
              {
                safe[s].y = Math.random() * 200 - 300;
                  player.color = 'green';
                  score ++;
                setTimeout(color, 500);
              }

        }  
   
    if(player.y > canvas.height - player.height/2 - 25)
        {
            player.y = canvas.height - player.height/2 - 25;	
        }
    if(player.x > canvas.width - player.height/2)
        {
            player.x = canvas.width - player.width/2;	
        }
    if(player.x < 0 + player.width/2)
        {
            player.x = 0 + player.width/2;	
        }

        for(b = 0; b < 5; b++)
            {
                danger[b].move();
                danger[b].drawCircle();
            }  
        for(s = 0; s < 5; s++)
            {
                safe[s].move();
                safe[s].drawRect();
            }  
	context.font = "bold 30px Arial";
	context.fillText(`Score: ${score}`, 100, 75);
	player.drawRect();
}