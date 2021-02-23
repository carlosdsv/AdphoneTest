const word = "aaaabbbbbcca";

function lettersCounter(word) {
  word = word.split("");
  const letterCounter = [];
  let index = 0;
  for (let i = 0; i < word.length; i++) {
    if (letterCounter.length === 0) {
      letterCounter[0] = [word[0], 1];
    } else if (word[i] === word[i - 1]) {
      letterCounter[index][1]++;
    } else {
      letterCounter.push([word[i], 1]);
      index++;
    }
  }
  return letterCounter;
}
lettersCounter(word);
