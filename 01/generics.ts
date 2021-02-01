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


