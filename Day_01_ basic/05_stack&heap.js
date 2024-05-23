console.log("Stack and Heap Memory")

// Stack -- primitive datatype it changed main elements.
// heap  -- non-primitive datatype refernce changes not change real elemnt 

let va = "Welcome Dost.";

let vaa = va;

vaa = "Not welcome Dost"

console.log(va);
console.log(vaa);


let user = {
    name : "user1",
    upi : "upi@apl"
}

let user2 = {
    name : "user2",
    upi : "0upi@apl"
}

user2.name = "shivaoo";

console.log(user2.name);
console.log(user2);