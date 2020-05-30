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

 /* The maximum sum subarray problem consists in finding the maximum sum of a 
   contiguous subsequence in an array or list of integers:
         maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
         should be 6: [4, -1, 2, 1]
   Easy case is when the list is made up of only positive numbers and the maximum 
   sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
   Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

// My solution

var maxSequence = function(arr){
   var subArr, max, sumSubArr = [];

   // slice subarrays and find summ for each subarray
   for(var i = 0; i < arr.length; i++) {
      for(var j = i+1; j <= arr.length; j++) {
         subArr = arr.slice(i,j);
         sumSubArr.push(subArr.reduce((acc,curr) => {
            return acc + curr;
         }));
      }
   }

   if(sumSubArr.length !== 0) {
      // fund max in sumSubArr
      max = sumSubArr.reduce((num1,num2) => {
         return Math.max(num1,num2);
      });
   } else {
      max = 0;
   };
   return max = (max < 0) ? 0 : max;
};

// Best practise

var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
    
  }
  return ans;
}

/* Given an array, find the integer that appears an odd number of times.
   There will always be only one integer that appears an odd number of times.
*/

// My solution

function findOdd(A) {
   let counts = {}, target = 0;
   sortA = A.sort((a,b) => a-b);

   // Count each element from array
   sortA.forEach((element) => {
      counts[element] = (counts[element] || 0) + 1;
   });
   
   // Find Odd element 
   for (var key in counts) {
      if((counts[key] % 2) > 0) {
         target = key;
      }
   }
   return parseInt(target);
 }

 // Best practice1

 const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

 // Best practice2
 function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

/*
   The Western Suburbs Croquet Club has two categories of membership, 
   Senior and Open. They would like your help with an application form that 
   will tell prospective members which category they will be placed.
   To be a senior, a member must be at least 55 years old and have a handicap 
   greater than 7. In this croquet club, handicaps range from -2 to +26; the better 
   the player the lower the handicap.

   Input will consist of a list of lists containing two items each. 
   Each list contains information for a single potential member. 
   Information consists of an integer for the person's age and an integer for the person's handicap.
   Note for F#: The input will be of (int list list) which is a List<List>
   Example Input
   [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
   Output
   Output will consist of a list of string values (in Haskell: Open or Senior) stating 
   whether the respective member is to be placed in the senior or open category.
   Example Output
   ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/
function openOrSenior(data){
   let rez;
   rez = data.map(cur => {
      return (cur[0] >= 55 && cur[1] > 7) ? 'Senior' : 'Open';
   });
   // console.log(rez);
   return rez;
 }

//  openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]);


/* 
 Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
 Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// My solution

function pigIt(str){
   let newstr;
   newstr = str.split(' ').map(cur => {
      return (cur.match(/^[.,:!?]/)) ? cur : cur.substring(1) + cur[0] + 'ay';
   }).join(' ');
   return newstr
 }

// Best practice

 function pigIt(str){
   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
 }

pigIt('Pig latin is cool !!!');


