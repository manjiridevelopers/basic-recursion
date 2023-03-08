let count = 1;
(function printNumber1ToNTimes(number) {
  if (count > number) return;
  else console.log(count);
  count++;
  printNumber1ToNTimes(number);
})(10);
