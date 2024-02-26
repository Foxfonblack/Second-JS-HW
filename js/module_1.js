// let number;
// let secondNumber = 2
// if (secondNumber>5){
// number = true
// }else {
//     number = false
// }

// number = secondNumber>5?true:false

// console.log(number);

// const a = 2+2
// console.log(a);

// const b = "mk"
// const c = "vf"
// console.log(+false + +true);

// if (true){
//     var a = 2
//     const b = 2
// }
// console.log(a);
// console.log(b);

// var c = 3
// var c = 4
// a()
// function declaration
// function a (){
//     console.log("hello");
// }
// a = 7
// console.log(a);
// a()

// function expression
// const a = function  (){
//     console.log("hello");
// }

// arrow function
// const b = ()=>console.log('hello');

// IIFE
// (()=>{})()
// const a = 5
// const b = 5n

// console.log(typeof a);
// console.log(typeof b);

// const c = BigInt(a)
// console.log(c);

// const id = Symbol()

// const obj = {
//     name: "alex",
//     age:28,
//     [id]: 2,
//     id: 4
// }
// console.log(obj[id],obj.id);

// console.log({}==={});

// var a = 2;
// console.log(window.a);
// console.dir(window)

// const b = prompt(a)
// console.log(b);

// const y  = 'wwww'
// console.log(alert(y));

// function a (b,c){
// b+c
// }
// console.log(a(1,2));

// const a = confirm('rrr')
// const a = 3.3454657342413
// const b = +a.toFixed(4)
// console.log(b);

// const f = 2**4
// console.log(f);

// const s =
// console.log(s);

// const string = "hello world"
// for(let i=0; i<string.length; i+=1){
//     console.log(string[i]);
// }

// const string = "hello world derdfgfdgs"
// // for(let i=0; i<string.length; i+=1){
// // if (string[i]==='d'){
// //     console.log(string.lastIndexOf('d'));
// // }
// // }
// console.log(string.slice(-2));

// const a=0
// const b = !!a
// console.log(b);

// const a = 5
// if (a > 10) {
//     console.log("yes");
// }
// else if (a===5) {
//     console.log('five');
// }
// else {
//     console.log("no");
// }

// инструкция SWITCH
// const subscribtion = 'gld'
// let cost
// switch(subscribtion){
//     case 'free':
//     cost = 0
//     break;
//     case 'normal':
//     cost = 100
//     break;
//     case 'gold':
//     cost = 500
//     break;
//     default:
//         console.log("you hav'nt subskribe");
// }
// console.log(cost);

// ОБЛАСТИ ВИДИМОСТИ
// const a='a'
// console.log(a);
// if (true){
//     console.log(a);
//     const b = 'b'
//     console.log(c);
//     if (true){
//         const c='c'
//         console.log(c);
//     }
// }

// ЦИКЛ while и do while
// let a=11
// while (a<10){
//     console.log(a);
//     a+=1
// }

// do {
//     console.log(a);
//     a+=1
// }while (a<10)

// !!!!!!!! ЦИКЛ for
// let i;
// for ( i=0; i<10; i+=1){
//     if (i===3)   continue

//     console.log(i);
// }
// console.log(i);

// const arr = [1, 1, 2, 2, 3, 3];

// const set = new Set(arr);
// console.log(set);

// const arr3 = [1, 2, 3, 34, 4, 4];

// THIS;

// const form = {
//     excel: 123,
//     word: 1232,
//     PP: 2342,
//     sum() {
//         let total = 0;
//         for (let key of Object.values(this)) {
//             if (typeof key === "number") {
//                 total += key;
//             }
//         }
//         return total;
//     },
// };
// console.log(form.sum());

// const ob = {
//     text: "sdfkjdgnkjf",
//     num: 134567543,
//     booleans: true,
//     num2: 32456743,
//     bool2: false,
// };
// for (let key in ob) {
//     if (typeof ob[key] === "boolean") {
//         // console.log(ob[key]);
//     }
// }

// const ob3 = Object.create(ob);
// ob3.form = "qw3rwt433sdfghdserwse890";
// for (let key in ob3) {
//     if (!ob3.hasOwnProperty(key)) {
//         console.log(ob3[key]);
//     }
// function createTransaction(amount, type) {
//     return {
//         id: Date.now(),
//         amount,
//         type,
//     };
// }
// console.log(createTransaction(1232, "deposite"));

// console.log(createTransaction(23, fds));

// const obj = {
//     er: 5,
//     sd: "sdfg",
//     lkmdc: true,
// };

// for (const key in obj) {
//     console.log(key);
// }

// const book = {
//     title: "KoKO",
//     author: "KuKU",
//     genres: "thriller",
//     rating: 8.3,
// };

// const keys = Object.keys(book);

// for (const key of keys) {
//     console.log(book[key]);
// }
// const values = Object.values(book);
// console.log(values);
// const objkeys = Object.keys(book);
// console.log(objkeys);
// const objentries = Object.entries(book);
// console.log(objentries);

// const books = [
//     {
//         title: "KoKO",
//         author: "KuKU",
//         genres: "thriller",
//         rating: 8.3,
//     },
//     {
//         title: "KoKOnut",
//         author: "KuKUnut",
//         genres: "comedy",
//         rating: 4.3,
//     },
//     {
//         title: "KoKOrooz",
//         author: "KuKUruuz",
//         genres: "drama",
//         rating: 5.3,
//     },
//     {
//         title: "KoKOloock",
//         author: "KuKUloock",
//         genres: "action",
//         rating: 7.3,
//     },
// ];
// // for (const book of books) {
// //     console.log(book.title);
// // }

// let totalRating = 0;
// for (const book of books) {
//     totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating);

// const rrr = function foo1() {
//     name: "lkmlk";
// };

// function foo2() {
//     name: "asdsa";
// }

// console.log(rrr);
// console.log(foo2());

// var f = function () {
//     console.log(1);
// };

// var execute = function (f) {
//     f = function () {
//         console.log(2);
//     };
//     setTimeout(f, 1000);
// };

// execute(f); // что выведет в консоль и почему

// f = function () {
//     console.log(2);
// };
// var a = 5;
// var b = 3;
// b = a;
// var c = a + b;
// console.log(c);

// var User = {
//     name: "Frank",
// };
// const user1 = Object.create(User);
// console.dir(user1);
// for (const item of Object.keys(user1)) {
//     console.log(item);
// }
// console.log(delete user1.name);

// const obj = {
//     name: "Vasya",
//     age: 54,
// };
// Object.freeze(obj);
// // Object.defineProperty(obj, "name", {
// //     configurable: false,
// // });
// console.log(delete obj.name);
// console.log(obj);

// const a = [...[1, 2, 3]];
// function sum(x, y, z) {
//     return x + y + z;
// }
// console.log(sum([...[1, 2, 3]]));

// var i = 2;
// var a = (2, i++, 5);
// console.log(a);

// const length = 4;
// const numbers = [];
// var i;
// for (i = 0; i < length; i++) {}
// {
//     numbers.push(i + 1);
// }
// console.log(numbers);
//
// const a = null ?? "bdfgdgx";
// const b = undefined ?? null;
// console.log(a, b);

// let person = {};
// console.log(person.profile);

// const temp = [1, 2, 3, 46, -65, 234, 22, 33];
// console.log(Math.max(...temp));
// const temp5 = [...temp];
// console.log(temp5);
// const allTemp = [...temp, ...temp5];
// console.log(allTemp);

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15, propD: 170 };
// const third = { ...first, ...second };
// console.log(third);

// function multiply() {}

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(...args) {
//     console.log(args);
// }

// const book = {
//     title: "Kingdom",
//     author: "Cornwel",
//     genres: ["prose", "adventure", "fantasy"],
//     isPublic: true,
//     rating: 8.38,
// };

// const accesType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accesType} доступі`;
// // console.log(message);

// const arr = [1, 2, 3, 4, 5, "we5", 2];
// const arr3 = [32, 32, 43, 43];
// const obj = {
//     arr: [1, 21, 3],
//     sd: "kjfdmvk",
// };
// const arr2 = [...arr, ...arr3, ...Object.entries(obj)];
// console.log(arr2);

// const obj2 = {
//     asd: "fsdghg",
//     sfd: "dsfgdhsgdhsf",
// };

// const obj3 = { ...obj, ...obj2, ...arr2 };
// console.log(obj3);

// const obj11 = {
//     sa: 2,
//     dfs: 4,
// };
// const obj12 = {
//     s2edfafd: "kjn kjnkjn",
//     ss33ewd: "hhbkjnbkj",
// };
// const arr13 = [3, 43, 4, 23, 23, 4, 4];

// const objTest = { ...obj11, obj12, arr13 };
// console.log(objTest);

// function pro(name) {
//     return { name };
// }
// console.log(pro("alex"));

// function add(...args) {
//     let total = 0;
//     for (let elements of args) {
//         total += elements;
//     }
//     return total;
// }

// console.log(add(1, 2, 89, 90809));

// function sort(...args) {
//     return args.sort((a, b) => {
//         // return a.localeCompare(b);
//         return a - b;
//     });
// }
// // console.log(sort("Sasha", "Masha", "Dasha"));

// console.log(sort(6, 3, 5, 32, 0, 1, 11));

// console.log(+true + +null);
// console.log("hellow" + +true);
// console.log(1 == "1");
// console.log(null == undefined);
// console.log(null == "");
// console.log(null == 0);
// console.log(null == false);
// console.log(null == null);
// console.log(undefined == undefined);
// console.log(NaN == NaN);
// console.log([1] == [1]);
// console.log({ a: 1 } == { a: 1 });
// console.log([1] === [1]);
// console.log({ a: 1 } === { a: 1 });

// const test = {
//     name: "Alex",
//     lastName: "Fedorovich",
//     age: 34,
//     toString() {
//         return this.name;
//     },
//     valueOf() {
//         return this.age;
//     },
// };

// console.log(Number(test));
// // console.log(String(test));
// let i = 1;
// console.log(++i);

// for (var i = 0; ++i < 10; ) {
//     if (i++ > 5) break;
// }

// let a = 2;
// let b = 3;

// if (++a + b === a++ + b) {
//     console.log("ok");
// }

// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
// };
// Object.freeze(Transaction);
// Transaction.DEPOSIT = "pijdnajfnvoaj";
// console.log(Transaction);

// function createTransaction(amount, type) {
//     return {
//         id: Date.now(),
//         amount,
//         type,
//     };
// }

// deposit(amount) {
//     const item = this.createTransaction(amount, Transaction.DEPOSIT)
//     console.log(object);
// }

// const obj = {
//     name: "Vasili",
//     age: 23,
//     married: true,
//     getName: function () {
//         console.log(this.name);
//     },
//     setAge(age) {
//         this.age = age;
//     },
// };
// obj.getName();
// obj.setAge(99);
// // console.log(obj);
// obj.married = false;
// console.log(obj);

// const atm = {
//     totalAmount: 0,
//     transactionsHistory: [],
//     errorTransaction: [],
//     // type: {
//     //     DEPOSIT: "deposit",
//     //     WITHDRAW: "withdraw",
//     // },

//     createTransaction(type, amount) {
//         if (type === "deposit") {
//             this.totalAmount += amount;
//             // alert(`the rest money at your amount is ${this.totalAmount}`);
//         } else if (type === "withdraw") {
//             if (this.totalAmount < amount) {
//                 alert("not enought money at your account");
//                 this.errorTransaction.push({
//                     id: Date.now(),
//                     error: "wrong operation",
//                 });
//                 return;
//             }
//             this.totalAmount -= amount;
//             // alert(`the rest money at your amount is ${this.totalAmount}`);
//         } else {
//             alert("wrong operation");
//             return;
//         }
//         this.transactionsHistory.push({
//             amount,
//             id: Date.now(),
//             type,
//         });
//     },
//     showTotalAmount() {
//         alert(`the rest money at your amount is ${this.totalAmount}`);
//     },
// };

// atm.createTransaction("deposit", 34);
// atm.createTransaction("deposit", 994);
// atm.createTransaction("deposit", 194);
// atm.showTotalAmount();
// console.log(atm);

// ПРИВЕДЕНИЕ ЗНАЧЕНИЙ/Логические операторы

// console.log(Number("123"));
// console.log(Number("123z"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(!!"32435");
// console.log(2 || 3 || 0 || 5);

// console.log((2 && 0) || 0 || (9 && "uhgbsd") || (false && true) || 0);
// 0||0||"uhgbsd"||false||0
// console.log(0 || (true && NaN && 0 && "kjnikj") || (989 && 0));
// 0 || NaN || 0;

// console.log(0 ?? false);

// console.log([] + 1);
// console.log({} + 1);
// console.log(null == 0);
// console.log(null <= 0);
// console.log(null >= 0);
// console.log({} + []);
// console.log((0 && true / {}) || NaN || undefined * 0 + 11 || "11xfcjd");
// 0||NaN||NaN|"11gdgfhjkj"
// console.log(Number({}));

// function

// const add = function(a,b){
//     return a+b
// }

// function add(a,b){
//     return a+b
// }

// const add = (a,b) => a+b

// const fu = (a,b,c,d,v) =>a+(b-d/c)*v

// let log = function foo(name, asdf) {
//     if (!name) {
//         foo("anonimus");
//     } else {
//         console.log(`hello ${name}`);
//     }
// };

// log();

// const newfn = log;
// log = null;
// newfn();
// console.log(newfn());

// function sum() {
//     console.log(arguments);
//     console.log(Array.from(arguments));
//     console.log([...arguments]);
// }
// sum("a", "fd", "sdf");

// const obj = {
//     loc: ["Kyiv", "Lviv", "Kharkiv", "Mukhosransk"],
//     country: {
//         europe: "Ukrain",
//         asia: "China",
//     },
//     lang: ["english", "ukraine", "chinese"],
// };
// // let {
// //     country: { europe },
//     loc: [, country],
// } = obj;

// const { loc: locc, country: countryyyy, lang: langggg } = obj;

// // console.log(europe);
// // console.log(country);
// console.log(locc, countryyyy, langggg);
// const arr = [1, 2, 3, 4, 5, 6, 22, 33];
// const [, , a, b, c] = arr;

// // console.log(a, b, c);
// ДЕСТРУКТУРИЗАЦИЯ

// function log({ name, age, married } ) {

//     console.log(name);
// }
// obj1 = {
//     name: "Den",
//     age: 33,
//     married: true,
// };

// log(obj1);

// CALLBACK FUNCTION

// function sum(a, b, e, f, callback) {
//     const c = callback(e, f);
//     return a + b + c;
// }
// function callback(a, b) {
//     return a * b;
// }

// console.log(sum(1, 2, 3, 4, callback));

// function log(name, callback) {
//     callback(name);
// }
// function callback(name) {
//     console.log(`hello ${name}`);
// }

// console.log(log("Tanya", callback));

// КОЛЛБЕК СТРЕЛОЧНЫЙ

// function foo(a, b, callback) {
//     const c = a + b;
//     callback(c);
// }
// foo(2, 3, (number) => {
//     console.log(number);
// });

// // MAP declarative
// const planet = ["Earth", "Venus", "Mars", "Plyton"];
// const newPlanet = planet.map((item, idx, arr) => {
//     return item.toUpperCase();
// });
// console.log(newPlanet);

// // Map imperative
// function map(arr, callback) {
//     const arr2 = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         arr2.push(callback(arr[i]));
//     }
//     return arr2;
// }
// function callback(item, idx, arr) {
//     return item.toUpperCase();
// }
// const myArr = map(planet, callback);

// console.log(myArr);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [
//     ...releaseDates.sort((a, b) => {
//         return a - b;
//     }),
// ];

// const alphabeticalAuthors = [
//     ...authors.sort((a, b) => {
//         return a.localeCompare(b);
//     }),
// ];

// console.log(ascendingReleaseDates, alphabeticalAuthors);

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = books
//     .map((item, idx, arr) => {
//         return item.author;
//     })
//     .sort((a, b) => {
//         return a.localeCompare(b);
//     });

// console.log(sortedByAuthorName);

// const newBooks = [];
// for (let i = 0; i < books.length; i += 1) {
//     newBooks.push(books[i].author);
// }

const books = [
    {
        title: "The Last Kingdom",
        name: "Bernard Cornwell",
        rating: 8.38,
        friends: ["Valya", "Petya", "Ira"],
    },
    {
        title: "Beside Still Waters",
        name: "Robert Sheckley",
        rating: 8.51,
        friends: ["Seroja", "Petya"],
    },
    {
        title: "The Dream of a Ridiculous Man",
        name: "Fyodor Dostoevsky",
        rating: 7.75,
        friends: ["Ira"],
    },
    {
        title: "Redder Than Blood",
        name: "Tanith Lee",
        rating: 7.94,
        friends: ["Valya", "Petya", "Ira", "Tolya", "Adolf"],
    },
];

// const newBooks = books.reduce((acc, item, idx, arr) => {
//     return (acc += item.rating);
// }, 0);

// console.log(newBooks);

// const totalAuthor = [];
// for (let i = 0; i < books.length; i += 1) {
//     totalAuthor.push(books[i].author);
// }
// console.log(totalAuthor);

// maxRating = [];
// for (let i = 0; i < books.length; i += 1) {
//     if (books[i].rating < 8) {
//         maxRating.push(books[i].rating);
//     }
// }

// console.log(maxRating);

// minRating = [];
// for (let i = 0; i < books.length; i += 1) {
//     if (books[i].rating > 5) {
//         minRating.push(books[i].rating);
//     }
// }

// console.log(minRating);

// const findAuthor = books.find((item, idx, arr) => {
//     return item.author === "Fyodor Dostoevsky";
// });

// console.log(findAuthor);
// Change code below this line
// const getNamesSortedByFriendCount = (users) => {
//     return [...users]
//         .sort((a, b) => {
//             return a.friends.length - b.friends.length;
//         })
//         .map((item, idx, arr) => {
//             return item.name;
//         });
//     // .flatMap((item) => {
//     //     return item.friends;
//     // });
//     // .filter((item, idx, arr) => {
//     //     return arr.indexOf(item) === idx;
//     // });
// };
// console.log(getNamesSortedByFriendCount(books));
// // Change code above this line

// const getSortedFriends = (users) => {
//     return users
//         .flatMap((item, idx, arr) => {
//             return item.friends;
//         })
//         .filter((item, idx, arr) => {
//             return arr.indexOf(item) === idx;
//         });
// };
// console.log(getSortedFriends(books));

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (let item of products) {
//         if (item.name === productName) {
//             return item.price;
//         }
//         // Change code above this line
//     }
//     return null;
// }
// console.log(getProductPrice("Scanner"));

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     let arr = [];
//     for (let item of products) {
//         if (item.hasOwnProperty(propName)) {
//             arr.push(item[propName]);
//         }
//     }
//     return arr;
//     // Change code above this line
// }

// console.log(getAllPropValues("name"));

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(icon);

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line
// const {
//     today: {
//         low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
// } = forecast;

// const highToday = todayHigh;
// const lowToday = todayLow;
// const todayIcon = iconToday;

// const highTomorrow = tomorrowHigh;
// const lowTomorrow = tomorrowLow;
// const tomorrowIcon = iconTomorrow;

// console.log(
//     highToday,
//     lowToday,
//     todayIcon,
//     highTomorrow,
//     lowTomorrow,
//     tomorrowIcon
// );
