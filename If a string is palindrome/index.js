const str = 'racecar';

const isPalindrome = (inStr) => {
    for (let i=0; i<inStr.lenght; i+=1) {
      if (inStr[i] !== inStr[inStr.length - 1 -i]) {
         return false;
      }
    }
    return true;
}

console.log(isPalindrome(str));