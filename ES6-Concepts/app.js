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
        this.parks = new Map();
        this.streets = new Map();
    }

    addPark(key, obj) {
        this.parks.set(key, obj);
    }

    addStreet(key, obj) {
        this.streets.set(key, obj);
    }
}

const eor = new EOR();

// Creating and adding the parks to the reporter
eor.addPark(greenPark, new Park("Green Park", 1972, 900, 6));
eor.addPark(nationalPark, new Park("National Park", 1962, 2000, 5));
eor.addPark(OakPark, new Park("Oak Park", 1895, 400, 1));

// Creating and adding the streets to the reporter
eor.addStreet(oceanStreet, new Street("Ocean Avenue", 1999, 3, "big"));
eor.addStreet(evergreenStreet, new Street("Evergreen Street", 2006, 1, "small"));
eor.addStreet(fourthStreet, new Street("4th Street", 2015, 2));
eor.addStreet(sunsetStreet, new Street("Sunset Boulevard", 1982, 5, "huge"));

