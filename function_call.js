const person = {
    fullname: function(){
        return this.firstName + "" +  this.lastName;
    }
}
const person1 = {
    firstName : "John",
    lastName : "Doe"
}
const person2 =  {
    firstName:"Maruf",
    lastName:"Supto"
}
console.log( person.fullname.call(person1));