//Function to add two numbers and return the result
function add(a,b){
  return a+b;
}
//Memoize function taking a function as argument and returning function
function memoize(fn){
  const cache = new Map();  //Key-value pairs
  return function(...args){
    const key = args.toString(); //convert variable length args to String
    console.log('Function called with: '+key);
    console.log(cache);  //All the Key-value pairs
    if(cache.has(key)){
      return cache.get(key); //returns value against the key
    }
    else{
      if(!(key.includes(','))){//Condition check if only one input passed
        cache.set(key, fn(args[0],0));
       return cache.get(key);
      }else{
       cache.set(key, fn(...args));
       return cache.get(key);
      }
    }
  };
}


  const addM = memoize(add);
  console.time();
  console.log(addM(100,100));
  console.timeEnd();
  console.time();
  console.log(addM(100));
  console.timeEnd();
  console.time();
  console.log(addM(100,200));
  console.timeEnd();
  console.time();
  console.log(addM(100,100));
  console.timeEnd();