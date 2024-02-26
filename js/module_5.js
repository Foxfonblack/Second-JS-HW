// class User {
//     admin = true;
//     constructor(name, surename) {
//         (this.name = name), (this.surename = surename);
//         this.mail = false;
//     }
//     showName() {
//         console.log(`hello ${this.name}`);
//     }
//     get fullName() {
//         console.log(`${this.name} ${this.surename}`);
//     }
//     set fullName(value) {
//         [this.name, this.surename] = value.split(" ");
//     }
//     get userName() {
//         console.log(this.name);
//     }
//     set userName(value) {
//         this.name = value;
//     }
// }
// const freeUser = new User("Viktoria", "Petrova");

// console.log(freeUser);
// freeUser.showName();
// console.dir(User.prototype);

// freeUser.fullName;
// freeUser.fullName = "Akakiy Zilipukin";
// freeUser.fullName;
// console.log(freeUser);

// freeUser.userName;
// freeUser.userName = "Pavlo";
// freeUser.userName;

// class Car {
//     static instance = 0;
//     static countInstance() {
//         console.log(Car.instance);
//     }
//     constructor(name, model, speed) {
//         this.name = name;
//         this.model = model;
//         this.speed = speed;
//         Car.instance += 1;
//     }
//     showModel() {
//         console.log(this.name);
//     }
//     get maxSpeed() {
//         console.log(this.speed);
//     }
//     set maxSpeed(value) {
//         this.speed = value;
//     }
// }

// const myCar = new Car("BMW", "X5", 235);
// const secondCar = new Car("Audi", "Q7", 298);

// console.log(myCar);

// myCar.showModel();
// myCar.maxSpeed;
// myCar.maxSpeed = 435;
// myCar.maxSpeed;
// Car.countInstance();

// class City {
//     static numCity = 0;
//     static countNumCity() {
//         console.log(City.numCity);
//     }
//     #natoMember;
//     constructor(city, area, population, language, natoMember = false) {
//         this.city = city;
//         this.area = area;
//         this.population = population;
//         this.language = language;
//         this.#natoMember = natoMember;
//         City.numCity += 1;
//     }
//     get mycity() {
//         console.log(this.city);
//     }
//     get myarea() {
//         return this.area;
//     }
//     set myarea(value) {
//         this.area = value;
//     }
//     get natoMember() {
//         return this.#natoMember;
//     }
// }
// const usaCapital = new City("New York", 783.8, 8468000, "english", true);
// const ukrCapital = new City("Kyiv", 839, 2967000, "ukrainian");
// const englCapital = new City("London", 1572, 8982000, "english");
// const franceCapital = new City("Paris", 105, 2161000, "france");

// // console.log(usaCapital);
// // City.countNumCity();

// // const usaArea = usaCapital.area;
// // englCapital.mycity;
// // console.log(franceCapital.myarea);
// // franceCapital.myarea = 99999;
// // console.log(franceCapital.myarea);
// console.log(usaCapital, ukrCapital, englCapital, franceCapital);
// console.log(usaCapital.natoMember);

class Car {
    constructor(brand, engineCapacity, fuelType) {
        this.brand = brand;
        this.engineCapacity = engineCapacity;
        this.fuelType = fuelType;
    }
    get instanceBrand() {
        return this.brand;
    }
    set instanceBrand(value) {
        this.brand = value;
    }
    log() {
        console.log("hello");
    }
}
class Truck extends Car {
    constructor(brand, engineCapacity, fuelType, power) {
        super(brand, engineCapacity, fuelType);
        this.power = power;
    }
    log() {
        super.log();
        console.log("goodbye");
    }
}

const myTruck = new Truck("MAN", 20, "gasoline", 11200);

console.log(myTruck);
myTruck.log();
