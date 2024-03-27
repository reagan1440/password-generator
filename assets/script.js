// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = getPasswordCriteria();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
}

// Function to prompt user for password criteria and generate password
function getPasswordCriteria() {
  var passwordLength = getPasswordLength();
  var characters = "";
  
  characters += getConfirmCharacters("lowercase", "abcdefghijklmnopqrstuvwxyz");
  characters += getConfirmCharacters("uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  characters += getConfirmCharacters("special", "!@#$%^&*()_-+={[}]:;'<,>.?/");
  characters += getConfirmCharacters("numeric", "0123456789");
  
  if (characters.length === 0) {
    alert("You must select at least one character type!");
  }
  
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// Function to prompt user for password length between 8-128 characters
function getPasswordLength() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  length = parseInt(length);
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length! Please enter a number between 8 and 128.");
    return getPasswordLength(); // Restart if invalid length
  }
  return length;
}

// Function to prompt user for character type inclusion
function getConfirmCharacters(typeName, characterSet) {
  if (confirm("Include " + typeName + " characters?")) {
    return characterSet;
  }
  return "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
