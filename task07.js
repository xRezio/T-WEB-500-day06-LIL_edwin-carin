// task07.js

// Function to filter an array based on a test function
export function arrayFiltering(array, test) {
  
    var filteredArray = [];
  
    for (var i = 0; i < array.length; i++) {
      if (test(array[i])) {
        filteredArray.push(array[i]);
      }
    }
  
    return filteredArray;
  }
  