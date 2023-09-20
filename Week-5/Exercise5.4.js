// Create a simple Javascript function code for addition, subtraction, and multiplication of 2 numbers and write the corresponding Jest based tests for it

//Jest is a node package-To install use-npm install -g jest
//After navigating to project file/folder-in terminal run- npm init
//Press Enter entering details asked-package.json package gets added
//npm install --save-dev jest (Install jest and its dependencies-package-lock.json gets added)
//Create tests and run npm test command to execute the tests

const mathOperations = {
  sum: function(a,b) {return a + b;},
  diff: function(a,b) {return a - b;},
  product: function(a,b) {return a * b}
}

module.exports = mathOperations