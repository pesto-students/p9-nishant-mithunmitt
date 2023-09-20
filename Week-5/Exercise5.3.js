// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate


const hasDuplicate=function(arr){
   if(new Set(arr).size!==arr.length)//Set stores only unique elements
   return true+"-Array contains duplicate";
   else
   return false+"-No duplicates in the array";
}

console.log(hasDuplicate([1,5,-1,4,2,5]));
console.log(hasDuplicate([1,2,3,4]));
