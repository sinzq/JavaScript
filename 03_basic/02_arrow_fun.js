console.log("arrow function and this")

const u_name = {
    username : "sinzq",
    price : 999,
    welcome : function(){
        console.log(`${this.username}, welcome to website`)
        // this is used to current context
        console.log(this)
    }
}

// u_name.welcome()

// u_name.username = "sam"

// u_name.welcome()

// console.log(this)

// function hello(){
//     let u_namer = "sinzq"
//     console.log(this.u_namer)
// }
// hello()


const hello = () => {
    console.log("hello")
    console.log(this)
}
hello()

const he = (num1, num2) => {
    return num1 + num2                          // implisitly return 
} 

console.log(he(1,2))

const h1 = (num1, num2) => num1 + num2          // explicitly return 
// drive of variable 
console.log(he(1,2))

// when we use curly beackets  we need to use return val otherwise
// when we use single line arrow function no need to return or curly brackets

const hw = () => ({u_name : "sinzq"})
// drive of object 
console.log(hw())

const arr = [1, 2, 3]

console.log(arr)