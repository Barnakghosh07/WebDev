let arr = [1,24,22,13,12,33];
// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }

let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>12){
        
        return true 
    }
    return false
}
console.log(arr.filter(greaterThanSeven))




let arr2 = [1,2,43,5]
const red = (a, b) =>{
    return a *b
}
console.log(arr2.reduce(red))