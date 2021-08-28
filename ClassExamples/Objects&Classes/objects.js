//Object in JavaScript
var myPhone = {
    type: "iPhone",
    model: 12,
    year: 2020,
    color: "blue",
    price: 900,
    statement: function() {
        console.log('You have a ' + this.color + ' ' + this.type + ' ' + this.model + ' that was released in ' + this.year + ' and costed around $' + this.price);
    }
}

myPhone.statement();
console.log(myPhone)