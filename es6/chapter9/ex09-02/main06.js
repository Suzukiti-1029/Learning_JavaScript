class Vehicle {
  constructor() {
    this.passengers = [];
    this.acceptPassengers = 1;
    console.log('Vehicleが生成された');
  }

  addPassenger(p) {
    if (this.passengers.length < this.acceptPassengers) {
      this.passengers.push(p);
    } else {
      console.log('これ以上乗れません。。');
    }
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.acceptPassengers = 0;
    console.log('Carが生成された');
  }

  deployAirbags() {
    console.log('バーンッ！');
  }
}
const v = new Vehicle();
v.addPassenger('太郎');
v.addPassenger('花子');
console.log(v.passengers);

const c = new Car();
c.addPassenger('景子');
c.addPassenger('ミドリ');
console.log(c.passengers);
// v.deployAirbags(); エラー
c.deployAirbags();
