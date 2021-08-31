

class RainDrop{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = 10 + Math.random() * 10;
    }

    update(){
        fill(140,190,250)
        this.y = this.y + this.speed;
        circle(this.x, this.y, this.radius)
    }
    
}


class Ground{
    constructor(x, y, h, w, blue){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.blue = blue;
    }

    rect(){
        //paints ground onto the canvas and fills it with the blue property
        fill(140,190,this.blue)
        rect(this.x, this.y, this.w, this.h)
    }

    update(){
        //Adds 1 to blue
        this.blue++;
    }
}


//Arrow to store RainDrop objects
var rainDrops = []

//Number of drops that will be displayed on the screen
var numberOfDrops = 10;

//Ground object which is starting with 5% blue
var ground = new Ground(0, 400, 200, 800, 12);

//Loop that creates and adds RainDrop objects to rainDrops array with a random x axis
for(var i=0; i<numberOfDrops; i++){
    var xPos = 0 + Math.random() * 1000
    rainDrops[i] = new RainDrop(xPos, 0, 20);
}




function setup(){
    createCanvas(800, 600)
}



function draw(){
    background(34,34,34)

    //Go through rainDrop array and call update function.

    //If a raindrop reachers 400px on the y-axis, the y value is reset to zero and the x value is randomized again simulating rain

    //We also call the update function from the Ground variable that was created earlier, this just adds 1 to the blue property of the object

    //The for loop only targets the blue of the rectangle, which allows the rect() function to keep the ground object drawn on the canvas.

    rainDrops.forEach(rainDrop => {
        rainDrop.update();
        if(rainDrop.y >= 400){
            rainDrop.y = 0;
            rainDrop.x = 0 + Math.random() * 1000;
            ground.update();
            console.log(ground.blue)
        }
    })
    
    ground.rect();

}