//Call Example
let firstUserDetails={ //Object 1 storing user details
 name: "Mithun",
 age: 28,
 designation: "Software Engineer"
};
//Function to print user details taking city and state input
 let printUserDetails=function(city, state){
  console.log(this); //Display object details
  console.log("Hi I'm: "+this.name+" and of age: "+this.age+" working as: "+this.designation+" from City: "+city+" and State: "+state);
};
//Call helps to borrow the function(reusability) by passing object ref.
//Syntax: Function.call(thisArg, arg1, arg2,...)
printUserDetails.call(firstUserDetails, "Bengaluru", "Karnataka");

let secondUserDetails={ //Object 2 storing user details
  name: "Murali",
  age: 23,
  designation: "Software Engineer"
 };
 //Call helps to borrow the function(reusability) by passing object ref.
 printUserDetails.call(secondUserDetails, "Mysore", "Karnataka");

 //Apply is similar to Call except that here we pass single Array of Strings rather than individual strings.
 //Syntax: function.apply(thisArg,[arg1, arg2,...])
 printUserDetails.apply(firstUserDetails,["Bengaluru", "Karnataka"]);
 printUserDetails.apply(secondUserDetails,["Mysore", "Karnataka"]);

 //Bind is used to create new copy of a function & invoke it when needed
 let newFunc=printUserDetails.bind(firstUserDetails,"Bengaluru", "Karnataka");
 newFunc(); //Call newFunc()-whenever we need to print user details