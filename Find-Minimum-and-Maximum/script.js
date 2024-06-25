// find maximun and minimum: Write functions to find the maximum and minimum value in an array of numbers.
function minMax() {
    const arr = [1, 2, 4, 5, 8, 10, 28, 40];
    return [Math.min(...arr), Math.max(...arr)];
  }
  console.log(minMax());