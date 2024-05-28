console.log("truthy value")

const u_email = "sinzq.io"

if(u_email){
    console.log("Got user loggedIn")
}else{
    console.log("user not loggedIn")
}

// falsy value   > [false, 0n, 0, -0, null, undefined, NaN]
// truthy value  > ["string", number, boolean, "0", "false", " ", [], {}, function(){} ]