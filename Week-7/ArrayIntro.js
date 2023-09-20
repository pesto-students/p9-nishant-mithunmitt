//Initialization of Array
let arr=["Apple", "Orange", "Plum"];//Declaration and Initialization
let arr1=new Array(['Apple', { name: 'John' }, true, function() { console.log('hello'); }]);//Array can store all datatypes

//To printout array elements
console.log(arr);
console.log(arr1);

//To find length of Array(Length starts from one)
console.log(arr.length);
console.log(arr1.length);

//To find element by Index(Starts from zero)
console.log(arr[0]);//First Element-->index=0
console.log(arr[arr.length-1]);//Last Element-->index=length-1

//To add/remove elements from the end of an Array we have push/pop
arr.push("Pineapple");//appends one or multiple elements to the end
console.log(arr);
console.log(arr.includes("Pineapple"));//check for value throughout the array
arr.pop("Pineapple");//removes one element from the end
console.log(arr.includes("Pineapple"));
console.log(arr);

//To add/remove elements from the start of an Array we have shift/unshift
arr.shift();//Extracts/Removes the first element of the array and returns it
console.log(arr);
arr.unshift("Guava","Apple");//Add one or more element to the beginning of the array
console.log(arr);

//Note:1.) Methods push and unshift can add multiple elements at once 
//2.)Arrays are objects internally

let fruits = ["Banana"]
let arr2 = fruits; // copy by reference (two variables reference the same array)
console.log( arr2 === fruits ); // true
arr2.push("Pear"); // modify the array by reference
console.log( fruits ); // Banana, Pear - 2 items now

//Iterating over the Array elements
//1.For Loop
for(let i=0; i<arr.length; i++){
  console.log("For loop: "+arr[i]);
}

//2.For of
for(let ele of arr){
  console.log("For of loop: "+ele);
}

//3.For in(bcoz array is object internally-access all properties)
for(let key in arr){
  console.log("For in loop: "+arr[key]);
}

//Length of the array
let arr3=[];
arr3[20]=["Hi"];//Not recommended to skip index numbers
console.log("Length is always last Index + 1: "+arr3.length);//21

//Length of the array-Writable property
let arr4 = [1, 2, 3, 4, 5];
arr4.length = 2; // truncate to 2 elements
console.log( arr4 ); // [1, 2]
arr4.length = 5; // return length back
console.log( arr4[3] ); // undefined: the values do not return
arr4.length = 0; //remove or clear all values
console.log(arr4);//[]
