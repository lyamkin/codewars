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

/* You live in the city of Cartesia where all roads are laid out in a perfect grid. 
   You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go
   for a short walk. The city provides its citizens with a Walk Generating App on their phones --
   everytime you press the button it sends you an array of one-letter strings representing directions
   to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you 
   know it takes you one minute to traverse one city block, so create a function that will return
   true if the walk the app gives you will take you exactly ten minutes (you don't want to be early 
   or late!) and will, of course, return you to your starting point. Return false otherwise.
   Note: you will always receive a valid array containing a random assortment of direction letters 
   ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's 
   standing still!).
*/
function isValidWalk(walk) {
   var sidesArr, sidesObj, numSteps;
   numSteps = walk.length;
   sidesArr = ['n','s','w','e'];
   sidesObj = {
      n: [],
      s: [],
      w: [],
      e: []
   };
   if (numSteps == 10) {
      // Check how many steps n,s,w,e
      sidesArr.forEach(side => {
         sidesObj[side] = walk.filter(stepsSide => {return stepsSide === side});
      });

      // If n != s and w != e The path is not valid
      if(sidesObj.n.length === sidesObj.s.length && sidesObj.w.length === sidesObj.e.length) {
         return true;
      } else {
         return false;
      }
   } else {
      return false;
   }
 }