class Phone{
    constructor(type, model, year, color, price){
        this.type = type;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    statement(){
        console.log('You have a ' + this.color + ' ' + this.type + ' ' + this.model + ' that was released in ' + this.year + ' and costed around $' + this.price);
    }
} 

class XL extends Phone{
    constructor(type, model, year, color, price){
        super(type, model, year, color, price)
        this.size = 'Huge';
    }

    statement(){
        console.log('This phone is ' + this.size)
    }
}


var newPhone = new Phone("iPhone", 12, 2020, "blue", 900);
var newPhone2 = new Phone('Galaxy', 'S6', 2016, 'black', 700)
console.log(newPhone)
newPhone.statement()
newPhone2.statement()

var xlPhone = new XL('iPhone', 11, 2019, 'white', 800)
xlPhone.statement();

//--------------------------------------------------------

class Player{
    constructor(name, age, team, position){
        this.name = name;
        this.age = age;
        this.team = team;
        this.position = position;
    }

    statement(){
        console.log(this.name + ' is a ' + this.age + ' year old ' + this.position + ' who plays for the ' + this.team)
    }
}

class AllStar extends Player{
    constructor(name, age, team, position, numberoftimes){
        super(name, age, team, position)
        this.numberoftimes = numberoftimes;
    }

    statement(){
        console.log(this.name + ' is a ' + this.age + ' year old ' + this.position + ' who plays for the ' + this.team + ' and has been an all star ' + this.numberoftimes + ' times')
    }
}


var Lebron = new AllStar('Lebron James', 100, 'Lakers', 'Small Forward', 100)
Lebron.statement()