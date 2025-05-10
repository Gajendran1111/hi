// class constuctor 

class car {
   constructor(color,price,speed,brand){
    this.color=color;
    this.price=price;
    this.speed=speed;
    this.brand=brand;

   }
   out(){console.log(`I Need ${this.color} Color Car \nIts Around ${this.price}\nIt Run ${this.speed} The High Way\nI Fix ${this.brand} Car`)}
}
const js = new car("Silver","25lakhs","214kmph","BMW");
js.out();















