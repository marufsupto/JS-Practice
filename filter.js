const numbers = [1,4,5,8,3,2,9];
const duplicates = numbers.filter((value,index,array)=>{
    return array.indexOf(value) !== index;
});
console.log(duplicates);