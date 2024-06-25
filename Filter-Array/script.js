// Filter Array: Implement a function that filters out element from an array base on a given condition.
function filteredArr() {
    const arr = [2,5,4,9,10,1]
    const filter = arr.filter(item => item > 2);
    return filter;
  }
  console.log(filteredArr());