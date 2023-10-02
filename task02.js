export function arraysAreEqual(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Check if each element of arr1 is equal to the corresponding element of arr2
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    // If we reach this point, the arrays are equal
    return true;
  }
 // console.log(arraysAreEqual([1, 2], [1, 4]) ? 'True' : 'False');
  