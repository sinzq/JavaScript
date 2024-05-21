const userName = "sinzq"
// userName = "hero_shivam"                -- not allowed to change const variables
console.log(userName);

var userMail = "Shivam.singh@gmail.com";
// userMail = "shivam.singh2@gmail.com";   -- allowed to changes the var variables
console.log(userMail);

let userAge = 22;
// userAge = 23;                           -- allowed to changes the let variables
console.log(userAge);

userAddress = "Haryana";                // -- Not to prefer but js having functionallty to assign variables
// userAddress = "jaipur";                 -- allowed to changes the with out variables
console.log(userAddress)

let accountState;                       // -- its undefine state of variable

console.table([userName, userMail, userAge, userAddress, accountState]) // -- In table form OutPut 


/* Don't use prefer not user var because of issue in bloc scope and functional scope. */
 