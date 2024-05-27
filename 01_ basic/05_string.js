const name = "xyz";
const repo = 50;

// console.log(name + repo);

console.log(`This is example of adding strings ${name} any repo value is ${repo}`);

const gameName = new String("xyz-st");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.charAt(2));         //only passing index number 

console.log(gameName.indexOf("z"));      //only passing index number 

const neu = gameName.substring(5,4);
console.log(neu);

const ne = gameName.slice(6,1);
console.log(ne);

const net = "    hello       ";
console.log(`This value w/o trim ${net} that value using trim ${net.trim()}`);
console.log(net);                        // to remove spaces in strings.
console.log(net.trim());   

const url = "https://www.google.com/sinzq%20hello";
console.log(url.replace('%20', '-'));        // to replace string %20
console.log(url.includes('com'));           // to replace string %20

const url2 = "hello-heelo-heelo";
console.log(url2.split('-'));