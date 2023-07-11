const myAr = ['a', 'b', 'c', 'd'];
//4*4= 16 bytes of storage assumption

// O(1)  time Complexity
myAr.push("e");
console.log(myAr);

// pop  O(1)

let removedItem = myAr.pop();
console.log(removedItem);

// unshift  O(n)  we are looping

myAr.unshift('x'); // here we can conclude that May be array is not best DS to add element in starting
console.log(myAr);

// splice method  O(n) worstCase

myAr.unshift(2, 0, "alien");
console.log(strings);