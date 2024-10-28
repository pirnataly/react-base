type OneParamFunc = (car: Car) => boolean;
type TransmittalNumbers = 0|1|2|3|4|5;

interface Engine {
  start: boolean;
}

interface Brakes {
  brake: boolean;
}

interface SteeringWheel {
  turn: 'left' | 'right' | 'straight';
}

interface Transmission {
  transmittal: TransmittalNumbers;
}

interface Car extends Engine, Brakes, SteeringWheel, Transmission {
  name: string;
}

function releaseBrakes(car: Car) {
  if (!car.brake) {
    console.log(`The ${car.name} brakes are already released`)
  } else {
    console.log("Now we'll released the brakes of the car")
    car.brake = false;
  }

}

function chooseTransmittal(car: Car, number: TransmittalNumbers) {
  if (number > 5) {
    car.transmittal=5;
  }
  else {
    car.transmittal = number;
  }
  console.log(`We've set up ${car.transmittal} transmittal`);
}

const isMoving: OneParamFunc = function (car) {
  return (car.start && car.transmittal !== 0 && !car.brake)
}

function turn(callback: OneParamFunc, car: Car): string {
  if (callback(car)) {
    return `The ${car.name} is turning ${car.turn}`
  }
  return `The ${car.name} is standing and can't turning right now`;
}

function startEngine(car: Car) {
  if (car.start) {
    return 'Car engine has already started';
  }
  console.log('Trying to start engine...');
  car.start = true;
  console.log('The engine started successfully');
}

function stopEngine(car: Car): void {
  console.log("Now we'll stop engine");
  car.start = false;
  car.transmittal = 0;
  console.log('The engine has stopped successfully');
}

function showCurrentState(car: Car) {
  return car
}

const car1: Car = {
  name: 'Opel',
  start: true,
  brake: false,
  turn: 'straight',
  transmittal: 0
}

console.log('This is the first state of a car',showCurrentState(car1));

console.log(isMoving(car1) ? `The ${car1.name}  is moving` : `The ${car1.name}  is standing`);

console.log(turn(isMoving, car1));

startEngine(car1);

releaseBrakes(car1);

chooseTransmittal(car1, 1);

console.log(isMoving(car1) ? `The ${car1.name} is moving` : `The ${car1.name}  is standing`);

console.log("This is the current state after starting the engine,releasing the brakes and speed selection",showCurrentState(car1));

console.log(isMoving(car1) ? `The ${car1.name}  is moving` : `The ${car1.name}  is standing`);

stopEngine(car1);

console.log('This is the current state after stopping the engine', showCurrentState(car1))