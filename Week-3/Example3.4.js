// Refactor the above stack implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope

/**function createStack() {
  return{
    items:[],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    }
  };
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5 deleted
console.log("Stack Items are: "+stack.items);// [10]
stack.items= [10,100,1000];// Encapsulation broken
console.log("Stack Items are: "+stack.items);//[10,100,1000]  **/

// function createStack() {
//   // Write your code here...
// }
// const stack=createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5
// stack.items;// => undefined

class Stack{
  constructor(){
     this.st=[]; 
  }

  push(value){
    this.st.push(value);
  }

  pop(){
    this.st.pop();
  }

  printStack(){
    console.log("Stack has elements: "+this.st);
  }
}

const stack=new Stack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.printStack());
stack.st=[10,100,1000];
console.log(stack.printStack());