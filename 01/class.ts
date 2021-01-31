class Animal {
    name:string
    constructor(name:string) {
        this.name = name
    }
    run(){
        return `${this.name} is running`
    }
}

const snake = new Animal("Lily")
console.log(snake.run())


class Dog extends  Animal {
    bark(){
        return `${this.name} is barking`
    }
}

const xiaobao = new Dog("xiaobao")
console.log(xiaobao.bark())
console.log(xiaobao.run())


class  Cat extends  Animal {
    constructor(name) {
        super(name);
    }
    run(){
        return `Meow,${super.run()}`
    }
}
const maomao = new Cat("maomao")
console.log(maomao.run()) // 多态

