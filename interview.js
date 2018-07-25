
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
  
}

