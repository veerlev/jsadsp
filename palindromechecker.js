/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/
function palindrome(str) {
  str = cleanUp(str);
var length = str.length;
  for (var i = 0; i < length / 2; i++){
    if (str.charAt(i) 
    !== str.charAt(length - i - 1)){
      return false;
    }
  }
return true;
}

function cleanUp(str){
var length = str.length;
str = str.toLowerCase();
var cleanStr = "";
for (var i = 0; i < length; i++){
  var char = str.charAt(i);
  var isAlphaNumeric = (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
  if (isAlphaNumeric){
    console.log("\'" + char + "\'");
    cleanStr += char;
  }
}
console.log(cleanStr);
return cleanStr;
}
