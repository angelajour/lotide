const eqArrays = function(first, second) {
  if (first.length !== second.length) {
   return false;
  }
for (let i=0; i < first.length; i++) {
  if (first[i] !== second[i]) {
    return false; 
  }
} return true;
};
  

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual("Lighthouse Labs", 1);
assertArraysEqual(1, 1);