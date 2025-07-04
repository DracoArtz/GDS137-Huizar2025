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
	this.color = "red";
	this.stroke = "black";

	//This draws the player to the screen
	this.drawRect = function()
	{
		ctx.save();
			ctx.fillStyle = this.color;
			ctx.translate(this.x, this.y);
			ctx.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		ctx.restore();
		return this;
	}		
	this.strokeRect = function()
	{
		ctx.save();
		    ctx.strokeStyle = this.stroke;
		    ctx.translate(this.x, this.y);
		    ctx.strokeRect((-this.width/2), (-this.height/2), this.width, this.height);
		ctx.restore();
		return this;
		
	}	
	this.drawCircle = function()
	{
		ctx.save();
			ctx.fillStyle = this.color;
			ctx.translate(this.x, this.y);
			ctx.beginPath();
			ctx.arc(0, 0, this.width/2, 0, 360 * Math.PI);
			ctx.fill();
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
}


