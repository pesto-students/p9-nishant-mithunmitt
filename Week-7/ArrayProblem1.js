// Problem 7.1: Max Sum Contiguous Subarray.
// Find the contiguous subarray within an array, A of length N which has the largest sum.
// Input Format:The first and the only argument contains an integer array, A. 
// Output Format: Return an integer representing the maximum possible sum of the contiguous subarray.
// Constraints: 1 <= N <= 1e6 and -1000 <= A[i] <= 1000

function maximumSubarraySum(arr, size) {//Kadane’s Algorithm
  let maxSum = Number.MIN_SAFE_INTEGER;//-9007199254740991
  let currSum = 0;
        for (let i = 0; i <= size - 1; i++) {
            currSum += arr[i];
            if (currSum > maxSum) {
            maxSum = currSum;
            }
            if (currSum < 0) {
            currSum = 0;
            }
        }
        return maxSum;
    }

const arr=[-2,1,-3,4,-1,2,1,-5,4];
const size=arr.length;
console.log(maximumSubarraySum(arr,size));
