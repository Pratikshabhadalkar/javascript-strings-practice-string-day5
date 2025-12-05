// Task 1: Take a string and print its length.
console.log("pratiksha".length);

// Task 2: Convert a string to uppercase.
console.log("pratiksha".toUpperCase());

// Task 3: Return the 1st and last character of a string.
console.log("pratiksha".charAt(0));
console.log("pratiksha".charAt("pratiksha".length - 1));

// Task 4: Check if the word "Java" exists in "I love JavaScript".
console.log("I love JavaScript".includes("Java"));

// Task 5: Use slice() to extract "Script" from "JavaScript".
let str = "JavaScript";
console.log(str.slice(4, 10));  // Script

// Task 6: Count how many times "a" appears in a string.
function countA(str) {
  let count = 0;
  for (let char of str) {
    if (char === "a" || char === "A") {
      count++;
    }
  }
  return count;
}
console.log(countA("pratiksha"));

// Task 7: Split "apple,banana,mango" into an array.
let string = "apple,banana,mango";
console.log(string.split(","));  // Correct separator

// Task 8: Trim spaces from "   hello world   ".
let msg = "   hello world   ";
console.log(msg.trim());
