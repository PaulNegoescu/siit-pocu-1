const user = {
  firstName: 'Paul',
  lastName: 'Negoescu',
  age: 36,
};

console.log(user.firstName, user['lastName']);

const arr = [];

//if(condition) {}
//while(condition) { }

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
