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
  var tempCharacters = ''

  var pwLength = prompt("Between 8 and 128 how many charaters would you like your password to contain?")

  while (pwLength < 8 || pwLength > 128) {
    alert('Your password must be between 8 and 128 characters')
    pwLength = prompt("Between 8 and 128 how many charaters would you like your password to contain?")
  }

  var wantsUp = confirm("do you want uppercase letters?")
  if (wantsUp) {
    tempCharacters += uppercase
    console.log('tempCharacters = ', tempCharacters)
  }

  var wantsLower = confirm("do you want lowercase letters?")
  if (wantsLower) {
    tempCharacters += lowercase
    console.log('tempCharacters = ', tempCharacters)
  }

  var wantsNumber = confirm("Do you want numbers?")
  if (wantsNumber) {
    tempCharacters += numbers
    console.log('tempCharacters = ', tempCharacters)
  }

  var wantsSpecial = confirm("Do you want special characters?")
  if (wantsSpecial) {
    tempCharacters += specialChars
    console.log('temoCharacters = ', tempCharacters)
  }

  while (!wantsUp && !wantsLower && !wantsNumber && !wantsSpecial) {
    alert('You must choose at least one character')

    wantsUp = confirm("do you want uppercase letters?")
    if (wantsUp) {
      tempCharacters += uppercase
      console.log('tempCharacters = ', tempCharacters)
    }

    wantsLower = confirm("do you want lowercase letters?")
    if (wantsLower) {
      tempCharacters += lowercase
      console.log('tempCharacters = ', tempCharacters)
    }

    wantsNumber = confirm("Do you want numbers?")
    if (wantsNumber) {
      tempCharacters += numbers
      console.log('tempCharacters = ', tempCharacters)
    }

    wantsSpecial = confirm("Do you want special characters?")
    if (wantsSpecial) {
      tempCharacters += specialChars
      console.log('temoCharacters = ', tempCharacters)
    }
  }

  for (var i = 0; i < pwLength; i++) {
    password += tempCharacters.charAt(Math.floor(Math.random() * tempCharacters.length))
  }

  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
