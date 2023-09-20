// Problem 7.2 Spiral Order Matrix II Problem Description 
// Given a matrix of m * n elements (m rows, n columns), 
// return all elements of the matrix in spiral order.
// Example: Given the following matrix: 
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
// You should return [1, 2, 3, 6, 9, 8, 7, 4, 5]

function spiralPrint(arr){
   var rows=arr.length;
   var columns=arr[0].length;
   var top=0, left=0; 
   var right=columns-1;
   var bottom=rows-1;
   var direction=1;
   while(top<=bottom && left<=right){
    if(direction==1){
     for(let i=left; i<=right; ++i){
      console.log(arr[top][i]);
     }
     ++top;
     direction=2;
   }
   else if(direction==2){
    for(let i=top; i<=bottom; ++i){
      console.log(arr[i][right]);
    }
    --right;
     direction=3;
   }
   else if(direction==3){
    for(let i=right; i>=left ; --i){
      console.log(arr[bottom][i]);
    }
    --bottom;
    direction=4;
   }
   else if(direction==4){
    for(let i=bottom; i>=top; --i){
      console.log(arr[i][left]);
    }
    ++left;
    direction=1;
   }
   else return false;
}
}

const arr=[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] ;
spiralPrint(arr);