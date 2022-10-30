// Assignment Code
// This query selector is calling all styling that utilizes the id of generate to return the style linked in the css under the #generate.
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrsuvwxyz";
var nums = "0123456789";
var especial= "!#$%&'()*+-./:;<=>?@[\^_\{|}~";

// Write password to the #password input
// This function as a whole allows you to click inside the password box and write something there.
function generatePassword() {
  var password= "";
  var passwordcol = "";
  var lengthprompt = prompt("Password requires character length between 8-128.  <br>Please specify number of characters you would like to use:");
  lengthprompt=parseint(lengthprompt);
  var lowercaseprompt = confirm("Use lowercase letters in my password");
  var uppercaseprompt = confirm("Use uppercase characters in my password");
  var numericalprompt = confirm("Use numerical values in my password");
  var specialprompt = confirm("Use special characters to make my password stronger");

  if(lengthprompt < 8) {
    alert("Password minimum is 8 characters- please revise and re-submit")
    return "";
  }

  if(lengthprompt > 128) {
    alert("Password maximum is 128- please revise and re-submit")
    return "";
  }
  if (lowercaseprompt) {
    passwordcol += lowercase;
  }
  if (uppercaseprompt) {
    passwordcol += uppercase;
  }
  }
  if(numericalprompt) {
    passwordcol += nums;
  }
  if(specialprompt) {
    passwordcol += especial;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
// Add an event listener that fires when a user resizes the window??//
// Can we use any other HTML DOM event object to make this cooler?//
// Add alert box with new password.