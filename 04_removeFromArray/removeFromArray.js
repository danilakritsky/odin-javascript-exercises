const removeFromArray = function(array, ...args) {
  
  for (const item of args) {
    const index = array.indexOf(item);
    if (index != -1) {
      array.splice(index, 1);
    }
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;
