// // // MAP declarative
// // const planet = ["Earth", "Venus", "Mars", "Plyton"];
// // const newPlanet = planet.map((item, idx, arr) => {
// //     return item.toUpperCase();
// // });
// // console.log(newPlanet);

// // // Map imperative
// // function map(arr, callback) {
// //     const arr2 = [];
// //     for (let i = 0; i < arr.length; i += 1) {
// //         arr2.push(callback(arr[i]));
// //     }
// //     return arr2;
// // }
// // function callback(item, idx, arr) {
// //     return item.toUpperCase();
// // }
// // const myArr = map(planet, callback);

// // console.log(myArr);

// // // MAP declarative
// // const numArr = [12, 5432, 75, 3, 5647, -3, 0, 32, -23];
// // const multNumArr = numArr.map((item, idx, arr) => {
// //     return item * 2;
// // });

// // console.log(multNumArr);

// // // FLAT MAP declarative
// // const flatArr = [1, 23, 43, 42, [39858, 23, [98453, 32423, 0], "sdf"], "asd"];
// // const newFlatMap = flatArr.flatMap((item, idx, arr) => {
// //     return item;
// // });
// // // FLAT declarative
// // const newFlatMap1 = flatArr.flat(3);
// // console.log(newFlatMap1);

// // // FLAT MAP imperative

// // function flatMap(arr, callback) {
// //     const arr8 = [];
// //     for (let i = 0; i < arr.length; i += 1) {
// //         if (Array.isArray(arr[i])) {
// //             for (let y = 0; y < arr[i].length; y += 1) {
// //                 arr8.push(callback(arr[i][y]));
// //             }
// //         } else {
// //             arr8.push(callback(arr[i]));
// //         }
// //     }
// //     return arr8;
// // }
// // function callback1(item, idx, arr) {
// //     return item;
// // // }

// // // let arr9 = flatMap(flatArr, callback1);
// // // console.log(arr9);

// // // FILTER declarative
// // const arrNum = [12, 43, 55, 0, -1, 23, -543, "", false, true];
// // const filterArr = arrNum.filter((item, idx, arr) => {
// //     return item > 40;
// // });
// // console.log(filterArr);

// // // FILTER imperative

// // function filter(arr, callback) {
// //     const arr99 = [];
// //     for (let i = 0; i < arr.length; i += 1) {
// //         if (callback(arr[i])) {
// //             arr99.push(arr[i]);
// //         }
// //     }
// //     return arr99;
// // }

// // function callback99(item, idx, arr) {
// //     return item <= 0;
// // }
// // console.log(filter(arrNum, callback99));

// // if (0) {
// //     console.log("kjsdnfklnf");
// // }

// // const users = [
// //     { name: "Tolya", age: 13 },
// //     { name: "Valya", age: 28 },
// //     { name: "Sharik", age: 5 },
// // ];
// // const filterUsers = users.filter((item, idx, arr) => {
// //     return item.age < 20;
// // });

// // // const filterUsers = users.filter(({age}, idx, arr) => {
// // //     return age < 20;
// // // });

// // console.log(filterUsers);

// const flat = function myFn(arr, newArr = []) {
//     for (let i = 0; i < arr.length; i += 1) {
//         if (!Array.isArray(arr[i])) {
//             newArr.push(arr[i]);
//         } else {
//             return myFn(arr[i], newArr);
//         }
//     }
//     return newArr;
// };

// const arr444 = [1, 2, [3, 4], 8];
// console.log(flat(arr444));

// const findNumber = arr444.flat(2).find((item, idx, arr) => {
//     return item > 3;
// });

// console.log(findNumber);

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line

//   const {yesterday, today, tomorrow, icon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}

//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highIcon);

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.reduce((acc, item, idx, arr) => {
//     acc.gvyhg = item;
//     return acc;
// }, {});
// console.log(newArr);

// const arr2 = [324, 5, 6, -1, 0, 43];

// arr2.sort();

// const newArr = [
//     ...arr2.sort((a, b) => {
//         return b - a;
//     }),
// ];
// console.log(newArr);

// const arr3 = ["Mars", "Snickers", "Bounty", "Twix"];
// const myArr = [
//     ...arr3.sort((a, b) => {
//         return a.localeCompare(b);
//     }),
// ];
// console.log(myArr);

// const arr6 = [
//     { name: "Vasya", age: 56 },
//     { name: "Lena", age: 23 },
//     { name: "Ira", age: 43 },
// ];

// console.log(
//     arr6.findIndex((item, idx, arr) => {
//         return item.name === "Vasya";
//     })
// );

// const arr3 = ["Mars", "Snickers", "Bountys", "Twixs"];

// // const b = arr3.some((item, idx, arr) => {
// //     return item === "Snickers";
// // });
// // console.log(b);
// const b = arr3.every((item, idx, arr) => {
//     return item.includes("s");
// });
// console.log(b);

// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArr = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             const total = numbers[i] + value;
//             newArr.push(total);
//         } else {
//             newArr.push(numbers[i]);
//         }
//     }
//     return newArr;
//     // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap((item, idx, arr) => {
//     return item.genres;
// });
// const uniqueGenres = allGenres.filter((item, index, arr) => {
//     return arr.indexOf(item) === index;
// });
// console.log(allGenres);

// const arr = [1, 2, 3, 3, 4, 4];

// const filtertedArr = new Set(arr);
// console.log(Array.from(filtertedArr));
