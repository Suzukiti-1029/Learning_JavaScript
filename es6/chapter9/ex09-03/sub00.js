class Car {
  constructor() {
  }
}

class InsurancePolicy {
}

function makeInsurable(o) {
  o.addInsurancePolicy = function (p) { this.InsurancePolicy = p; };
  o.getInsurancePolicy = function () { return this.InsurancePolicy; };
  o.isInsured = function () { return !!this.InsurancePolicy; };
}

makeInsurable(Car);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());
