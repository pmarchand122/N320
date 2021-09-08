

class RainDrop{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = 1 + Math.random() * 10;
    }

    update(){
        fill(140,190,250)
        this.speed = this.speed;
        this.y = this.y + this.speed;
        this.y++;
        circle(this.x, this.y, this.radius)
    }
    
}


class Ground{
    constructor(x, y, h, w, color){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.color = color;
    }

    update(){
        fill(140,190,this.color)
        rect(this.x, this.y, this.w, this.h)
    }
}

var blue = 12;
var ground = new Ground(0, 400, 200, 800, blue);



var rainDrops = []
var numberOfDrops = 10;

for(var i=0; i<numberOfDrops; i++){
    var xPos = 0 + Math.random() * 1000
    rainDrops[i] = new RainDrop(xPos, 0, 20);
}


function setup(){
    createCanvas(800, 600)
}


function draw(){
    background(34,34,34)


    for(var i=0; i < rainDrops.length; i++){
        rainDrops[i].update();

        if(rainDrops[i].y >= ground.y){
            rainDrops[i].y = 0;
            blue++;
            console.log(blue)
        }
    }


    
}