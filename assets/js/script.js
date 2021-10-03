// Assignment Code
const generateBtn = document.querySelector('#generate');

// Characters includable in a password
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const numeric = "0123456789"
const special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

const generatePassword = function () {

  // 1) PROMPT PASSWORD LENGTH
  const passwordLength = promptPasswordLength();
  if (!passwordLength) return false;

  // 2) PROMPT IF INCLUDE LOWERCASE
  const includeLowercase = promptIncludeLowercase();

  // 3) PROMPT IF INCLUDE UPPERCASE
  const includeUppercase = promptIncludeUppercase();

  // 4) PROMPT IF INCLUDE NUMERIC
  const includeNumeric = promptIncludeNumeric();

  // 5) PROMPT IF INCLUDE SPECIAL CHARACTERS
  const includeSpecial = promptIncludeSpecial();

  // 6) CHECK IF AT LEAST ONE CHARACTER TYPE WAS SELECTED
  if(!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('You have to select AT LEAST 1 CHARACTER TYPE when prompted lowercase, uppercase, numeric or special!')
    return false;
  }

  // 7) GENERATE PASSWORD

  // Empty password at first
  let password = "";

  // Which character types to include in the password
  let arrayCharacters = [];

  if (includeLowercase) {
    arrayCharacters.push(alphabet.split(""))
  }

  if (includeUppercase) {
    arrayCharacters.push(alphabet.toUpperCase().split(""))
  }

  if (includeNumeric) {
    arrayCharacters.push(numeric.split(""))
  }

  if (includeSpecial) {
    arrayCharacters.push(special.split(""))
  }

  // Randomly assign characters in the password string
  for (let i = 0; i < passwordLength; i++) {
    password += i;
  }

  // Password returned from the whole function
  return password;
}

// Prompt functions

const promptPasswordLength = function () {
  const passwordLength = prompt('Choose a password length between 8 and 128.')
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('You have to choose a passwrod length between 8 and 128!')
    return false;
  } else {
    return passwordLength;
  }
}

const promptIncludeLowercase = function () {
  const lowerCase = confirm('Do you want to include lowercase characters?\nChoose OK or Cancel');
  return lowerCase;
}

const promptIncludeUppercase = function () {
  const upperCase = confirm('Do you want to include UPPERCASE characters?\nChoose OK or Cancel');
  return upperCase;
}

const promptIncludeNumeric = function () {
  const numeric = confirm('Do you want to include NUMERIC characters?\nChoose OK or Cancel');
  return numeric;
}

const promptIncludeSpecial = function () {
  const special = confirm('Do you want to include SPECIAL characters?\nChoose OK or Cancel');
  return special;
}

// Write password to the #password input
const writePassword = function () {
  const password = generatePassword();
  // Only change the text if the password was actually generated
  if (password) {
    const passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
