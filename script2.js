// Query Selector used to target specific id's and apply the below code to them//
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Define global criteria variables to give the code a base to randomly pull from.//
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrsuvwxyz";
var nums = "0123456789";
var especial= "!#$%&'()*+-./:;<=>?@[\^_\{|}~";
var phconcat= "";

// Isolate button and when clicked, start code.""
generateBtn.addEventListener("click", generatePassword);

//randomString value defined as "" to clear current place holder of "Your Secure Password" so the code can start with a blank slate.//
// local vairables defined with the "confirm" prompt that utilizes boolean true and false values.  "prompt" prompt allows for input.//
function generatePassword() {
    var randomString = "";
    var uppercaseconfirm = confirm("Would you like to use UPPERCASE CHARACTERS in your password?");
    var lowercaseconfirm = confirm("Would you like to use LOWERCASE CHARACTERS in your password?");
    var numsconfirm = confirm("Would you like to use NUMBER CHARACTERS in your password?");
    var especialconfirm = confirm ("Would you like to use SPECIAL CHARACTERS in your password?");
    var pwlengthconfirm= prompt("How many characters would you like to use in your password- Character Limit- 8-128");

// pwlengthconfirm prompt allows client to select the length of their password but advises the limitations of 8-128 characters.  Below if logic shows these limitations and prompts client to re-submit if their input falls outside these limitations.//
    if(pwlengthconfirm < 8 || pwlengthconfirm > 128) {
        alert("Please submit a password within character length limitations- Char limit: 8-128");
        var pwlengthconfirm= prompt("How many characters would you like to use in your password- Character Limit- 8-128");
    } 
    // The else statement allows for the possibility that the client may not choose any of the criteria and alerts them to do so before looping back into the criteria options//
    else if (uppercaseconfirm === false && lowercaseconfirm === false && numsconfirm === false && especialconfirm === false) {
        alert("To generate a password, you must select at least one criteria.");
        var randomString = "";
        var uppercaseconfirm = confirm("Would you like to use UPPERCASE CHARACTERS in your password?");
        var lowercaseconfirm = confirm("Would you like to use LOWERCASE CHARACTERS in your password?");
        var numsconfirm = confirm("Would you like to use NUMBER CHARACTERS in your password?");
        var especialconfirm = confirm ("Would you like to use SPECIAL CHARACTERS in your password?");
    }
    // If statements below run the boolean values input by the client//
    if (uppercaseconfirm) {
        phconcat += uppercase;
    }
    if (lowercaseconfirm) {
        phconcat += lowercase;
    }
    if(numsconfirm) {
        phconcat += nums;
    }
    if(especialconfirm) {
        phconcat += especial;
    }
    // for loop receives input from the phonconcat boolean values and uses the original variables at beginning of code to choose characters from the selected criteria sets.//
    // It uses the length specified in thw pwlengthconfirm to determine how long to run the loop and spits out that many characters.//
    for (var i = 0; i < pwlengthconfirm; i++) {
        randomString += phconcat.charAt(Math.floor(Math.random() * phconcat.length));
    }
// replace the randomString value of "" with the password value and this is the result that shows up in the text box.//
    password.value = randomString;
}
