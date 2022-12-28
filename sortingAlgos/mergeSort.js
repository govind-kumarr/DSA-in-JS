//! Jonathan von Neumann 23pages of code for Merge Sort

//!Code To Merge two Sorted arrays using Extra Space

function merge(arr1, arr2) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) results.push(arr1[i++]);
    //!If first element of arr1 is less or equal push it to results array
    else results.push(arr2[j++]); //!Else push the first element of arr2
  }

  //**Checking if there is any element remained in any of the two arrays */

  if (i < arr1.length) {
    while (i < arr1.length) results.push(arr1[i++]);
  } else if (j < arr2.length) while (j < arr2.length) results.push(arr2[j++]);

  //**Returning the ans array i.e. results;
  return results;
}

console.log(merge([1, 2, 3], [2, 5, 6]));
