let a = 10
const b = 20
var c = 30

if (true) {                    // if is a block scope 
    let a = "a"                // or every things is global scope 
    const b = "b"
    var c = "c"
}

console.table([a, b, c])       // that's why we cant use var 


function one() {
    const u_name = "sinzq"
    // second function 
    function two() {
        const u_email = "hello from two function"
        console.log(u_email)
    }
    console.log(u_name)
    two()
}

one()

if (true) {
    let user_name = "sinzq"
    if (user_name == "sinzq") {
        let website = "youtube"
        console.log(`this is username ${user_name} and this is website ${website}`)
    }
    // console.log(website)
}

// console.log(user_name)

//--------- Discustion ---------//

function o(num){
    return num + 1
}
o()
// console.log(o(2))

const addtwo = function(num){
    return num + 2
}

addtwo()