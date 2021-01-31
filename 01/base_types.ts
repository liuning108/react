let isDone:boolean = false
let age : number = 20
let binaryNumber:number = 0b1111

let firstName :string = "liuning"

let message: string =`hello,${firstName},age is ${age}`

//undefined/null 是所有类型的子类型
let u :undefined = undefined
u = null
let n: null = null
n=undefined

let num:number  = null
let str:string  =undefined
//Any 类型
let notSure:any = 4
notSure = "maybe it is a string"
notSure  = true
notSure.myName
notSure.getName()

//联合类型
let numberOfString :number | string  = 234
numberOfString = "abc"


//数组
let arrOfNumbers : number[] = [1,2,3,4]
arrOfNumbers.push(5)

function test(){
    console.log(arguments)
}
//元组
let user:[string,number] = ['liuning',18]
user =  ['liuning',18]





