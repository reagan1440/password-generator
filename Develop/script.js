// Assignment Code

const number = "0123456789";
const specialChar = "!@#$%^&*()_-+={[}]:;'<,>.?/*";
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  var newGenPassword = function (n, str) {
    var genPassword = "";
    for (var i=0; i<n;i++) {
      genPasswordpassword += str[Math.floor(Math.random() * str.length)];
    }
    return genPassword;
  }
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

  while (!valid) {
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
