//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle(
  "Mecury",
  "Sedan",
  "1965",
  "color",
  "mileage"
);
console.log(v.make);

class Car extends Vehicle {
  constructor(
    maxPassengers,
    numPassengers,
    numWheels,
    maxSpeed,
    fuel,
    scheduleService
  ) {
    super(make, model, year, color, mileage);
    this.maxPassengers = maxPassengers;
    this.numPassengers = numPassengers;
    this.numWheels = numWheels;
    this.maxSpeed = maxSpeed;
    this.fuel = fuel;
    this.scheduleService = false;
  }

  loadPassenger(newPassengers) {
    if (this.numPassengers < this.maxPassengers) {
      if (newPassengers + this.numPassengers <= this.maxPassengers) {
        availableRoom = true;
      }
    }
  }

  start() {
    if (fuel > 0) {
      console.log("Vroom the engine has started");
      return (this.started = true);
    } else {
      console.log("The engine won't start without fuel");
      return (this.started = false);
    }
  }

  needService(mileage) {
    if (mileage > 30000) {
      scheduleService = ture;
      return scheduleService;
    } else {
      return scheduleService;
    }
  }
}

let mercuryCar = new Car("mercury", "sedan", "2010", "black", "75000");

mercuryCar.loadPassenger(4);
mercuryCar.start();
mercuryCar.stop();
mercuryCar.needService();

console.log(mercuryCar);
