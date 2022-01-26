// the slice function creates a "slice" of an array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// first arg is index where slice will begin INCLUSIVE
// second arg is index where slice will end NON-INCLUSIVE
const slicedArr = arr.slice(0, 4);

console.log(slicedArr);

const slicedArr2 = arr.slice(2,7)

console.log(slicedArr2);

// If we provide only 1 num as arg, will create a slice from that index (INCLUSIVE) to the end of the array
const slicedArr3 = arr.slice(3)

console.log(slicedArr3)