// function ddd() {
//     console.log(this);
// }
// ddd();

// function showName() {
//     console.log(this.name);
// }
// const user = {
//     name: "Konstntine",
//     age: 91,
//     showAge(...rest) {
//         console.log(this.age);
//         console.log(rest[0]);
//         console.log(rest[1]);
//     },
// };

// user.showName = showName;

// user.showName();
// user.showAge();

// const admin = {
//     name: "Eduard",
//     age: 23,
//     showName: function () {
//         return () => {
//             console.log(this);
//         };
//     },
// };
// admin.showName()();

// admin.showAge = user.showAge;

// admin.showAge();

// user.showAge.apply(admin, ["Igor", "Kyiv"]);
// const divs = document.querySelectorAll("div");
// console.log([].join.call(divs, " "));

// const owner = {
//     name: "VAsya",
//     age: 40,
//     married: false,
//     greeting(greet, myName) {
//         console.log(
//             `${greet} ${this.name} are you ${this.age} years old? i am ${myName}`
//         );
//     },
// };
// // owner.greeting("Hello");
// const slave = {
//     name: "Ivan",
//     age: 35,
//     married: true,
// };
// // owner.greeting.call(slave, "Hello");
// // owner.greeting.apply(slave, ["Hello", "Akakyi"]);
// const greetingSlave = owner.greeting.bind(slave);
// greetingSlave("Goodbye", "Anatolii");

// function mult(a, b) {
//     return a * b;
// }

// const duble = mult.bind(null, 2);

// console.log(duble(6));

// const newUser = {
//     name: "Misha",
//     age: 34,
//     showName() {
//         console.log(this.name);
//     },
// };
// setTimeout(function () {
//     newUser.showName();
// }, 1000);

const obj = {
    name: "Bob",
    age: 32,
    married: false,
    city: ["Kiev", "Kharkiv", "Lviv"],
};

const newObj = Object.create(obj, {
    car: {
        value: "bmw",
        writable: true,
        enumerable: false,
        configurable: true,
    },
});
newObj.age = 37;
console.dir(newObj);

for (const prop in newObj) {
    if (newObj.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

// const freeObj = Object.assign(obj);
const backObj = {};
Object.assign(backObj, obj);
// console.dir(freeObj);

// freeObj.age = 55;
console.log(obj);
// console.log(freeObj === obj);
console.log(backObj.city === obj.city);

const arr = [1, 2, 3, 4, 5];
console.dir(arr.__proto__);

function Create(name, age) {
    (this.name = name), (this.age = age);
    // return { name: "Vasya" };
    // return true;
    // Create.prototype = function showName() {
    //     console.log(this.name);
    // };
}

const myObj = new Create("Bob", 23);

// console.log(myObj.showName());

console.dir(Create.prototype);

const newcreateObj = new myObj.constructor("Dillan", 22);
console.log(newcreateObj);

console.dir(Function.__proto__);
