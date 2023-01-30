// Binary serach Works only on sorted array

const myarray = [1, 2, 3, 9, 12, 34, 56, 67, 78, 89, 90];





function searchnum(array, num) {
  let si = 0;
  let ei = array.length - 1;
  while (si <= ei) {
    let midindex = Math.floor((si + ei) / 2);
    if (array[midindex] < num) {
      si = midindex + 1;
    } else if (array[midindex] > num) {
      ei = midindex - 1;
    } else {
      return midindex;
    }
  }
  return -1;
}
let result = searchnum(myarray, 90);
if (result == -1) {
  console.log("number not found");
} else {
  console.log(`this is number ${myarray[result]} at index ${result} of array`);
}
