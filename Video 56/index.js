console.log("I am conditional tutorial");

let age = 0;
// let grace = 2;

// +=  is increment assign operator
// age+=grace;
// console.log(age)

// ** is a exponentiation operator
// console.log(age ** grace)
// console.log(age % grace)

if (age == 18) {
  console.log("You can drive");
} else if (age == 0) {
  console.log("are you kidding?");
} else if (age == 1) {
  console.log("are you again kidding?");
} else {
  console.log("You cannot drive");
}

a = 5;
b = 9;

let c = a > b ? a - b : b - a;

console.log(c)

/*
transalate to:
if(a>b){
    let c= a-b;
}
else{
    let c = b-a;
}
*/
