/// <reference path = "../jQuery.d.ts" />

function echo<T>(arg:T):T{
    return arg
}


const result = echo(123)

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}

const result2 = swap(['string',123])


interface IWithLength {
    length :number
}

function echoWithLength<T extends IWithLength>(arg:T):T{
    console.log(arg.length)
    return arg
}

const obj = echoWithLength('str')
const obj2 = echoWithLength([1,2,3])
const obj3 = echoWithLength({length:10})



class Queue<T> {
    private  data  =[]
    push(item:T){
        return this.data.push(item)
    }
    pop():T{
        return this.data.shift()
    }

}
const q = new Queue<number>()
q.push(1)
q.push(2)
console.log(q.pop().toFixed())
console.log(q.pop().toFixed())


interface KeyPair<T,U> {
    key :T
    value:U
}
let kp1:KeyPair<number, string> = {
    key:1,
    value:"12"
}
let arr: number[] = [1,2,3]
let arr2: Array<number> = [4,5,6]

interface IPlus<T>{
    (a:T,b:T):T
}
function plus(a:number,b:number):number{
    return  a+b
}
const a:IPlus<number> =plus