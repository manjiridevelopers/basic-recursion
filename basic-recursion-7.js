function reverseArray(array) {
  let arr = array;
  let arrLen = array.length - 1;

  for (let i = 0; i < parseInt(arrLen / 2); i++) {
    let left = arr[i];
    arr[i] = arr[arrLen - i];
    arr[arrLen - i] = left;
  }

  console.log(arr);
}

reverseArray([1, 2, 3, 4, 5, 6, 7]);

/* ************************************ */
let array = [1, 2, 3, 4, 5, 6, 7];

function swap(arr, el1, el2) {
  let temp = arr[el1];
  arr[el1] = arr[el2];
  arr[el2] = temp;

  return arr;
}

(function reverseArrayRecursive(array, start, end) {
  let arr = array;
  if (start < end) arr = swap(array, start, end);
  else {
    return console.log(arr);
  }
  reverseArrayRecursive(arr, start + 1, end - 1);
})(array, 0, array.length - 1);
