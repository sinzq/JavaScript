console.log("Control flow statement")

if (2 == "2") {
    console.log("true statement")
} else
    (console.log("false statement ")
    )

// comparisation operator
// < less than         <= less than equal to         == equals to            === strict equal(+)
// > greater than      >= greater than equal to      != not equal to         !== strict equal(-)

const temp = 30

if (temp === 50) {
    console.log("true statement")
}
else {
    console.log("false statement")
}


const score = 10

if (score > 100) {
    const power = "fly"
    console.log(`user power is ${power}`);
} else {
    console.log("No power")
}

const balance = 1000

// if (balance > 500) console.log("test")

if (balance < 500) {
    console.log("less than 500")
} else if (balance < 750) {
    console.log("less than 750")
} else {
    console.log("less than 1200")
}

// && and(all need true)
// || or(any one need true)

const u_email = "email"
const user = true
const debit = true
if (user && debit){
    console.log("allow to buy course")
}