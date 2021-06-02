// Write a function that finds the intersection of two lists/arrays, and return a sorted array. Ignore duplicates.

// Example INPUT
// [1,5,3,4]
// [3,4,5,7,7,9]

// Example OUTPUT
// [3,4,5]

function getSortedIntersection(arrA, arrB) {
  // early exit cases
  if (!arrA || !arrB || !arrA.length || !arrB.length) {
    return [];
  }

  // create new array to return
  const sortedArr = [];
  // find which arrary is shorter
  const shorterArry = arrA.length <= arrB.length ? arrA : arrB;
  const longerArry = arrA.length > arrB.length ? arrA : arrB;

  // iterate over the shorter array to save time
  shorterArry.forEach(num => {
    // check to see if the number is also in the longer array
    // also check to see if the number is already in the sorted array in order to avoid duplicates
    if(longerArry.includes(num) && !sortedArr.includes(num)) {
      sortedArr.push(num);
    }
  });

  // sort the sorted array
  return sortedArr.sort((a,b) => a-b);
}

let arrA = [1,5,3,4];
let arrB = [3,4,5,7,7,9];
console.log(getSortedIntersection(arrA,arrB));

arrA = [1,1,4,5,3,1];
arrB = [10,1,10,1,3];
console.log(getSortedIntersection(arrA,arrB));