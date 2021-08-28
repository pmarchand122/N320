let circleX = 10;

class Circle{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 2;
    }

    update(){
        this.speed = this.speed + .1
        this.y = this.y + this.speed
        this.y++;
        fill(this.color)
        circle(this.x, this.y, this.radius)
    }

}

var newCircles = [];
for(var i=0; i<10; i++){
    var x = 40 * i
    newCircles[i] = new Circle(x, 10, 100, [100,79, 12])
}

var newCircle = new Circle(100, 10, 100, [34,32,79])

function setup(){
    createCanvas(400, 300)
}

function draw(){
    background(34,32,79)
    newCircles.forEach(circle => {
        circle.update()
    });

}

