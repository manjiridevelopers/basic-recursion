function factorialFunc(number) {
  if (number < 1) {
    return 1;
  }
  return number * factorialFunc(number - 1);
}

let factorial = factorialFunc(5);
console.log(factorial);
