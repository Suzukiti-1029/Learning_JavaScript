function Car(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ['P', 'N', 'R', 'D'];
  this._userGear = this._userGears[0];
}

car = new Car('make', 'model');
console.log(car);
