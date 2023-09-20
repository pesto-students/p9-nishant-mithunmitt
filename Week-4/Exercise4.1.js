// Exercise4.1 : Implement a function named getNumber which generates a random number. If randomNumber is divisible by 5 it will reject the promise else it will resolve the promise. Let’s also keep the promise resolution/rejection time as a variable.
// 1.JS promises should not be used.
// 2.A custom promise function should be created.
// 3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
// 4.Should be able to accept callbacks as props.

class PromiseSample {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }

  then(handleSuccess) {
    this.promiseChain.push(handleSuccess);

    return this;
  }

  catch(handleError) {
    this.handleError = handleError;

    return this;
  }

  onResolve(value) {
    let storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

function getRandomNumber(){
  return Math.floor(Math.random() * 100);
}

function checkDivisibilityBy5(){
  const num=getRandomNumber();
  console.log("Generated Random number is: "+num);
  if(num%10===0 || num%10===5){
    console.log("Divisible by 5");
    return 0;
  }
  else{
    console.log("Not Divisible by 5.");
    return 1;
  }
}

const p=()=>{
  return new PromiseSample((resolve,reject)=>{
   
    setTimeout(() => {
      const divisibleResponse =  checkDivisibilityBy5();

      if (divisibleResponse === 0) {
        reject(divisibleResponse);
      } else {
        resolve(divisibleResponse);
      }
    }, 2000);
});
}

p().then(()=>console.log("Promise is resolved and in then"))
 .then(()=>console.log("Promise chaining worked"))
 .catch(()=>console.log("In catch after rejection"));