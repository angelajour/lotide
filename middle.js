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
  if (eqArrays(array1, array2)) 
    console.log(`✅  Assertion passed: ${array1} === ${array2}`);
   else 
    console.log(`🛑  Assertion failed: ${array1} !== ${array2}`);
  };

  const middle = function(array) {

    if (array.length <= 2) {
      return [];

    } else if (array.length % 2 === 0) {
      return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
   
    } else {

      return [array[Math.floor(array.length / 2)]];
    }

};

middle("Lighthouse Labs", 1, 3);
middle(1, 1, 3);