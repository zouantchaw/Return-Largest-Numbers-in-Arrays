// Return an array consisting of the largest number from each provided sub-array.


function largestOfFour(arr) {
  let largestNumArr = []
  arr.forEach(innerArr => {
    largestNumArr.push(Math.max(...innerArr))
  })
  return largestNumArr
}

// using map()
function largestOfFour2(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

// declarative approach
function largestOfFour3(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}

largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);