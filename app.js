function removeChars(str, charsToRemove) {
  for (let char of charsToRemove) {
    str = str.split(char).join("");
  }
  return str;
}

let inputString = prompt("Введите строку:");

let charsToRemoveInput = prompt(
  "Введите символы для удаления (без пробелов, например: 'ld'):"
);

let charsToRemove = charsToRemoveInput
  .trim()
  .split("")
  .filter((char) => char !== "");

let result = removeChars(inputString, charsToRemove);
console.log(result);
