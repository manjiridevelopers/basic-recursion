(function printNumberNTo1Times(number) {
  if (number === 0) return;
  else console.log(number);
  printNumberNTo1Times(number - 1);
})(10);
