class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  set brand(data) {
    const validBrand =
      typeof data === 'string' && data.length >= 1 && data.length <= 50;

    if (!validBrand) {
      throw new Error(
        'The brands name should consist of at least one character and no more than 50.'
      );
    }

    this.#brand = data;
  }

  get brand() {
    return this.#brand;
  }

  set model(data) {
    const validModel =
      typeof data === 'string' && data.length >= 1 && data.length <= 50;

    if (!validModel) {
      throw new Error(
        'The models name should consist of at least one character and no more than 50.'
      );
    }

    this.#model = data;
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(data) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const validYear =
      typeof data === "number" && data >= 1900 && data <= currentYear;

    if (!validYear) {
      throw new Error('The car should not be older than the 1900 year.');
    }

    this.#yearOfManufacturing = data;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(data) {
    const validSpeed = typeof data === 'number' && data >= 100 && data <= 300;

    if (!validSpeed) {
      throw new Error('The max speed should vary between 100 and 300 km/h.');
    }

    this.#maxSpeed = data;
  }

  get maxSpeed() {
    return `${this.#maxSpeed} km/h`;
  }

  set maxFuelVolume(data) {
    const validFuelVol = typeof data === 'number' && data >= 5 && data <= 20;

    if (!validFuelVol) {
      throw new Error(
        'The max fuel volume should vary between 5 and 20 liters.'
      );
    }

    this.#maxFuelVolume = data;
  }

  get maxFuelVolume() {
    return `${this.#maxFuelVolume} liters`;
  }

  set fuelConsumption(data) {
    if (isNaN(data)) {
      throw new Error('The data should be a numerical value.');
    }
    this.#fuelConsumption = data;
  }

  get fuelConsumption() {
    return `${this.#fuelConsumption} l/100km`;
  }

  get currentFuelVolume() {
    return `${this.#currentFuelVolume} liters`;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return `${this.#mileage} km`;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('The car is already started.');
    }

    this.#isStarted = true;

    return this.#isStarted;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('The car has not been started yet.');
    }

    this.#isStarted = false;

    return this.#isStarted;
  }

  fillUpGasTank(fuel) {
    const validGasTank = typeof fuel === 'number' && fuel > 0;

    if (!validGasTank) {
      throw new Error('The wrong amount of gas.');
    } else if (this.#maxFuelVolume - this.#currentFuelVolume <= fuel) {
      throw new Error('The tank is full.');
    } else {
      this.#currentFuelVolume += fuel;
    }

    return this.#maxFuelVolume;
  }

  drive(speed, hoursAmount) {
    const validData =
      typeof speed === 'number' &&
      speed > 0 &&
      typeof hoursAmount === 'number' &&
      hoursAmount > 0;
    const carDistance = speed * hoursAmount;
    const perKilometer = this.#fuelConsumption / 100;
    const gasAmount = perKilometer * carDistance;

    if (!validData) {
      throw new Error('Incorrect data.');
    }

    if (speed >= this.#maxSpeed) {
      throw new Error('The car can not go that fast.');
    }

    if (!this.#isStarted) {
      throw new Error('The car should be started to drive.');
    }

    if (this.#currentFuelVolume - this.#fuelConsumption < 0) {
      throw new Error('There is not enough gas.');
    } else {
      this.#mileage += carDistance;
      this.#currentFuelVolume -= gasAmount; 

      return this.#mileage;   
    }
  }
}

module.exports = { Car };
