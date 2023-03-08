let count = 0;
(function printNameNTimes(name, number) {
  if (count === number) return;
  else console.log(name);
  count++;
  printNameNTimes(name, number);
})("Gobind Jha", 10);
