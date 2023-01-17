// defining global variables
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

// defining generatepassword function
function generatePassword() {
  // defining variables within the scope of this function
  var password = ''
  var tempCharacters = ''

  // Setting a prompt for the password length variable
  var pwLength = prompt("Between 8 and 128 how many charaters would you like your password to contain?")

  // If your password is less than 8 or more than 128 you will be prompted to choose between 8 and 128, then asked again.
  while (pwLength < 8 || pwLength > 128) {
    alert('Your password must be between 8 and 128 characters')
    pwLength = prompt("Between 8 and 128 how many charaters would you like your password to contain?")
  }

  // It will ask if you want uppercase letters if yes is the answer we call on the uppercase variable same goes for lowercase, numbers, and special characters.
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

  // If you choose nothing it will alert you that you need to choose one and re ask.
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

  // This is setting it up so that we can generate the random password by using a for loop to keep adding a random character until the variable is no longer less than the pwlength
  for (var i = 0; i < pwLength; i++) {
    password += tempCharacters.charAt(Math.floor(Math.random() * tempCharacters.length))
  }

  // This is returning out a password back to the user
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
