console.log("Date or Time function in JavaScript.")

let date = new Date()
console.log(date)

console.log(date.toDateString())

console.log(date.toString())

console.log(date.toLocaleDateString())
// to check local date of system 

console.log(date.toLocaleTimeString())
// to check local time of system 

console.log(date.toTimeString())


let createDate = new Date(2023,0,31,5,3)
// custom date month should be start at 0 

console.log(createDate.toLocaleString())

let createDate2 = new Date("2023-01-14")
// custom date month should be start at 1 for jan with ""

console.log(createDate2.toLocaleString())

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getTime())
console.log(newDate.getMonth()+1)

console.log(`${newDate.getTime()} the time is. `)