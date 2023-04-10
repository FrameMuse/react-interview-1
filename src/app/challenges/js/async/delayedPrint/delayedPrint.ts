const printWithDelay = async (): Promise<void> => {
  for (let i = 1; i <= 10; i++) {
    const promise = new Promise<void>(resolve => {
      setTimeout(() => console.log("index", i), 1000 * i)
      resolve()
    })

    await promise
  }
}
console.group("printWithDelay")
// printWithDelay()
console.groupEnd()

export {}
