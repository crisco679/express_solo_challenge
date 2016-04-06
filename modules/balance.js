var randomThing = require("./random.js");
var usdThing = require("./usd.js");

function getNumbers(){
  return usdThing(randomThing(100,1000000));

}

function getWords() {
  return "Account Balance: \n";

}
exports.numbers=getNumbers;
exports.words=getWords;


// money = usdThing;
//
// console.log(money);
// console.log(randomNumber());
// This is where we left off
