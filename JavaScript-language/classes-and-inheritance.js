//

class Cheese 
{
    constructor()
    {
        console.log("Cheese class: in constructor");
    }
    
    eat()
    {
        console.log("Cheese class: in eat()");
    }
}

var Scamorza = new Cheese(); // runs code in constructor

class Food {
    constructor()
    {
        console.log("Food class: in constructor");
    }
    
    eat()
    {
        console.log("Food class: in eat()");
    }
}

class BetterCheese extends Food
{
    constructor()
    {
        super();
    }
    
    eat()
    {
        console.log("BetterCheese class: in eat()");
    }
}

var Esrom = new BetterCheese(); // runs code in constructor



