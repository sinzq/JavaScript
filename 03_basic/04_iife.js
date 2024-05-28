console.log("Life");

(function chai(){                         //name iife
    console.log(`DB connected`);
})();

( (name) => {                             // un_name iife
    console.log(`hello from arrow function ${name}`)
})("sinzq");