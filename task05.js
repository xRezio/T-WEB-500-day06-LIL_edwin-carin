// task05.js

// Function to generate a range of numbers
function range(start, end, step) {
    step = typeof step !== 'undefined' ? step : 1;
  
    if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
      console.log("Invalid input. Please provide three integers.");
      return [];
    }
  
    var result = [];
    var current = start;
  
    if (step === 0) {
      console.log("Step cannot be 0.");
      return [];
    }
  
    if (start <= end) {
      while (current <= end) {
        result.push(current);
        current += step;
      }
    } else {
      while (current >= end) {
        result.push(current);
        current += step;
      }
    }
  
    return result;
  }
  
// console.log(range(4, 1, -1))

  // Export the function
  module.exports = range;
  