/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random)
let a = prompt("Enter the first number")
let c = prompt("Enter operation")
let b = prompt("Enter the second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random>0.1){
    // perform the correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else{
    // perform the wrong operations
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)


}