function person(first,last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
        return this.firstName + "" + this.lastName;
    }
}
const supto = new person('Supto', 'Mondol');
const ruman = new person('Syed','Ruman');
const imran = new person('Imran','Tarafder');

person.prototype.country = 'Bangladesh';
console.dir(person);