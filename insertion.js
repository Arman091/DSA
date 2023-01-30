const myarray = [10, 22, 33,23,90,55,5,7,9,10,11];

// ++ insert element at given position ++


let element = 98
let position = 0;
console.log("array before insertin");
myarray.forEach(element => {
    console.log(element)
})

if (position <= myarray.length) {
    
    for (let i = myarray.length; i >= 0; i--) {
        if (i>position && i>0) {
            
            myarray[i] = myarray[i-1]; 
        }
       else if(i===position) {
            myarray[i] = element
            
    }
   
    }
    console.log("array after insertin");
    myarray.forEach((element) => {
      console.log(element);
    });
}
else {
    console.log("enter valid index")
}

