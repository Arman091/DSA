const arr1 = ["a", "b", "l", "k", "r"];
const arr2 = ["m", "n", "l", "k"];

// return true if common elemnet is found in both arrays

// Brute force approach would be if just uses nested loops

//              O(a*b)
//   ====================================  //

// O(a+b)
function elemnts(arr1, arr2) {
  let person = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if (!person[arr1[i]]) {
      person.set(arr1[i], true);
    }
  }

  for (j = 0; j < arr2.length; j++) {
    if (person.get(arr2[j])) {
      return true ;
    }
    }
    return false;
}

let data = elemnts(arr1, arr2);
console.log(data)