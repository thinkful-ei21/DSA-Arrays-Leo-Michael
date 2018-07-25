const Array = require('./array');


function main(){
  Array.SIZE_RATIO = 3;

  let arr = new Array();
  arr.push(3);

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  // arr.pop();
  // arr.pop();
  // arr.pop();

  // arr.pop();
  // arr.pop();
  // arr.pop();
  // arr.push('tauhida');

  console.log(arr);
  console.log(arr.get(5));
}

main();


/* 

-length 1, cap 3, ptr 0

-length 6, cap 12, ptr 3
length is 6 because we push 6 elements, ptr was pushed 3 because it is the next available spot
the capcity was exceeded so it follows the size ratio and triples while maintaining the original
capacity to make 12. 

-length was reduced by 3 from the 3 pops.  the capcity and pointer are uneffected

-the result is NAN since the element we pushed was a string and the memory on accepts Float64Array(1024).

-resize is used to adjust the capcity and moves the pointer where there is the next available space.
*/