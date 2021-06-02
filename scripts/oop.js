'use strict';

const arr = [1, 2, 4];
const obj = {
    prop: 'valoare',
    '1orice-sdasd': 123,
    metodaOarecare() {
        return 'blabla'
    },
    get test() {
        return 'This is get: ' + this.prop;
    }
};

function func() {

}

const func2 = function() {
    return 213;
}

const func3 = () => 213;

/**
 * OOP
 */

/**
 * Constructor functions
 */
function User(fName, height, weight, lName = 'Popescu') {
    this.fName = fName;
    this.lName = lName;
    this.height = height;
    this.weight = weight;
}

User.prototype.calculateBmi = function() {
    return (this.weight / this.height ** 2).toFixed(2);
}

User.aStaticMethod = function() {
    console.log('This is a static method');
}

const user1 = new User('Paul', 1.85, 90);
const user2 = new User('Ioana', 1.68, 51);

User.aStaticMethod();


console.log(user2, user1.calculateBmi(), user2.toString());

class Admin extends User {
    isAdmin = true;
    #cevaPrivat = 'Asta e privata';

    // constructor(...params) {
    //     super(...params);
    //     // constructor(fName, height, weight) {
    //     //     super(fName, height, weight);
    //     // this.isAdmin = true;
    // }

    sayHello() {
        console.log(`Hi from ${this.fName}, who is an admin? Answer: ${this.isAdmin}!`);
    }

    calculateBmi() {
        return 'Admin\'s bmi is special: ' + super.calculateBmi();
    }

    getCevaPrivat() {
        console.log('Ceva Privat este: ', this.#cevaPrivat);
    }
    
    get fullName() {
        return this.fName + ' ' + this.lName;
    }

    set fullName(fullName) {
        // const fullNameParts = fullName.split(' ');
        // this.fName = fullNameParts[0];
        // this.lName = fullNameParts[1];

        // const [fName, lName] = fullName.split(' ');
        // this.fName = fName;
        // this.lName = lName;

        [this.fName, this.lName] = fullName.split(' ');
    }

    static test() {
        console.log('This is also a static methiod');
    }

    static PI = Math.PI;
}

const user3 = new Admin('Robert', 1.90, 90);
console.log(user3.fullName);

user3.fullName = 'Paul Negoescu';

Admin.test();
console.log(Admin.PI);

console.log(user3.fName, user3.lName);


/**
 * this
 */
// IIFE - Immediately Invoced Function Expression
(function () {
    const example = {
        fName: 'Paul',
        // sayMyName(param1, param2) {
        //     console.log('My name is ', this, param1, param2);
        // },

        sayMyName: function(param1, param2) {
            console.log('My name is ', this, param1, param2);
        },

        altaMetoda: () => console.log('Alta metoda', this),
    };

    const example2 = {
        fName: 'Test',
        test: example.sayMyName,
    }

    const altNume = example.sayMyName;

    function fct(cb) {
        cb(7,8);
    }

    example.sayMyName(1, 2);

    example2.test(3, 4);
    altNume(5, 6);
    fct(example.sayMyName);


    //2
    example.sayMyName.apply('Booyah!', [11, 12]);


    //3
    const incaUnNume = example.sayMyName.bind(example);
    incaUnNume(19, 20);

    example.altaMetoda();

    document.addEventListener('contextmenu', example.sayMyName);
})();

class Test {
    something = 'other';
    aMethod() {
        console.log(this);
    };

    attachListener() {
        document.addEventListener('click', this.aMethod.bind(this));
    }
}

const test1 = new Test();
test1.aMethod();

console.log(test1);

test1.attachListener();


/**
 * 1. Implicit Binding
 *      a. this este ceea ce e la stanga punctului in momentul invocarii
 *          - daca este 'use strict', este evident daca in stanga punctului nu e nimic atunci this e undefined
 *          - daca nu este 'use strict', atunci this este window daca nu e nimic in stanga punctului
 *      b. Lexical this binding: arrow functions -> this este luat din scope-ul in care am definit functia
 * 2. Explicit binding:
 *      a. call, apply, bind -> this e ceea ce pasam ca prim argument acestor metode
 */

const num = new String('123');
console.log(num);

/**
 *  Don't do this!!!!!!!!!!!!!!
 */
Array.prototype.myFunction = function() {
    return this[2];
}
const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.myFunction());