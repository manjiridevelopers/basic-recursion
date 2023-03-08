let number = 5;
function fibonnaciFuncRecursion(number) {
  if (number == 0) return number;
  else if (number == 1) return number;
  else
    return (
      fibonnaciFuncRecursion(number - 1) + fibonnaciFuncRecursion(number - 2)
    );
}

for (let i = 0; i <= number; i++) {
  console.log(fibonnaciFuncRecursion(i));
  console.log("-----");
}

/* Space Optimized Fibonnaci */

function fibonnaciFunc(number) {
  let first = 0;
  let second = 1;

  console.log(first);
  console.log(second);

  for (let i = 2; i <= number; i++) {
    let sum = first + second;
    console.log(sum);
    first = second;
    second = sum;
  }
}

fibonnaciFunc(number);
