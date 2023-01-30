// Two pointer approach

const myarray = [1, 2, 3, 5, 6];

let i = 0;
let j = myarray.length - 1;

while (i < j) {
  
  temp = myarray[i];
  myarray[i] = myarray[j];
  myarray[j] = temp;
  i++;
  j--;
}
console.log("array after reversel");
myarray.forEach((element) => {
  console.log(element);
});
