console.log("Functions")                         //Syntax function f_name(){}

function name(){
    console.log("hello from Function")
}

name()

function num(num1, num2){
    console.log(num1 + num2)
}
num(1, 4)

function ret(){
    console.log("hello in function")
    return ret                                   // used to stop coder after return
    console.log("hello after return function")    
}

function userlogin(user_name){
    if(!user_name){
    // if(user_name == undefined){
        console.log("pls enter username")
        return
    }
    return `${user_name} just looged in`
}

userlogin("sinzq")                              // wrong way
 
console.log(userlogin("sinzq"))                 // right way

console.log(userlogin())                        // not provided value in function 


function user_name2(user ="sam"){
    return`${user} just login`
} 

console.log(user_name2())                   // without function argument 

console.log(user_name2("sinzq"))            // with function argument 

function shopcart(...vumber){               // rest oprator 
    return vumber
}

console.log(shopcart(1, 3, 5, 6))

const usar = {
    u_name: "sinzq",
    price: 99
}

function obj(any){
    console.log(`username is ${any.u_name} and price is ${any.price}`)
}

obj(usar)

obj({
    username: "sam",
    price: 199
})

const data  = [200, 400]

function arra(getarr){
    return getarr
}

console.log(arra(data))

console.log(arra([300, 600]))