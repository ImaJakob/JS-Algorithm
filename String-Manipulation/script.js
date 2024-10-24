// Reverse a String: Write a function that reverses a given string.
function reversedString () {
   const words = "All that glitters is not Gold";
   const arrayOfWords = words.split(" ");
   const reversedWords = arrayOfWords.reverse();
   return reversedWords;
}
console.log(reversedString());

function reversedStr(){
   let inputString = "Hello, World!";
   let reversedString = inputString.split("").reverse().join("");
   return reversedString;
}

console.log(reversedStr());

/* 
to reverse a string, you need to split, which is converting it into an array, 
and then you reverse it before joining it back
.*/


