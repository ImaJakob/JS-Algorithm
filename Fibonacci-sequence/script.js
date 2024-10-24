/* Fibonacci Sequence: Implement a function to generate the Fibonacci sequence
 up to a given number of terms. (search on the net )*/

 function generateFibonacci(n) {
    if (n <= 0) return []; // If n is 0 or negative, return an empty array
    if (n === 1) return [0]; // If n is 1, return the first number of the sequence

    let fib = [0, 1]; // Start the sequence with the first two numbers

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]); // Add the next Fibonacci number
    }

    return fib; // Return the Fibonacci sequence with n terms
}


console.log(generateFibonacci(10)); 
