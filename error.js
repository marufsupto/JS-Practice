let x= 13;
try{
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x<5) throw "Too Low";
    if(x>10)throw "Too High";
}
catch(err){
    console.log(Error);
}
console.log("This is a test");