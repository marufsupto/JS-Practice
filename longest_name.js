function longestString(names){
    longestWord = '';
    for(name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }
    return[longestWord,names.indexOf(longestWord)];
 };
 console.log(longestString(['Abdullah Al Maruf Supto','Akash','Saad','daiyan']));