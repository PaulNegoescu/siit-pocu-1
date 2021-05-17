'use strict';

const user = {
  firstName: 'Paul',
  lastName: 'Negoescu',
  age: 36,
};

console.log(user.firstName, user['lastName']);

const arr = [1, 2, 3, 5];

//if(condition) {}
//while(condition) { }
var aaaaa = 'test';
let i = 0;
while (i < arr.length) {
  console.log(arr[i] ** 2);
  i++;
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] ** 2);
}

i = 0;
do {
  console.log(arr[i], i);
  i++;
} while (i < arr.length);

function myFunc(message, ...names) {
  let ret = '';
  for (let i = 0; i < names.length; i++) {
    ret += `${message} ${names[i]}!\n`;
  }

  return ret;
}

function parent(cb) {
  console.log(cb('Namaste', 'Bogdan'));
}

const altNume = myFunc;
console.log(altNume('Ciao', 'Paul'));

parent(myFunc);
parent((...args) => console.log(args));

const func2 = function (nume) {
  return `Hello ${nume}`;
};

console.log(func2('Andrei'));

const func3 = (nume) => `Hello ${nume}`;

console.log(func3('Paul'));

const func4 = () => {
  console.log('Still an arrow function');
  return 4;
};

const func5 = () => ({ prop: 'valoare', test: 3 });

function testScope(param = 0) {
  var var1 = 1;
  let var2 = 2;
  const var3 = 3;
  //   var4 = 4; // globala implicita, nu se declara cu 'use strict'
  window.var5 = 5; // globala explicita

  if (true) {
    var a = 6;
    console.log(a);
  }

  function child() {
    console.log('asdas');
  }

  console.log(param, var1, var2, var3, var5, a, child);
}

testScope();

// console.log(child);

// hoisting
let a = 'global scope';
testScope2();

function testScope2() {
  let a = 'scope';
  console.log(a);
}

// closures
let num1 = 1;
function testScope3(num2 = 2) {
  return function () {
    console.log(num1 + num2);
  };
}

const childFunc = testScope3(3);
childFunc();

const child2 = testScope3(10);
child2();

console.dir(testScope3);
console.dir(childFunc);

// currying
function add(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

console.log('Add: ', add(5)(2));

const add5 = add(5);
const add9 = add(9);

console.log(add5(3), add5(1), add5(10), add9(10));

// Passing objects by reference
function reference(ceva) {
  const newObj = { ...ceva };
  newObj.nou = 'ceva nou';
  console.log(newObj);
}

const obj = {
  vechi: 'ceva vechi',
};

reference(obj);

console.log(obj);
