const flatten = require('./flatten');
function sumItems(array) {
  // Sum all the numbers in the array
  if(array.length === 0) {
    return 0;
  }
  let myArr = flatten(array);
  return  myArr[0] + sumItems(myArr.slice(1));
}

module.exports = sumItems;