console.log("This topic about Objects in JavaScript")

// singleton --  
// object literals
// Object is key par concept. {}

const mysym = Symbol("key1")

const obj = {
    key:"pair",
    name: "sinzq",
    [mysym]: "key1",                  // access symbol 
    age: 18,
    email: "shivam.singh@gmail.com",
    loggedin: false 
}
console.log(obj)

console.log(obj.name)                 // to log name 

console.log(obj["age"])               // to log using [] square notaion.

// console.log(obj.mysym)             // to log symbol values .

console.log(typeof obj[mysym])        // to log symbol values .

obj.email = "shivam@gmail.com"        // to change value using 
 
console.log(obj.email)

// Object.freeze(obj)                    // to freeze values 

obj.email = "shivdfsfsdfm@gmail.com"

console.log(obj.email)    

obj.greeting = function(){
    console.log("hello from objects")
}

obj.greetingtwo = function(){
    console.log(`hello from objects, ${this.name}`)
}

console.log(obj.greeting())

console.log(obj.greetingtwo())



console.log("Second Part Two ")



const app = new Object()               // single ton objects

const ppa = {}                         // non singleton 

app.id = "12123asd"

app.age = 12

app.name  = "sinzq"

console.log(app)

console.log(ppa)

console.log(typeof app)



const regularUser = {
    email: "shiva@gmail.com",
    name : {
        firstname : "shiv",
        lastname : "singh"
    }
}

console.log(regularUser.name.firstname)

console.log(regularUser.name?.firstname)



const target ={name: "abc", age :12, date:"12 May,2024" }

const source ={name: "bca", age :13, date:"13 May,2024" }

// const obj3 ={obj1,obj2}

// const ass = Object.assign({}, target, source)

const ass = {...target, ...source}        //  spread  glass example

console.log(ass)


const user = [
    {id :"shi", email : 12},
    {id :"sh", email : 13},
    {id :"shiv", email : 14},
    {id :"shiva", email : 15},
    {id :"shivam", email : 16},
]

user[1].email

console.log(target)

// console.log(user)

console.log(Object.keys(user))

console.log(Object.values(user))