export function drawTriangle(height) {
    if (height <= 0) {
        console.log("Height must be a positive integer.");
        return;
      }
    
      for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
          row += "$";
        }
        console.log(row);
      }
    }
// drawTriangle(5)