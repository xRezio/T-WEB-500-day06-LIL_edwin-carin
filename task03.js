// task03.js

// Function to count the number of uppercase 'G' characters in a string
export function countGs(str) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'G') {
        count++;
      }
    }
  
    return count;
  }
  
  //console.log(countGs("GGGGGGGGGGGGG"));

  