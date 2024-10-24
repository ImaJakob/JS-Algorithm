// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstWord() {
    const words = "I am a software developer in GomyCode.";
    const newWords = words.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    return newWords;
  }

  console.log(capitalizeFirstWord());

  /* Implement a function that capitalizes
  the first letter of each word in a sentence.*/


  let inputSentence = "hello world! it's a new day.";
  function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(capitalizeWords(inputSentence)); 