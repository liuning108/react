interface IPerson {
    readonly id:number  //只读属性 const用在变量。readonly用在属性上
    name:string
    age?:number  //可无属性
}

let liuning :IPerson = {
    id:1234,
    name:"liuning",
    age:20
}
let liu2 :IPerson = {
    id:1235,
    name:"liuning",
}
