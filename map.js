const numbers = [45,5,46,33,67];
function myFunction(value){
    return value*2;
}
const newNumbers=numbers.map(myFunction);
console.log(newNumbers)