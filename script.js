function solution(inputString) {
  let charCount = {};

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString.charAt(i);
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;

  for (let count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}