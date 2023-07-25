// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt(
    "Enter the length of the password (between 8 and 128 characters):"
  );

  // Validate password length
  if (
    !passwordLength ||
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return null;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecialChars
  ) {
    alert("You must select at least one character type.");
    return null;
  }

  return {
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecialChars,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();

  if (!options) {
    return ""; // If user cancels or doesn't provide valid options, return an empty string
  }

  var availableChars = "";

  if (options.includeLowercase) {
    availableChars += lowerCasedCharacters.join("");
  }

  if (options.includeUppercase) {
    availableChars += upperCasedCharacters.join("");
  }

  if (options.includeNumeric) {
    availableChars += numericCharacters.join("");
  }

  if (options.includeSpecialChars) {
    availableChars += specialCharacters.join("");
  }

  var generatedPassword = "";
  for (var i = 0; i < options.passwordLength; i++) {
    generatedPassword += getRandom(availableChars);
  }

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
