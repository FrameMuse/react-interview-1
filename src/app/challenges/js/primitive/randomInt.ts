// Implementation
// ...

// Tests

const randomInt = (start: number, end?: number) => {
  if (end === undefined) {
    return Math.floor(Math.random() * start)
  }

  const number = Math.floor(Math.random() * end)

  return number >= start ? number: number + start
}

console.group("randomInt")
console.log(randomInt(10), " => ", "from 0 to 10")
console.log(randomInt(5, 10), " => ", "from 5 to 10")
console.log(randomInt(10, 100), " => ", "from 10 to 100")
console.groupEnd()

export {}
