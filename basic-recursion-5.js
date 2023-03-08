/* Parameterized Way */

(function printSumOfNNumbersFirst(number, sum) {
  if (number < 1) {
    console.log(sum);
    return;
  } else sum += number;
  printSumOfNNumbersFirst(number - 1, sum);
})(10, 0);

/* Functional Way */

function printSumOfNNumbersSecond(number) {
  if (number < 1) {
    return 0;
  }
  return number + printSumOfNNumbersSecond(number - 1);
}

let sum = printSumOfNNumbersSecond(10);
console.log(sum);
