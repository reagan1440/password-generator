// Assignment Code
var generateBtn = document.querySelector("#generate");

const number = "0123456789";
const specialChar = "!@#$%^&*()_-+={[}]:;'<,>.?/*";
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  var newPassword = function (n, str) {
    var password = "";
    for (var i=0; i<n;i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }
    return password;
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
