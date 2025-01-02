function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero"; // Return a user-friendly message
  }
  return a / b;
}

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 6)); // 24
console.log(divide(10, 2)); // 5
console.log(divide(10,0)); //Cannot divide by zero