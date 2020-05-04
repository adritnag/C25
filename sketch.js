var drops =  []
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvexyz";

function setup()
{   
    createCanvas(2000,600);
    frameRate(25);
    
    for(var i=0;i<150;i++)
    {
        drops.push(new Drop());
    }
}

function draw()
{

    background(0);
    for(var i=0;i<drops.length;i++)
    {
        drops[i].draw();
        drops[i].update();
    }
}
