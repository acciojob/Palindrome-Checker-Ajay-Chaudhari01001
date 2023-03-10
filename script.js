// complete the given function

function palindrome(str){

	// Convert string to lowercase and remove non-alphanumeric characters
  str = str.toLowerCase().replace(/[\W_]/g, '');

  // Reverse the string
  var reversedStr = str.split('').reverse().join('');

  // Compare the original string to the reversed string
  return str === reversedStr;
	}
}
module.exports = palindrome
