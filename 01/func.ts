
//可选参数
function add (x:number,y:number,z?:number):number {
    if(typeof  z ==='number'){
        return x+y+z
    }else {
        return  x+y
    }

}

let result = add(2,3)
let result2 = add(2,3,5)

//函数表达式
const add2 = function(x:number,y:number,z?:number):number {
    if(typeof  z ==='number'){
        return x+y+z
    }else {
        return  x+y
    }
}
//(x:number,y:number,z?:number)=>number 函数类型
const add3: (x:number,y:number,z?:number)=>number =add2



let str = "str" //类型推导

