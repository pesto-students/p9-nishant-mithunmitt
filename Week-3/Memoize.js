function add(a,b){
  if(a === 0){
    return b;
  }
  else if(b === 0){
    return a;
  }
  else{
    return a+b;
  }
}

function time(fn){
  console.time();
  fn();
  console.timeEnd;
}

const addM = memoize(add);
time(() => addM(1,2));
time(() => addM(1,2));

function memoize(fn){
  const cache = new Map();
  return function(...args){
    const key = args.toString();
    console.log('fn called with'+key);
    console.log(cache);
    if(cache.has(key)){
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

