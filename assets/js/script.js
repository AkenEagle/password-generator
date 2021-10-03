// Assignment Code
const generateBtn = document.querySelector('#generate');

// Characters includable in a password
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const numeric = "0123456789"
const special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

const generatePassword = function () {

  // Prompt password length
  const passwordLength = promptPasswordLength();
  if (!passwordLength) return false;

  // Prompt if include lowercase characters
  const includeLowercase = promptIncludeLowercase();

  // Prompt if include uppercase characters
  const includeUppercase = promptIncludeUppercase();

  // Prompt if include numberic characters
  const includeNumeric = promptIncludeNumeric();

  // Prompt if include special characters
  const includeSpecial = promptIncludeSpecial();

  // Check if at least one character type was selected
  if(!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('You have to select AT LEAST 1 CHARACTER TYPE when prompted lowercase, uppercase, numeric or special!')
    return false;
  }

  // Generate password

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
    // Get random array from arrayCharacters
    const randomArray = arrayCharacters[Math.floor(Math.random()*arrayCharacters.length)];

    // Get random character from the previous random array
    const randomChar = randomArray[Math.floor(Math.random()*randomArray.length)];

    // Add this random character to the password string
    password += randomChar
  }

  // Password returned from the whole function
  alert('Your password has been generated!')
  return password;
}

// Prompt functions

const promptPasswordLength = function () {
  const passwordLength = prompt('Choose a password length between 8 and 128.\nType a number between 8 and 128 below.')
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert('You have to choose a password length between 8 and 128!')
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
