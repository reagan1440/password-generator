// Assignment Code

const number = "0123456789";
const specialChar = "!@#$%^&*()_-+={[}]:;'<,>.?/*";
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  var passLength = PasswordLength();
  var passwordCharacters = BuildPasswordCharacterArray();

  var genPassword = "";
  for (var i = 0; i < passLength; i++) {
    genPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return genPassword;
}

var generateBtn = document.querySelector("#generate");
console.log (generateBtn);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function PasswordLength(){
  var passLength=0;
  var validate=false;

  while (!validate) {
    passLength = parseInt(window.prompt("choose your password length from 8-128 charcaters."));

    if(passLength >=8 && passLength <= 128){
      validate=true;
      return passLength;

    }
    else {
      window.alert("Your password must be between 8-128 characters.");
    }
  }
}

function BuildPasswordCharacterArray() {
  var passwordCharacters = "";
  var confirmLowerCase = confirm("click OK for lowercase characters to be included");
  var confirmUpperCase = confirm("click OK for uppercase characters to be included");
  var confirmSpecialCharacter = confirm("click OK for special characters to be included");
  var confirmNumericCharacter = confirm("click OK for numeric characters to be included");


  if (confirmLowerCase) {
    passwordCharacters += lower;
  }
  if (confirmUpperCase) {
    passwordCharacters += upper;
  }
  if (confirmSpecialCharacter) {
    passwordCharacters += specialChar;
  }
  if (confirmNumericCharacter) {
    passwordCharacters += number;
  }

  if (passwordCharacters.length == 0) {
    alert("You must select at least one character type!");
    passwordCharacters = BuildPasswordCharacterArray(); // Call recursively to ensure at least one character type is selected
  }

  return passwordCharacters;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
