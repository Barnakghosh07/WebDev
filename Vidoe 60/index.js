console.log("This is the tutorial about strings in JavaScript")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length)

let real_name = "Barnak"
let friends = "Sounak"
// console.log("His name is " + real_name + " and his friend's name is " + friends)
console.log(`His name is  ${real_name} and his friend's name is ${friends}`)

let b = "NashpatiNa"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(1, 5))
console.log(b.slice(1))

console.log(b.replace("Na", "90"))
console.log(b.concat(a, "Purba", "Barnak"))

let c = "   DramaQueen"
console.log(c.trim())

console.log(b) /* Strings has property that is immutable. */

