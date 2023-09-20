function createIncrement() {
  let count=0;
  function increment() {
  count++;//Search for count first inside increment() then in lexical scope
  }                     
  let message=`Count is ${count}`;
  function log() {
    console.log(message);//Search for message first inside log() then in lexical scope()
  }
  return[increment,log];
}
const[increment,log] =createIncrement();  
increment();
increment();
increment();
log();

//Output- Count is 0
//Because count variable declared using let is reset to 0 from its lexical scope.
