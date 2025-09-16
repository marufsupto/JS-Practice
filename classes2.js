class person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    play(status){
        console.log(`${this.name} aged ${this.age} is playing ${status}`);
    }
}
const person1 = new person("Supto",25);
const person2 = new person("Ruman",24);
person1.play("Well");
person2.play("bad");
