class Car {
  speed = 0;
  areWipersOn = false;
  maxSpeed;

  constructor(
    colour,
    numberOfWheels,
    type,
    company,
    model,
    electric,
    stick,
    maxSpeed,
    baseAcc
  ) {
    this.numberOfWheels = numberOfWheels;
    this.type = type;
    this.company = company;
    this.model = model;
    this.electric = electric;
    this.stick = stick;
    this.colour = colour;
    this.maxSpeed = maxSpeed;
    this.baseAcc = baseAcc;
  }

  accelerate() {
    this.speed = this.speed + this.baseAcc;
  }

  upgradeMotor(newAcc) {
    this.baseAcc = 10;
  }
}

let myCar = new Car(
  "green",
  4,
  "sedan",
  "Ford",
  "Fiesta",
  false,
  false,
  120,
  5
);

console.log("My car speed: " + myCar.speed);
myCar.accelerate();
console.log("My car speed: " + myCar.speed);
myCar.upgradeMotor(10);
myCar.accelerate();
console.log("My car speed: " + myCar.speed);
myCar.upgradeMotor(15);
