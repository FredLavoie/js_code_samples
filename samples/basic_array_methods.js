
// These array methods are NOT pure, the modify the array

/****************************************************************************/
// array 'shift' and 'unshift'
// Adds and removes items from the START of the array

const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ];
console.log(arr1);
arr1.shift('apple', 'banana', 'blueberry');
console.log(arr1);
arr1.unshift();


/****************************************************************************/
// array 'push' and 'pop'
// Adds and removes items from the END of the array

const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ];
console.log(arr2);
arr2.push('apple', 'banana', 'blueberry');
console.log(arr2);
arr2.pop();
console.log(arr2);

/****************************************************************************/
// array 'indexOf' and 'lastIndexOf'
// finds the first index and the last index of an item in an array


