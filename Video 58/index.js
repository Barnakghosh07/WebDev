function nice(name) {
  console.log("Hey " + name + " you are nice!");
  console.log("Hey " + name + " you are good!");
  console.log("Hey " + name + " youtr tshirt is very good!");
  console.log("Hey " + name + " your course is good too!");
}

// nice("Barnak");
// nice("Rohan");

function sum(a,b, c=3) {
    // console.log(a+b);
    console.log(a,b,c)
    return a + b + c;
}

result1 = sum(2,2);
result2 = sum(33,43);
result3 = sum(23,44,1);

console.log("Here is the sum of the number is: ", result1)
console.log("Here is the sum of the number is: ", result2)
console.log("Here is the sum of the number is: ", result3)


// Arrow functions
const func1 = (x)=> {
    console.log("This is the arrow function: ", x)
}
func1(34);
func1(24);
func1(14);

