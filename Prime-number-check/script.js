/*
Prime Number Check: Create a function to check if a number is prime or not.
*/

function isPrime(num) {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) return false;
    
    // Loop from 2 up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If num is divisible by i, it's not prime
        if (num % i === 0) return false;
    }

    // If divisors were not found, num is prime
    return true;
}

console.log(isPrime(5));  
console.log(isPrime(10));


