// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var specialChars = "!@#$%^&*()_+="

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

function generatePassword() {
  var password = ''

  var pwLength = prompt("Between 8 and 128 how many charaters would you like your password to contain?")

  while (pwLength < 8 || pwLength > 128) {
    alert('Your password must be between 8 and 128 characters')
    pwLength = prompt("Between 8 and 128 how many charaters would you like your password to contain?")
  }

  

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
