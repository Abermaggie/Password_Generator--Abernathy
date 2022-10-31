var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrsuvwxyz";
var nums = "0123456789";
var especial= "!#$%&'()*+-./:;<=>?@[\^_\{|}~";
var phconcat= "";


generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

    var uppercase = confirm("Would you like to use UPPERCASE CHARACTERS in your password?");
    var lowercase = confirm("Would you like to use LOWERCASE CHARACTERS in your password?");
    var nums = confirm("Would you like to use NUMBER CHARACTERS in your password?");
    var especial = confirm ("Would you like to use SPECIAL CHARACTERS in your password?");
    var pwlength= prompt("How many characters would you like to use in your password- Character Limit- 8-128");

    if(pwlength < 8 || pwlength > 128) {
        alert("Please submit a password within character length limitations- Char limit: 8-128");
        var pwlength= prompt("How many characters would you like to use in your password- Character Limit- 8-128");
    }
    if (uppercase) {
        phconcat += uppercase;
    }
    if (lowercase) {
        phconcat += lowercase;
    }
    if(nums) {
        phconcat += nums;
    }
    if(especial) {
        phconcat += especial;
    }
    for (var i = 0; i < pwlength; i++) {
        randomString += phconcat.charAt(Math.floor(Math.random() * phconcat.length));
    }
    password.value = randomString;
}
