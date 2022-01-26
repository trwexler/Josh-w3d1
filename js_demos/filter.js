// The filter function returns a new list with the items you specify in the return
// This method goes through each item in an array


let arr = [1, 3, 5, 7, 9];

// Here, the new list will include ONLY numbers === 5

const filteredArr =  arr.filter((element, index)=>{
    return element > 3

})

console.log(filteredArr);


// When we provide a second argument to the filter callback function, it serves as the index of the item
const filteredArr2 = arr.filter((element, index)=>element !== 7);

console.log(filteredArr2);