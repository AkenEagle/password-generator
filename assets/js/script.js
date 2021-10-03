// Assignment Code
const generateBtn = document.querySelector('#generate');

const generatePassword = function () {

  // 1) PROMPT PASSWORD LENGTH
  const passwordLength = promptPasswordLength();
  if (!passwordLength) return false;

  // 2) PROMPT IF INCLUDE LOWERCASE
  const includeLowercase = promptIncludeLowercase();

  // 3) PROMPT IF INCLUDE UPPERCASE

  // 4) PROMPT IF INCLUDE NUMERIC

  // 5) PROMPT IF INCLUDE SPECIAL CHARACTERS

  // 6) RETURN A PASSWORD FROM THE CRTIERIA ABOVE
}

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
