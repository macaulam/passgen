// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
  // User choices defaults
  var pwLength = 0;
  var spcChar = true;
  var numChar = true;
  var uC = true;
  var lC = true;

// Function to prompt user for password options
function getPasswordOptions() {
    pwLength = parseInt(prompt("How long would you like your password to be? Password must be 6 and 18 letters long!"));
    while (pwLength<6 || pwLength>18){
    alert("Number must be between 6 and 18, please enter a new number.");
    getPasswordOptions();
    }
    function pwOptions() {
      spcChar = confirm("Would you like your password to have special characters?");
      numChar = confirm("Would you like your password to have numerical characters?");
      uC = confirm("Would you like your password to have upper case letters?");
      lC = confirm("Would you like your password to have lower case letters?");
      if (spcChar !== true && numChar !== true && uC !== true &&lC !== true) {
        alert("Please select at least one character type.");
        pwOptions();
      } else {}
    }
    pwOptions();
  }
  

// Function for getting a random element from an array
function getRandom(a) {
  randomIndex = Math.floor(Math.random() * a.length);
  randomItem = a[randomIndex];
  generatedPassword.push(randomItem);
}

// Function to generate password with user input
function generatePassword() {
  if (spcChar == true && numChar !== true && uC !== true && lC !== true) {
    console.log("selected spcChar");
    while (generatedPassword.length < pwLength)
    getRandom(specialCharacters);

    } else if (spcChar !== true && numChar == true && uC !== true && lC !== true) {
      console.log("selected numChar");
      while (generatedPassword.length < pwLength)
      getRandom(numericCharacters);

    } else if (spcChar !== true && numChar !== true && uC == true && lC !== true) {
      console.log("selected uC");
      while (generatedPassword.length < pwLength)
      getRandom(upperCasedCharacters);

    } else if (spcChar !== true && numChar !== true && uC !== true && lC == true) {
      console.log("selected lC");
      while (generatedPassword.length < pwLength)
      getRandom(lowerCasedCharacters);
      
    } else if (spcChar == true && numChar == true && uC !== true && lC !== true) {
      console.log("selected spcChar & numChar");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + numericCharacters);

    } else if (spcChar == true && numChar !== true && uC == true && lC !== true) {
      console.log("selected spcChar & uC");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + upperCasedCharacters);

    } else if (spcChar == true && numChar !== true && uC !== true && lC == true) {
      console.log("selected spcChar & lC");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + lowerCasedCharacters);

    } else if (spcChar !== true && numChar == true && uC == true && lC !== true) {
      console.log("selected numChar & uC");
      while (generatedPassword.length < pwLength)
      getRandom(numericCharacters + upperCasedCharacters);

    } else if (spcChar !== true && numChar == true && uC !== true && lC == true) {
      console.log("selected numChar & lC");
      while (generatedPassword.length < pwLength)
      getRandom(numericCharacters + lowerCasedCharacters);

    } else if (spcChar !== true && numChar !== true && uC == true && lC == true) {
      console.log("selected lC & uC");
      while (generatedPassword.length < pwLength)
      getRandom(lowerCasedCharacters + upperCasedCharacters);

    }  else if (spcChar == true && numChar == true && uC == true && lC !== true) {
      console.log("selected spcChar & numChar & uC");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + numericCharacters + upperCasedCharacters);   

    } else if (spcChar == true && numChar == true && uC !== true && lC == true) {
      console.log("selected spcChar & numChar & lC");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + numericCharacters + lowerCasedCharacters);

    } else if (spcChar == true && numChar !== true && uC == true && lC == true) {
      console.log("selected spcChar & uC & lC");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + upperCasedCharacters + lowerCasedCharacters);

    }  else if (spcChar !== true && numChar == true && uC == true && lC == true) {
      console.log("selected numChar & uC & lC");
      while (generatedPassword.length < pwLength)
      getRandom(numericCharacters + upperCasedCharacters + lowerCasedCharacters);
    } else {
      console.log("selected spcChar & numChar & uC & lC");
      while (generatedPassword.length < pwLength)
      getRandom(specialCharacters + numericCharacters + upperCasedCharacters + lowerCasedCharacters);
    }
    
    return generatedPassword.join("");
  }



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);