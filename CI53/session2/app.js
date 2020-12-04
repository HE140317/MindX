class Person {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    speak() {
        console.log("Hello bro!");
    }

    introduce() {
        console.log(`Hello everyone, my name is ${this.name}. I'm ${this.age} now. My hometown is in ${this.address}`);
    }
}
let name = "Hieu"
let age = 22;
let address = "TB"

let person1 = new Person(name, age, address);
let person2 = new Person('Farly', '30', 'fil');
let person3 = new Person('Khoa', 20, 'TB');
// person1.name = name;
// person1.age = age;
// person1.address = address;
console.log(person1);
// console.log(person2);

//tao 1 class gom cac tinh chat: class Ex: ten, tuoi, dia chi, so thich, 

class Ex extends Person {
    favorite;
    hair;
    weight;
    height;

    constructor(name, age, address, favorite, hair, weight, height) {
        super(name, age, address);
        this.favorite = favorite;
        this.hair = hair;
        this.weight = weight;
        this.height = height;
    }

    getMarried() {
        console.log(`${this.name} sends wedding card`);
    }

}

let ex1 = new Ex('a', '20', 'HN', 'pet', 'long straight', '45kg', '165cm');
let ex2 = new Ex('ab', '20', 'HN', 'pet', 'short straight', '45kg', '167cm');
let ex3 = new Ex('ac', '20', 'HN', 'pet', 'short', '45kg', '166cm');
ex1.speak();
person1.introduce();
ex1.getMarried();


class Boy extends Person {
    size;
    handsome;
    rich;
    constructor(name, age, address, size, handsome, rich) {
        super(name, age, address);
        this.size = size;
        this.handsome = handsome;
        this.rich = rich;
    }
}

class GoodBoy extends Boy {
    tedious;
    constructor(name, age, address, size, handsome, rich, tedious) {
        super(name, age, address, size, handsome, rich);
        this.tedious = tedious;
    }
}

class BadBoy extends Boy {
    tedious;
    constructor(name, age, address, size, handsome, rich, salty) {
        super(name, age, address, size, handsome, rich);
        this.salty = salty;
    }
}

class YellowBoy extends Boy {
    payment;
    constructor(name, age, address, size, handsome, rich, payment) {
        super(name, age, address, size, handsome, rich);
        this.payment = payment;
    }
}

// let b1 = new YellowBoy('a', '20', 'HN', '20cm', 'very', 'very', 'very');
// let b2 = new GoodBoy('a', '20', 'HN', '20cm', 'very', 'very', 'very');
// let b3 = new BadBoy('a', '20', 'HN', '20cm', 'very', 'very', 'very');
// let g1 = new Girl('a', '20', 'HN', '20cm', 'very', 'very');


class Girl extends Person {
    size;
    beauty;
    good;
    constructor(name, age, address, size, beauty, good) {
        super(name, age, address);
        this.size = size;
        this.beauty = beauty;
        this.good = good;
    }
}


class MyMath {
    static sum(a, b) {
        return a + b;
    }

    static sub(a, b) {
        return a - b;
    }

    mul(a, b) {
        return a * b;
    }

    devide(a, b) {
        if (b != 0) return a / b;
        return false;
    }
}


console.log(MyMath.sum(1, 3));
console.log(MyMath.sub(4, 7));