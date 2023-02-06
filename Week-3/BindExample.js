function sum(a,b){
  return this.a+this.b;
}
//Binding 
const sumBinding = sum.bind({a:1,b:2});
console.log(sumBinding());

const sumTest = sumBinding.bind({a:10,b:20});
console.log(sumTest());
