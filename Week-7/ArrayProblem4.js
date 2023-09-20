// Sort array of 0's,1's and 2's
// Given an array of size N containing only 0s, 1s, and 2s
// sort the array in ascending order. 
// Example 1: Input: N = 5 arr[]= {0 2 1 2 0}
// Output:0 0 1 2 2

function sort(a){  //Buuble Sort
  for(let i=0; i<a.length; i++){
    for(let j=0;j<a.length-i-1;j++){
      if(a[j]>a[j+1]){
        let temp=a[j];
        a[j]=a[j+1];
        a[j+1]=temp;
      }
    }
  }
  return a;
}

let a = [0,2,1,2,0];

console.log(sort(a));