class Entity {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    calcAge() {
        return new Date().getFullYear() - this.year;
    }
}

class Street extends Entity {
    constructor(name, year, length, size = "normal") {
        super(name, year);
        this.size = size;
        this.length = length;
    }
}

class Park extends Entity {
    constructor(name, year, trees, area) {
        super(name, year);
        this.trees = trees;
        this.area = area;
    }

    calcTreeDensity() {
        return this.trees / this.area;
    }
}

class EOR {
    constructor() {
        this.parks = [];
        this.parkAvgAge = 0;

        this.streets = [];
        this.streetLengthSum = 0;
        this.streetAvgLen = 0;
    }

    addPark(obj) {
        this.parks.push(obj);
    }

    calcParkAvgAge() {

        this.parkAvgAge = this.parks
            .map(p => p.calcAge())
            .reduce((a, b) => a + b, 0)
            / this.parks.length;

            console.log(this.parkAvgAge);
    }

    addStreet(obj) {
        this.streets.push(obj);
    }
}

const eor = new EOR();

// Creating and adding the parks to the reporter
eor.addPark(new Park("Green Park", 1972, 900, 6));
eor.addPark(new Park("National Park", 1962, 2000, 5));
eor.addPark(new Park("Oak Park", 1895, 400, 1));

// Creating and adding the streets to the reporter
eor.addStreet(new Street("Ocean Avenue", 1999, 3, "big"));
eor.addStreet(new Street("Evergreen Street", 2006, 1, "small"));
eor.addStreet(new Street("4th Street", 2015, 2));
eor.addStreet(new Street("Sunset Boulevard", 1982, 5, "huge"));

console.log(eor.calcParkAvgAge());