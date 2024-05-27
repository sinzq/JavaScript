



console.log("Arrays")

// paranthises    -- ()
// brackets       -- []
// curlyy brassis -- []

let arr = [1, 2, 3, "Sinzq", true]                // called elements collection of my datatype.

console.log(`This is array elements -- ${arr}`)   // array are resizeable 

console.log(arr[0])                              // check array indexing using 

let arr1 = ["shatikan", "hatim"]

let arr2 = new Array(1,2,3,4,5,6)

console.log(arr2)

// Array method
arr.push(6)                   // push value at last

arr.pop()                     // pop last element

arr.unshift(9)                // element at first

arr.shift()                   // remove element at last

console.log(arr.includes(9))  // check element in array

console.log(arr.indexOf(9))   // check element in array -1 for not abiable

console.log(arr)

console.log("a", arr)

const myn1 = arr.slice(1,3)   // they not manipulate orignal array 

console.log(myn1)

console.log("b", arr)

const myn2 = arr.splice(1,3)   // manipulate original array 

console.log(myn2)



console.log("End of first..")

const a = ["sinzq", "Hello", true, false]

const b = ["hero", "hero2", "hero3", "hero4"]

console.log(a); 

console.log(b);

// a.push(b)                       // push everything in th array 

console.log(a) 

console.log(a[3]) 

const all = a.concat(b)            // same like push  

console.log(all)

const allNew = [...a, ...b]

console.log(allNew)


