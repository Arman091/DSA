const myarray = [1, 2, 3, 5, 6, 8];
let element = 5;
let position = 3;
console.log("array before deletion");
myarray.forEach((element) => {
  console.log(element);
});

if (position <= myarray.length ) {
  for (let i = position; i < myarray.length-1; i++) {
   myarray[i]=myarray[i+1]
  }
  myarray.length = myarray.length - 1;
 console.log("array after deletion");
 myarray.forEach((element) => {
   console.log(element);
 });
}
