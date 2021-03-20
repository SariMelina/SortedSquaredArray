function sortedSquaredArray(array) {
  const newArray = array.map((x) => {
    return x * x
  })
  return newArray;
}

const array = [1,2,3,5,6,8,9]
console.log(`[${sortedSquaredArray(array)}]`);

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;