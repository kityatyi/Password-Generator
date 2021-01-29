// password generator by web dev simplified

const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const form = document.getElementById("password-gen-form");
const passwordDisplay = document.getElementById("_password-display");

const uppercase_char_codes = arrayFromLoToHi(65, 90);
const lowercase_char_codes = arrayFromLoToHi(97, 122);
const num_char_codes = arrayFromLoToHi(48, 57);
const symbol_char_codes = arrayFromLoToHi(33, 47)
  .concat(arrayFromLoToHi(58, 64))
  .concat(arrayFromLoToHi(91, 96))
  .concat(arrayFromLoToHi(123, 126));

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", e => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumbersElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  passwordDisplay.innerText = password;
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowercase_char_codes;

  if (includeUppercase) {
    charCodes = charCodes.concat(uppercase_char_codes);
  }
  if (includeNumbers) {
    charCodes = charCodes.concat(num_char_codes);
  }
  if (includeSymbols) {
    charCodes = charCodes.concat(symbol_char_codes);
  }

  const passwordCharacters = [];

  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }

  return passwordCharacters.join("");
}

function arrayFromLoToHi(lo, hi) {
  const array = [];
  for (let i = lo; i <= hi; i++) {
    array.push(i);
  }

  return array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
