// Data
const testString = "The moon isn't a planet, this is a satellite."
const expectedString = "Th mn sn't  plnt, ths s  stllt."

// Implementation
// ...

// Tests

const replaceVowels = (str: string) => {
  const regExp = new RegExp("[eyuioa]", "gm")

  return str.replaceAll(regExp, "")
}

console.group("replaceVowels")
console.log(replaceVowels(testString), " => ", expectedString)
console.groupEnd()

export {}
