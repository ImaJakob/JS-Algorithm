// Reverse a String: Write a function that reverses a given string.
function reversedString () {
   const words = "All that glitters is not Gold";
   const arrayOfWords = words.split(" ");
   const reversedWords = arrayOfWords.reverse();
   return reversedWords;
}
console.log(reversedString());