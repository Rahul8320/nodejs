// create empty array with size of 3
var arr = new Array(3);
console.log(arr);

// create array with initial values
var arr2 = new Array(3, 4, 5, 6);
console.log(arr2);

var arr3 = ["man", 2, 5.6, false];
console.log(arr3);

// add or push a element at the end of the array
arr.push(5);
console.log(arr);
arr[0] = 3;
arr[1] = 4;
arr[2] = 2;
console.log(arr);

// remove or pop an element from end of the array
arr.pop();
console.log(arr);

// shift all element in left side
arr.shift();
console.log(arr);

// shift all element in right side
arr.unshift(5);
console.log(arr);

function print(item) {
  console.log(item);
}

// array iteration
arr2.forEach(print);

arr2.splice(1, 1, 5, 6);
console.log(arr2);

// array is an object!!
console.log(typeof arr);
console.log(Object.keys(arr));
