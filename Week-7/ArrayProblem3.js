// Example 1: Input: prices = [7,1,5,3,6,4] 
// Output: 5 
// Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling onday 1 is not allowed because you must buy before you sell. 
// Example 2: Input: prices =[7,6,4,3,1] 
// Output: 0 
// Explanation: In this case, no transactions are done and the maxprofit = 0

function profitMax(a){
  let left=0;
  let right=1;
  let maxProfit=0;
  while(right<a.length){
    if(a[left]<a[right]){
      let profit=a[right]-a[left];
      maxProfit=Math.max(profit,maxProfit);
    }
    else{
      left++;
    }
    right++;
  }
  return maxProfit;
}

let arr=[7,1,5,3,6,4];
console.log(profitMax(arr));
