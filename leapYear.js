const isLeapYear=function(year){
    if((year % 400 === 0) || (year % 4 === 0 && year %100 !== 0)){
        console.log(`${year} is a Leap year`);}
        else{
            console.log(`${year} is not a Leap Year`);
        }
}
isLeapYear(2026);