var shopBack = new GameObject();
shopBack.width = 600;
shopBack.height = 600;
shopBack.x = canvas.width/2;
shopBack.y = canvas.height/2;
shopBack.color = '#9dcbec';

var exit = new GameObject();
exit.width = 80;
exit.height = 60;
exit.x = shopBack.x + shopBack.width/2 - exit.width;
exit.y = shopBack.y + shopBack.height/2 - exit.height;
exit.color = 'red';

var cornButton = new GameObject();
cornButton.width = 80;
cornButton.height = 60;
cornButton.x = shopBack.x - shopBack.width/2 + cornButton.width;
cornButton.y = shopBack.y - shopBack.height/2 + cornButton.height;
cornButton.color = 'red';

function shop()
{


    //close shop
    if(mouse.pressed && mouseOver(cornButton) && corn == false && coins >= 200)
		{
			corn = true;
            coins -= 200;
		}
    if(mouse.pressed && mouseOver(exit))
		{
			shopOpen = false;
		}
    if(corn == true)
        {
            cornButton.color = 'gray';
        }

    shopBack.drawRect().strokeRect();
    exit.drawRect().strokeRect();
    context.fillText(`Exit`, exit.x - 15, exit.y + 5);

    cornButton.drawRect().strokeRect();
    context.fillText(`Buy Corn`, cornButton.x - cornButton.width/2 + 5, cornButton.y);
    context.fillText(`200 Coins`, cornButton.x - cornButton.width/2 + 5, cornButton.y + 20);
}