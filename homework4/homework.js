//Task 1 Write a function that takes a nested array and returns a flattened array.
const flattenArray = (arr) => {
  const result = [];

  function flattenHelper(arr) {
    for (let element of arr) {
      if (Array.isArray(element)) {
        flattenHelper(element);
      } else {
        result.push(element);
      }
    }
  }

  flattenHelper(arr);

  return result;
};
console.log(flattenArray([1, [2, [3, [4]], 5]]));

//Task 2 Write a function that groups an array of objects by a specific property

const data = [
  {name: "Alice", age: 21},
  {name: "Bob", age: 22},
  {name: "Alice", age: 23},
];

const groupBy = (data, property) => {
  const result = {};
  for (let user of data) {
    if (result[user[property]]) {
      result[user[property]].push(user);
    } else {
      result[user[property]] = [user];
    }
  }
  return result;
};
console.log(groupBy(data, "name"));

//Task 3 Write a function that merges two arrays in a zipper-like fashion.

const zipperMerge = (arr1, arr2) => {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
  }

  return result;
};
console.log(zipperMerge([1, 3, 5], [2, 4, 6, 8, 10]));

//Task 4Write a function that divides an array into chunks of a specified size.

function chunkArray(array, size) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

// Task 5 intersection of Arrays
//  Write a function that returns the intersection of two arrayss

const arrayIntersection = (arr1, arr2) => {
  const result = [];
  for (let item of arr1) {
    if (arr2.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(arrayIntersection([1, 2, 3], [2, 3, 4]));

//Tasl 6 Find Duplicates
// Write a function that finds all duplicates in an array

const findDuplicates = (arr) => {
  const elements = {};
  const duplicates = [];

  for (let element of arr) {
    elements[element] = (elements[element] ?? 0) + 1;
    if (elements[element] === 2) {
      duplicates.push(element);
    }
  }
  return duplicates;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

// Task 7 Rotate Image
// Write a function that rotates an n x n 2D matrix by 90 degrees clockwise

function rotateImage(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotatedMatrix = rotateImage(matrix);
console.log(rotatedMatrix);

//Task 8 Count Occurrences
// Write a function that counts the occurrences of each element in an array and returns an object
// with the element as the key and the count as the value

const countOccurrences = (arr) => {
  const result = {};

  for (let fruit of arr) {
    result[fruit] = (result[fruit] ?? 0) + 1;
  }
  return result;
};

console.log(
  countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
);

const factorial = (num) => {
  const result = 1;
  if (num < 0) {
    return undefined;
  } else if (num === 0) {
    return result;
  }
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr.reduce((result, item) => result * item, 1);
};

console.log(factorial(5));

const findMissingNumber = (arr) => {
  if (arr[0] !== 1) {
    return 1;
  }
  let totalSum = 0;

  for (let i = arr[0]; i <= arr.length + 1; i++) {
    totalSum += i;
  }
  const actualSum = arr.reduce((acc, num) => acc + num);
  return totalSum - actualSum;
};
console.log(findMissingNumber([1, 2, 3, 5, 6]));
console.log(findMissingNumber([1, 2, 4, 5]));