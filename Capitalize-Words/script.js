// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalize() {
    const words = "I am a software developer in GomyCode.";
    const newWords = words.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    return newWords;
  }

  console.log(capitalize());