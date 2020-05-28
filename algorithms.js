/* Binary search
*/

function binarySearch(arr,num) {
   let mid,sortedArr;
   let low = 0;
   let high = arr.length-1;
   sortedArr = arr.sort((a,b) => a-b);
   

   while(high >= low) {
      mid = low + Math.round((high-low)/2);
      if(num < sortedArr[mid]) {
         high = mid - 1;
      } else if (num > sortedArr[mid]) {
         low = mid + 1;
      } else {
         return 1;
      }
   }
   return -1; 
}