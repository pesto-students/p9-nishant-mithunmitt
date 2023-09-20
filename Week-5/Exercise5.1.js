// 5.1-Using Async/Await and Generators, create separate functions and achieve the same functionality. Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3()

//Task 1-Display natural number

//Using Generators
function* naturalNumbers(){
  let num=1;
  while(true){
    console.log("Natural Numbers Loop with yield");
    yield num;
    num+=1;
  }
}
const iter=naturalNumbers();
function doTask1(){
  setTimeout((resolve, reject)=>{
    console.log(iter.next());
    if(iter.next()){
      return resolve(1);
    }
  },1000);
}
const p1=new Promise((resolve,reject)=>{
doTask1();
});
p1.then(()=>console.log("Promise successful"));

function doTask2(){
  setTimeout((resolve, reject)=>{
    return reject(0);
  },2000);
}
const p2=new Promise((resolve,reject)=>{
  doTask2();
  });
  p2.then(()=>console.log("Promise successful"))
    .catch(()=>console.log("Promise rejected"));

function doTask3(){
  setTimeout((resolve, reject)=>{
    console.log(iter.next());
    if(iter.next()){
      return resolve(1);
    }
  },3000);
}
const p3=new Promise((resolve,reject)=>{
  doTask3();
  });
  p3.then(()=>console.log("Promise successful"))
    .catch(()=>console.log("Promise rejected"));
