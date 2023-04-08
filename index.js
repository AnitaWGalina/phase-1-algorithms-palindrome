function isPalindrome(dad) {
 console.log( true);
 console.log("=>", isPalindrome(dad));
}
isPalindrome();


function isPalindrome(abba) {
  console.log(abba)
  // Write your algorithm here
}
isPalindrome();
function isPalindrome(ab) {
  console.log(ab)
  // Write your algorithm here
}

isPalindrome();

function isPalindrome(a) {
  console.log(a);
  // Write your algorithm here
}
isPalindrome();

function isPalindrome(robot) {
  console.log(robot);
  // Write your algorithm here
}
isPalindrome();






/* 
Define function
Add parameters
Add return value
Invoke the function 
*/

/*
 Define the function by including the parameters , state the desired output if the word id a palindrome.Invoke the function
 in order for execution to take place.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
    console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
    console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
    console.log("");

  

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
    console.log("");
}

module.exports = isPalindrome;
