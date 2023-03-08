function isPalindrome(string) {
  let len = string.length - 1;
  let start = 0;
  let end = len;
  let isPalindrome = true;

  while (start < end) {
    if (string[start] != string[end]) {
      isPalindrome = false;
      break;
    }
    start++;
    end--;
  }

  console.log(isPalindrome);
}

isPalindrome("aaabaaa");

/* ************************* */

function isPalindromeRecursive(string, i = 0) {
  let j = string.length - 1 - i;
  if (i >= j) return console.log(true);
  else if (string[i] == string[j]) isPalindromeRecursive(string, i + 1);
  else return console.log(false);
}

isPalindromeRecursive("aaabaaa");
