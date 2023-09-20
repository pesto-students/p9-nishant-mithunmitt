// Problem 7.6 : 3 sum Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.Return the sum of the three integers.Assume that there will only be one solution
// Example: Given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)

function nearToTarget(arr,tar){
  let size=arr.length;
  for(let i=0; i<size; i++){
    if(a[i+2]){
      if(a[i]+a[i+1]+a[i+2]===target-1 || a[i]+a[i+1]+a[i+2]===target+1)
      return target+" is the target and close sum value is: "+(a[i]+a[i+1]+a[i+2]);
    }
  }
  return "No Target found";
}
const a=[-1,2,1,-4];
const target=1;
let res=nearToTarget(a,target);
console.log(res);