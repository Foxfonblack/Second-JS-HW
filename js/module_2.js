// МАССИВЫ
// let arr1 = [4,3,2,4,4,2,2,2]
// const arr = new Array(23)
// // console.dir(arr1);

// arr1[3]=7
// arr1[arr1.length-1]=9
// console.log(arr1.at(1));

// Array.prototype.sayHello = function(){console.log("Hello!")}
// // console.dir(arr1);

// arr1.sayHello()

// arr1.length=6
// console.log(arr1);

// МЕТОД for

// const arr = [1,2,3,4,5,6]
// for(let i=0; i<arr.length; i+=1){
//     if (i===3) continue
//     console.log(arr[i]);
// }

// МЕТОД for of

// const arr = [1,2,3,4,5,6]
// let i = 0
// for(let elem of arr){
//    console.log(arr[i])
//    i += 1
// }

// СОЗДАНИЕ КОПИИ МАССИВА идентичной и не очень
// const arr = [1,2,3,4,5,6,[5,6,4,3,3,3,9]]
// // const arr1 = arr
// // arr.pop()
// // console.log(arr,arr1);
//  const arr1 = [...arr]
//  console.log(arr1===arr);
// const arr1=structuredClone(arr)
// const arr1 = Array.from(arr)
// const arr1 =JSON.parse(JSON.stringify(arr))
// console.log(arr1[6]===arr[6]);

// const string = 'hellow world !'
// const stringArr = string.split("")
// const stringArr2 = string.split(" ")
// console.log(stringArr);
// console.log(stringArr2);
// const stringJoin = stringArr2.join(" ")
// console.log(stringJoin);
// const arr1 = [3,4,6,67,7,8,89,6,9]
// console.log(arr1.lastIndexOf(6));

// // поиск всех индексов одинаковых значений элементов массива
// let k = -1
// while((k=arr1.indexOf(6, k+1))>=0){
//     console.log(k);
// }

// console.log(arr1.includes(6));

// const arr3 = arr1.push("hhhh")
// console.log(arr3);
// console.log(arr1);
// const arr5 = arr1.pop()
// console.log(arr5);

// console.dir(arr1);

// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2
// console.log( " \t \n" - 2);

// 5 > 4
// "ананас" > "яблоко"
// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"

// console.log(null == "\n0\n");

// console.log('1'.charCodeAt());

// const a = prompt('enter data', '10')
// console.log(a);

// if(a==='Админ'){
//     let password = prompt("enter password", '')
//     if(password === 'я главный'){
//         alert('hello')
//     }
//     else if(password ===""||password ===null){
//         alert('canceled')
//     }

//     else
//     {
//         alert('wrong password')
//     }
// }
// else if(a===''||a===null){
//     alert('отменено')
// }
// else{
//     alert('я вас не знаю')
// }

// for (let i=0; i<8; i++){
// console.log(i);
// console.log(i++);
// }

// for (let i=0; i<3; ++i){
//     console.log(i);
//     console.log(++i);
//     }

//   const a = 3;
// [1,2,3,4,5].forEach(element => {

// // });
// let d=3
// console.log(d);
// console.log(d &&= 2);
// console.log(d);

// && || ??
// let name =0
// name ??="hello " + name
// console.log(name);

// if (name) {
//     name = "hello " + name
//     console.log(name);
// }

// console.log(let);

// switch - выполняется только при строгом равенстве
// let price=23;
// switch (price){
// case 300:
// console.log('silver');
// break;
// case 500:
// console.log("gold");
// break;
// case 700:
// console.log("black");
// break;
// default:
//     console.log("you don't have permissions");
// }

// if else
// let price=500;
// if (price===300)
// {console.log('silver');}
// else if (price===500)
// {console.log('gold');}
// else if (price===700)
// {console.log('black');}
// else
// {console.log("you don't have permissions");}

// цикл  for
// for(let i=0; i<=10; i+=1){
//     if (i%2!==0){
//         console.log(i);
//     }

// }

// while, do while

// let number= +prompt("enter number","")
// while (number<100){
//     number = +prompt("enter number","")
// }

// let i=4
// do {
//     console.log(i);
//     i+=1
// }
// while (i<3)

// let string = `seifrugndijn jnkjnkj kjnkjn kjnserw3eiuniunsv
//  iunijnijnijnijn ijnijnijnijn ijnijniojn ijnijnijnijnij`

//  console.log(typeof string);

// FOR OF

// const array = [1,2324,43,45,55,3,6,7,8,0,1]
// for(let i=0; i<array.length; i+=1){
//     if (array[i]%2!==0){
//         console.log(array[i]);
//     }
// }

// for(let item of array){
//     if (item%2!==0){
//                 console.log(item);
//             }

// }

// let i=0;
// for(let item of array){
//     if (array[i]%2!==0){
//                 console.log(array[i]);
//             }
//             i+=1
// }

// const array = [1,2324,43,45,55,3,6,7,8,0,1]

// console.log(array.join(' '));

// const string = 'iosjdnm kmn 993j jo 00 3 4 92320'
// console.log(string.split());

// console.log(array.shift(88,44)
// );

// console.log(array);
//

// SLICE - не мутирующий
// const array = [1,2,3,4,5,6,7]
// // array.pop()
// // console.log(array);
// const array1 = array.slice(-2);
// console.log(array1)

// console.log(array===array1);
// console.log(array.at(-1)===array1.at(-1));

// SPLICE - мутирующий
// вырезает - возврат массива вырезанных значений
// const array = [1,2,3,4,5,6,7]
// const array1 = array.splice(1,4)

// console.log(array, array1);

// добавляет - мутирует исходный массив, возвращает пустой массив
// const array = [1,2,3,4,5,6,7]
// const array1 = array.splice(1,0,0,3,7,6,5)

// console.log(array, array1);

// замена
// const array = [1,2,3,4,5,6,7]
// const array1 = array.splice(3,4,8,8,8,8)

// console.log(array, array1);

// const array = [1,2,3,4,5,6,7]
// const array2 = ["sfdgh", 'sad', 'asdfg', 'asdfd']

// const array3=array.concat(array2)
// console.log(array3);

//  функции-------------------
// let a = 1
// let b = 2
// let c = 3
// function showA(){
//     console.log(a);
//     showB()
// }

// function showB(){
//     console.log(b);
//     showC()
// }

// function showC(){
//     console.log(c);
// }

// showA()

// Псевдомассив arguments
// function add(a,b, ...args){
//     let summ = 0
//   for (let i = 0; i<args.length; i+=1){
// summ += args[i]
//   }
// return summ+a+b
// }
// console.log(add(1,2,3,4));

// РАННИЙ ВОЗВРАТ return
// let a=2
// function consl(b){
//     if (a>2){
//         return a-b
//     }
//     return a+b
// }
// console.log(add(1,3))
// // ФУНКЦИОНАЛЬНОЕ ВЫРАЖЕНИЕ (function expression)
// function add(a,b){
//     return a+b
// }
// add(1,2)
// var add = function(a,b){
//     return a+b

// }
// console.log(d);
// var d=2

// const a = 2
// const c = [1,2,3,4,5]
// function show(){
//     c.push(a)
//     console.log(a);

// }
// show()
// const b = show()
// console.log(c);

// const a=0
// function add(){
//     if(a){
//         return true
//     }
//      return false
// }
// console.log(add());
// const a = 1

// function q1(){
// console.log(a);

// const b = 2;

// function q2(){
// console.log(b);

// const c = 3;

// if (true){
//     console.log(4);
// }
// }
// q2()
// }

// q1()

// function counter(){
//     let counter = 0
//     return function(){
//         return counter+=1
//     }
// }
// const counter1 = counter()
// console.log(counter1());
// console.log(counter1());

// const arr = [1,2,3,4,5,6]
// const obj = {
//     0: "Alex",
//     1: 30,
//     [Symbol.isConcatSpreadable]: true
// }
// console.log(arr.concat(obj));

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const newArray = firstArray.concat(secondArray)

//   if (newArray<=maxLength){
//     return newArray
//   }
//    newArray.length=maxLength
//     return newArray

//   }
//   console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));

// const a = new Object();
// a.name = "Alex"
// a.edu = {
//     KPI:3,
//     KIIMB:4
// }

// a.eduFunc = function(){
//    return this.edu.KPI + this.edu.KIIMB
// }
// console.log(a.eduFunc());

// a.showName(){console.log(this.name)} ???????

// let name = 'author';
// const books = {
// [name]: "London",
// bookName: "White",
// showName(){console.log(this.name)},
// showAuthor: function(){

// }
// }

// console.log(books[name]);
// console.log(books);
// let name = prompt('enter name', '')

// const obj = {
//     [name]:0
// }
// console.log(obj);

// function createObj(name, age){
//     return{
//         name,
//         age
//     }
// }

// console.log(createObj("Alex", 32));

// Глубокое клонирование
// const car = {
//     type: "sedan",
//     color: "red",
//     V: 2.5,
//     doors: {
//         "2 doors": true,
//         "3 doors": false
//     }

// }
// // // const cloneCar = structuredClone(car)
// // console.log(cloneCar.doors === car.doors);

// const cloneCar1 = JSON.parse(JSON.stringify(car))
// console.log(cloneCar1);
// console.log(cloneCar1.doors === car.doors);

// console.log("type" in car);

// // FOR IN
// const newCar = {}
// for(let key in car){
//     newCar[key]=car[key]
// }
// console.log(newCar);

// // SPREAD  поверхностное копирование

// const myCar = {...car}

// console.log(myCar);

// // поверхностное копирование

// const car2 = {}
// Object.assign(car2, car)

// console.log(car2);
// const objProt = {
//     s:1,
//     F:"sdfg",
//     type: true
// }

// const object = Object.create(objProt, {color:{value:'red'}})
// console.log(object.hasOwnProperty());

// object.newProp = 'asdfghjk'
// console.log(object.hasOwnProperty("newProp"));

// function MyPrototype() {
//     this.existingProperty = 'Это существующее свойство';
//   }

//  const funcObject = new MyPrototype()

//  console.log(funcObject);
//  console.dir(funcObject);

// FOR OF

// const carObj = {
//     model: "BMV",
//     doors: 4,
//     color: 'red',
//     price: 45000
// }

// const myCar = Object.create(carObj)
// myCar.gasoline = true
// myCar.wheels = 4
// console.log(carObj);
// console.log(myCar);

// for (const key in myCar){
//     if (!myCar.hasOwnProperty(key)){
//         console.log(key);
//     }
// }
// for (const key of Object.keys(carObj)){
//     console.log(key);
//  }

// // for (const key of Object.entries(carObj)){
// //    console.log(key);
// // }

// const arr1 = [...Object.keys(carObj)]
// console.log(arr1);

// const str = [...'homo homini']
// console.log(str);

// const str5 = str.join('')
// console.log(str5);

// const newCar = {...carObj,...myCar}
// console.log(newCar);

// function sum(a,b,...rest){
//     let total=0
//   for(let item of rest){
//     console.log(rest);
//     total+=item
//   }
//   return total
// // }
// console.log(sum(1,2,3,4));

// // ДЕСТРУКТУРИЗАЦИЯ
// const arr = [1,2,3,4,5]
// const [a,b,c,d,e] = arr
// console.log(arr);

// const str4 = 'homo homini'
// const [f,g,h] = str4

// console.log(f);
// console.log(g);
// console.log(h);

// let m = 2;
// let n = 4;

// [m,n] = [n,m]

// console.log(m);
// console.log(n);
