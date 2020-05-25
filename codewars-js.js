/* Write a function that takes an integer as input, 
   and returns the number of bits that are equal to 
   one in the binary representation of that number. 
   You can guarantee that input is non-negative.
   Example: The binary representation of 1234 is 10011010010, 
   so the function should return 5 in this case*/

var countBits = function(n) {
	// Convert number to binary string
	var stringBinary, bitsNum
	stringBinary = (n>>>0).toString(2);

	// Convert string into Array, filter by '1', take a length of the new array
	bitsNum = stringBinary.split('').filter(item => {return (item === '1')}).length; 
	  
	// Return converted string into integer number
	return parseInt(bitsNum);
};

/* square every digit of a number.
   For example, if we run 9119 through the function, 
   811181 will come out, because 9^2 is 81 and 1^2 is 1.
*/

function squareDigits(num){
    var reminder,squareArray = [];
    
   while(num > 0) {
    // Get reminder
    reminder = num % 10;
    // Get new number (num - reminer)
    num = Math.floor(num/10);
    // Power reminder
    square = Math.pow(reminder, 2);
    squareArray.push(square);
   }
   // reverse array, join, convert to number
   return parseInt(squareArray.reverse().join(''));
}