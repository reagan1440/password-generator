// Assignment Code

const num = "0123456789";
const char = "!@#$%^&*()_-+={[}]:;'<,>.?/*";
const lowecase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function passPrompt() {
  var pLength = pLength();
  var passwordText = document.querySelector("#pLength");

  passwordText.value = pLength;
//generate pLength
  var genPassword = "";
  for (var i = 0; i < pLength; i++) {
    genPassword += passwordText[Math.floor(Math.random() * passwordText.length)];
  }
  return genPassword;
}

var generateBtn = document.querySelector("#generate");
console.log (generateBtn);
// Write pLength to the #pLength input
function passPrompt() {
  var pLength = passPrompt();
  var passwordText = document.querySelector("#pLength");

  passwordText.value = pLength;

}

function pLength(){
  var pLength=0;
  var validate=false;

  while (!validate) {
    pLength = parseInt(window.prompt("choose your pLength length from 8-128 charcaters."));

    if(pLength >=8 && pLength <= 128){
      validate=true;
      return pLength;

    }
    else {
      window.alert("Your pLength must be between 8-128 characters.");
    }
  }
}

function BuildPasswordCharacterArray() {
  var passwordText = "";
  var confirmLowerCase = confirm("click OK for lowercase characters to be included");
  var confirmUpperCase = confirm("click OK for uppercase characters to be included");
  var confirmSpecialCharacter = confirm("click OK for special characters to be included");
  var confirmNumericCharacter = confirm("click OK for numeric characters to be included");


  if (confirmLowerCase) {
    passwordText += lowecase;
  }
  if (confirmUpperCase) {
    passwordText += uppercase;
  }
  if (confirmSpecialCharacter) {
    passwordText += char;
  }
  if (confirmNumericCharacter) {
    passwordText += num;
  }

  if (passwordText.length == 0) {
    alert("You must select at least one character type!");
    passwordText = BuildPasswordCharacterArray(); // Call recursively to ensure at least one character type is selected
  }

  return passwordText;
}


// Add event listener to generate button
generateBtn.addEventListener("click", passPrompt);