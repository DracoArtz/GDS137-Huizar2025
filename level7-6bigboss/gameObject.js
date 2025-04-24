// JavaScript Document
function GameObject()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 100;
	this.height = 100;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	this.force = 0;
	this.friction = 0;

	//player's color
	this.color = "#ff0000";
	this.stroke = "black";

	//if something is selected
	this.select = false;
	this.seeded = false;

	seedAmt = 9;
	this.seeds = [];
	this.seedNum = 0;

	this.frames = 0;
	//This draws the player to the screen
	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		return this;
	}	
	this.drawSeed = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height), this.width, this.height);
		context.restore();
		return this;
	}	
	this.strokeRect = function()
	{
		context.save();
			context.strokeStyle = this.stroke;
			context.translate(this.x, this.y);
			context.strokeRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		return this;
		
	}	
	this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.beginPath();
			context.arc(0, 0, this.width/2, 0, 360 * Math.PI);
			context.fill();
		context.restore();
		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}

	this.left = function() 
	{
		return this.x - this.width/2;
	}
	this.right = function() 
	{
		return this.x + this.width/2;
	}
	
	this.top = function() 
	{
		return this.y - this.height/2;
	}
	this.bottom = function() 
	{
		return this.y + this.height/2;
	}

	this.collision = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top() < obj.bottom() &&
		   this.bottom() > obj.top())
		{
			return true
		}
		return false;
	}

	this.sTop = function() 
	{
		return this.y - this.height;
	}
	this.sBottom = function() 
	{
		return this.y;
	}

	this.seedCollision = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.sTop() < obj.bottom() &&
		   this.sBottom() > obj.top())
		{
			return true
		}
		return false;
	}
	
}


