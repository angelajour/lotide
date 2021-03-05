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

const assertEqual = function(actual, expected) {
  //return (actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 3]), false); 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
