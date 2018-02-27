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
    constructor(name, year, size = "normal") {
        super(name, year);
        this.size = size;
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

const greenPark = new Park("Green Park", 1972, 900, 6);
const nationalPark = new Park("National Park", 1962, 2000, 5);
const OakPark = new Park("Oak Park", 1895, 400, 1);

const OceanStreet = new Street("Ocean Avenue", 1999, "big");


console.log(someStreet);
console.log(someStreet.calcAge());

console.log("----------------");

console.log(somePark);
console.log(somePark.calcAge());
console.log(somePark.calcTreeDensity());