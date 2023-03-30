function solution(inputString) {
  let text = inputString.split("");
  let same = [];

  let half = Math.floor(text.length / 2);
  console.log(half);

  for (let i = 0; i < text.length; i++) {
    let element = text[i];
    text.splice(i, 1);

    if (text.includes(element)) {
      same.push(element);
      text.splice(text.indexOf(element), 1);
    }
    console.log(same, text);
  }

  console.log(text.length);
  if (same.length === half) return true;

  return false;
}
