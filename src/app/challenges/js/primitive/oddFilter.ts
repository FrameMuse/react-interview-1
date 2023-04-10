// Data
const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const expectedArray = [0, 2, 4, 6, 8]

// Implementation
// ...

// Tests

const oddFilter = (array: number[]) => {
  return array.filter(element => element % 2 === 0)
}

console.group("oddFilter")
console.log(oddFilter(testArray), " => ", expectedArray)
console.groupEnd()

export {}
