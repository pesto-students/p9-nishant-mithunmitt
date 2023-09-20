// Pair With Given Difference-Given an one-dimensional unsorted array A containing N integers.You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.Return 1 if any such pair exists else return 0. 
// Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
// Input Format First argument is an integer array A of size N. 
// Second argument is an integer B.
// Output Format Return 1 if any such pair exists else return 0.
// Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 
// Input 2: A = [-10, 20] B = 30

function checkDiff(arr,diff){
    for(let i=0; i<arr.length;i++){
      let start=arr[i];   			
        for(let j=i+1;j<arr.length;j++){   
          if((Math.abs(start-arr[j]))===diff) 
        return true;
      }
      }
      return false;
}

const A= [-10, 20];
const B= 30;
const res=checkDiff(A,B);
console.log(res);