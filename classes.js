class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    play(){
        console.log(`${this.name} is playing`);
    }
}
const person1 = new person("Supto", 23);
const person2 = new person("Tamim", 25);
person1.play();
person2.play();