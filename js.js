//ООП-объектно-ориентированное программирование
//OOP-object oriented programming

//Factory function
/*function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            document.write(`Drawing circle... R:${radius}`);
        },
    };
}

const circle = createCirle(1);
circle.draw();

const circle2 = createCirle(2);
circle2.draw();*/

//constructor function
/*function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        document.write(`Drawing circle... R${this.radius}`);
    };
}

const circle = new Circle(1);
circle.draw();

const circle20 = new Circle(20);
circle20.draw();*/

/*class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        document.write(`Drawing circle... R${this.radius}`);
    }
}

const circle = new Circle(1);
circle.draw();

const circle2 = new Circle(30);
circle2.draw();*/


/*class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        document.write(`Hello my name is ${this.name}`);
    }

    sayAge() {
        document.write(`I am ${this.age}`);
    }
}

class Admin extends User {
    constructor(name, age, userRole) {
        super(name, age);

        this.userRole = userRole;
    }

    sayRole() {
        document.write(`I am ${this.userRole}`);
    }
}

const vasya = new User("Vasya", 15);
vasya.sayName();
vasya.sayAge();

const pete = new Admin("Pete", 25, "Admin");
pete.sayName();
pete.sayAge();
pete.sayRole();*/


class Restaurant {
    constructor(name, type,time) {
        this.name = name;
        this.type = type;
        this.time = time;
    }

    show() {
        document.write(`Наш ресторан называется ${this.name}, тип кухни ${this.type} `);
    }

    openOrClosed() {
        document.write(`Ресторан ${this.name}  ${this.time}`);
    }
}

const res = new Restaurant("Дасмия", "кыргыз", "открыто");
res.show();
document.write("<br>")
res.openOrClosed();









