
function spaceReplace (str){
  return str.replace(' ', '%20');
}

console.log(spaceReplace('tauhida parveen'));

// O(1)


function removeLessFive (arr) {
  let arr2=[];
  for (let i=0; i<arr.length; ++i){
    if(arr[i]>=5){
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(removeLessFive([4,6,-3,5,-2,1]));

// O(n)


function maxSum(arr){
  let currentSum=0;
  let currentMax=0;
  for(let i=0; i<arr.length; i++){
    currentSum=0;
    for (let j=i; j<arr.length; j++){
      currentSum += arr[j];
      if(currentSum > currentMax){
        currentMax = currentSum;
      }
    }
  }
  return currentMax;
}

console.log(maxSum([-20,4,6,-3,5,-2,3,2000]));

// O(n^2)

function mergeArr (arr1, arr2){
  let arr3= arr1.concat(arr2);

  return arr3.sort(function(a, b) {
    return a - b;
  });
}

// O(n)

console.log(mergeArr([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));


function removeChar (str,rem){
  for(let i=0; i<str.length; i++){
    for(let j=0; j<rem.length; j++){
      if(str[i]===rem[j])
        str=str.replace(str[i],'');
    }
  }
  return str;
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// O(n^2)


function arrProducts (arr){
  let arr3=[];
  for(let i=0; i<arr.length;i++){
    let arr2=arr.filter(index=>index!== arr[i]);
    arr3.push(arr2.reduce(function(a,b){return a*b;})); 
  }
  return arr3;
}

console.log(arrProducts([1, 3, 9, 4]));

// O(n)


function twoDArray (arr){
  let columnsToZero=[];
  let rowsToZero=[];

  for(let i=0; i<arr.length;i++){
    if(arr[i].includes(0)){rowsToZero.push(i);}
    for(let j=0; j<arr[i].length; j++){
      if (arr[i][j]===0){columnsToZero.push(j);}
    }
  }

  for(let i=0; i<arr.length;i++){
    for(let j=0; j<arr[i].length; j++){
      if (rowsToZero.includes(i) || columnsToZero.includes(j)){
        arr[i][j]=0;
      }
    }
  }
  
  return arr;
}

console.log(twoDArray(
  [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
  ]
));

// O(2^n)



// function strFlipped (str1,str2){
//   let str3= str2.split('').reverse().join('');
//   if(str3===str1){return true;}
//   else{return false;}
// }

// console.log(strFlipped('amazon', 'azonma'));
// console.log(strFlipped('amazon', 'nozama'));


function strRotation(str1,str2){
  let str3= str2+str2;
  if(str3.includes(str1)){
    return true;
  }
  else{return false;}
}

console.log(strRotation('amazon', 'azonma'));
console.log(strRotation('amazon', 'azonam'));

// O(1)