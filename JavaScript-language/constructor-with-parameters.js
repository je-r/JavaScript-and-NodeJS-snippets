class Cheese 
{
    constructor(name)
    {
        this.name = name;
        console.log("Cheese class: in constructor, name="+name);
    }
    
    eat()
    {
        console.log("Cheese class: in eat()");
    }
}

var Scamorza = new Cheese("scamorza"); // runs code in constructor

console.log("Scamorza.name="+Scamorza.name);