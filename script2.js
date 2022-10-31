var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrsuvwxyz";
var nums = "0123456789";
var especial= "!#$%&'()*+-./:;<=>?@[\^_\{|}~";
var phconcat= "";


generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    var randomString = "";
    var uppercaseconfirm = confirm("Would you like to use UPPERCASE CHARACTERS in your password?");
    var lowercaseconfirm = confirm("Would you like to use LOWERCASE CHARACTERS in your password?");
    var numsconfirm = confirm("Would you like to use NUMBER CHARACTERS in your password?");
    var especialconfirm = confirm ("Would you like to use SPECIAL CHARACTERS in your password?");
    var pwlengthconfirm= prompt("How many characters would you like to use in your password- Character Limit- 8-128");

    if(pwlengthconfirm < 8 || pwlengthconfirm > 128) {
        alert("Please submit a password within character length limitations- Char limit: 8-128");
        var pwlengthconfirm= prompt("How many characters would you like to use in your password- Character Limit- 8-128");
    }
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
    for (var i = 0; i < pwlengthconfirm; i++) {
        randomString += phconcat.charAt(Math.floor(Math.random() * phconcat.length));
    }

    password.value = randomString;
}
