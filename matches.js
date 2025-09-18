const sentence = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical maner.if you are just getting started in web development,learn with sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer."
const matches = sentence.match(/sumit/gi);
const occurances = matches.length;
let position = sentence.search(/sumits/i);
position = position>=0 ? position: "not found!";
console.log(matches);
console.log(occurances);
console.log(position);