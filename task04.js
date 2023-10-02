// task04.js

// Function to implement FizzBuzz
export function fizzBuzz(number) {
    if (typeof number !== 'number' || isNaN(number) || number <= 0) {
      console.log("Invalid input. Please provide a positive number.");
      return;
    }
  
    let result = '';
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += 'FizzBuzz';
      } else if (i % 3 === 0) {
        result += 'Fizz';
      } else if (i % 5 === 0) {
        result += 'Buzz';
      } else {
        result += i;
      }
  
      if (i < number) {
        result += ', ';
      }
    }
  
    console.log(result);
  }
fizzBuzz(20)
  