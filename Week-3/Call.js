function greetByNameAndCity(name, city){
   var greeting=[
    'Hi I am', 
    this.name,
    'and I am from',
    this.city
   ].join(' ');
   console.log(greeting);
}

var obj = {
  name: 'Mithun',
  city: 'Bengaluru'
};

greetByNameAndCity.call(obj);