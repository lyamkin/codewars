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


/*
   Write a function that accepts an array of 10 integers (between 0 and 9), 
   that returns a string of those numbers in the form of a phone number.
   Example:
   createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
   The returned format must be correct in order to complete this challenge. 
   Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers){
   let str = numbers.join('');

   return str.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
  
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


/*
   A pangram is a sentence that contains every single letter of the alphabet at least once. 
   For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
   because it uses the letters A-Z at least once (case is irrelevant).
   Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */
// My solution

function isPangram(string){
   const pattern = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
   'p','q','r','s','t','u','v','w','x','w','z'];
   let regex;
   string = string.toLowerCase();

   rez = pattern.map(cur => {
      regex = RegExp(`${cur}`);
      return regex.test(string);
     
   });
   return !rez.includes(false);
 }


// Best practice

function isPangram(string){
   string = string.toLowerCase();
   return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
     return string.indexOf(x) !== -1;
   });
 }

//  var string = "The quick brown fox jumps over the lazy dog."
 var string = "This is not a pangram";
console.log(isPangram(string));


/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. Ignore capitalization when 
determining if a character is a duplicate.
Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. 
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// My solution
function duplicateEncode(word){
   let obj = {};
   let arr = word.toLowerCase().split('');
   let code='';

   arr.forEach(el => {
      obj[el] ? obj[el]++ : obj[el] = 1;
   });

   arr.forEach(el => {
      obj[el]>1 ? code+=')' : code+='('
   });

   return code;

}

// Best practice

function duplicateEncode(word){
   return word
     .toLowerCase()
     .split('')
     .map( function (a, i, w) {
       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
     })
     .join('');
 }

 console.log(duplicateEncode("Succccess"));

 /*
   You are going to be given an array of integers. Your job is to take that array and find
   an index N where the sum of the integers to the left of N is equal to the sum of the integers 
   to the right of N. If there is no index that would make this happen, return -1.
   For example:
   Let's say you are given the array {1,2,3,4,3,2,1}: Your function will return the index 3, because 
   at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the 
   right side of the index ({3,2,1}) both equal 6.
   Let's look at another one.
   You are given the array {1,100,50,-51,1,1}: Your function will return the index 1, because at the 
   1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of 
   the index ({50,-51,1,1}) both equal 1.
   Last one:
   You are given the array {20,10,-80,10,10,15,35}
   At index 0 the left side is {}
   The right side is {10,-80,10,10,15,35}
   They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
   Index 0 is the place where the left side and right side are equal.
   Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
   Input:
   An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or 
   negative.
   Output:
   The lowest index N where the side to the left of N is equal to the side to the right of N. If you 
   do not find an index that fits these rules, then you will return -1.
   Note:
   If you are given an array with multiple answers, return the lowest correct index.
*/

// My solution

function findEvenIndex(arr)
{
   let rightSum, leftSum = 0, index = -1;
   let sum = arr.reduce((acc,el) => acc+el,0);
   arr.forEach((el,i) => {
      rightSum = sum - el - leftSum;
      if(rightSum === leftSum) {
         index = (index !== -1) ? index : i;
      } else {
         leftSum += el;
      } 
   });

   return index;
}
findEvenIndex([20,10,30,10,10,15,35]);


/*
   Write a function called that takes a string of parentheses, and determines if the order 
   of the parentheses is valid. The function should return true if the string is valid, and 
   false if it's invalid.
*/

function validParentheses(parens){
   let counter = 0;
   
   parens.split('').some(element => {
    
      element === '(' ? counter++ : counter--;
      
      // if counter negative it means the order is wrong. Closed without open. Stop iterations
      return counter < 0;
   });
   // counter should be 0 at the end
   return counter == 0;
}

/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
   let notZeroArr = [], zeroArr = [];
   arr.forEach(element => {
      element === 0 ? zeroArr.push(element) : notZeroArr.push(element);
   });
   return notZeroArr.concat(zeroArr);

 }

 console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));

 /* 
   Write a function named first_non_repeating_letter that takes a string input, and returns the first 
   character that is not repeated anywhere in the string.
   For example, if given the input 'stress', the function should return 't', since the letter t only 
   occurs once in the string, and occurs first in the string.
   As an added challenge, upper- and lowercase letters are considered the same character, but the 
   function should return the correct case for the initial letter. For example, the input 'sTreSS' 
   should return 'T'.
   If a string contains all repeating characters, it should return an empty string ("") or None -- 
   see sample tests.
*/

function firstNonRepeatingLetter(s) {

   let lowerstr, index = -1;
   lowerstr = s.toLowerCase();

   lowerstr.split('').some((cur,i,arr) => {
      arr.indexOf(cur) === arr.lastIndexOf(cur) ? index = i : index = -1;

      return index !== -1;
   });

   return index !== -1 ? s[index] : "";
 }

 console.log(firstNonRepeatingLetter(''));




