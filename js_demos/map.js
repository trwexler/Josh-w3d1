const startArr = [1, 2, 3, 4, 5];


// The map method returns a new array
// Like filter, if we give a second arg to the callback function it serves as index of array

const newArr = startArr.map((element, index)=> element * 2)

const newArr2 = startArr.map((element, index) => index)


console.log(newArr2)