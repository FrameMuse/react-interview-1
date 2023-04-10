// Implementation
// ...

const isRecord = (value: unknown): value is Record<string, unknown> => {
  if (typeof value !== "object" || Array.isArray(value)) return false

  return true
}

const asd: unknown = {}
if (isRecord(asd)) {
  asd.a
}

// Tests
console.group("isRecord")
console.log(isRecord({}), " => ", true)
console.log(isRecord([]), " => ", false)
console.log(isRecord(() => {}), " => ", false)
console.log(isRecord(Object), " => ", false)
console.log(isRecord(1), " => ", false)
console.log(isRecord("1"), " => ", false)
console.groupEnd()

export {}
