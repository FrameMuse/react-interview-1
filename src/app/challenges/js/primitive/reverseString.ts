// Data
const testString = "This is a string to be reversed."
const expectedString = ".desrever eb ot gnirts a si sihT"

// Implementation
// ...

// Tests

const reverseString = (str: string): string => {
  return str.split("").reverse().join("")
}
console.group("reverseString")
console.log(reverseString(testString), " => ", expectedString)
console.groupEnd()

export {}
