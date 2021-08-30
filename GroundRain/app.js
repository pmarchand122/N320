

class RainDrop{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = 1 + Math.random() * 20;
    }

    update(){
        fill(140,190,250)
        this.speed = this.speed + .06;
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



var rainDrops = []
var numberOfDrops = 250;

for(var i=0; i<numberOfDrops; i++){
    var xPos = 0 + Math.random() * 1000
    rainDrops[i] = new RainDrop(xPos, 0, 20);
}


function setup(){
    createCanvas(800, 600)
}

function draw(){
    background(34,34,34)
    
    var blue = 12;

    for(var i=0; i < rainDrops.length; i++){
        
        var ground = new Ground(0, 400, 200, 800, blue);


        rainDrops[i].update();
        if(rainDrops[i].y >= 400){
            blue+=1;
            
            console.log(blue)
            ground.update();
        }
    }
    
    
}