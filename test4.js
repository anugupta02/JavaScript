var myString = 'I\'m a "fun ninja" String';

console.log(myString);

console.log(myString.length);

console.log(myString.indexOf("String"));

if(myString.indexOf("ninja") === -1){

    console.log("the world ninja isn't in the string");
}

else{

console.log("the word ninja starts at position: " + myString.indexOf("ninja"));

}


var string1 = "Abc";
var string2 = "ABC";
var string3 = "Bcd";

console.log(string1.toLowerCase() === string2.toLowerCase());

console.log(string1 < string3);