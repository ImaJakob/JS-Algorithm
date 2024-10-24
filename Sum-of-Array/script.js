//   Sum of array: Create a function that calculates the sum of all elements in an array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

function sumArray(arr) {
   for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
    return sum;
}
console.log(sumArray(arr)); 