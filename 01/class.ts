class Animal {
    public name:string //default is public (public ,private,protected)
    static categoies :string [] =['mammal','bird']
    static isAnimal(a){
        return a instanceof Animal
    }
    constructor(name:string) {
        this.name = name
    }
    run(){
        return `${this.name} is running`
    }
}

const snake = new Animal("Lily")
console.log(snake.run())
console.log(Animal.categoies)
console.log(Animal.isAnimal(snake))


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

interface Radio{
    switchRadio():void
}
interface Battery {
    checkBatteryStatus();
}

interface RadioBattery extends Radio,Battery {

}
class Car implements Radio{
    switchRadio(): void {
    }

}

class CellPhone implements RadioBattery{
    checkBatteryStatus() {
    }

    switchRadio(): void {
    }

}