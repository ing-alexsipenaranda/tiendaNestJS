const myName ="william";
const myAge=21;
const suma = (a:number, b :number)=>{
    return a + b;
}

suma(12,22);
class Persona {
    age;
    name;

    constructor(age:number,name:string){
    this.age=age;
    this.name=name;
    }


    getSummary(){
        return `my name is ${this.name} and my age is ${this.age}`;
    }
}

const william = new Persona (21,"william");
console.log(william.getSummary());

