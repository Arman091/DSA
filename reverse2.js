// linear reversel of an array
const myarray = [1, 2, 3, 5, 6, 8];

let secarray = [];
let j = 0;
for (let i = myarray.length - 1; i >= 0; i--){
    let temp = myarray[i];
    secarray[j] = temp;
    j++;
}
console.log("array after reversel");
secarray.forEach((element) => {
  console.log(element);
});