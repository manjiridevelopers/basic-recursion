let count = 0;
(function printNumberNTimes(number) {
  if (count === number) return;
  else console.log(number);
  count++;
  printNumberNTimes(number);
})(10);
