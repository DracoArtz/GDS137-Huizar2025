var keys = [];

document.addEventListener("keydown", (e)=>keys [e.key] =true);
document.addEventListener("keyup", (e)=>keys[e.key]=false);


var mouse={x:0,y:0, world:{x:0,y:0},pressed:false}

canvas.addEventListener(`mousemove`, (e)=>{
   var rect = canvas.getBoundingClientRect()
   mouse.x= e.clientX - rect.left
   mouse.y= e.clientY - rect.top
   //console.log(mouse.x)
})

canvas.addEventListener(`mousedown`, (e)=>{mouse.pressed=true;})
canvas.addEventListener(`mouseup`, (e)=>{mouse.pressed=false;})