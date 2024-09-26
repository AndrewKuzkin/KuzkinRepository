let setA: Set<Int> = Set(1...10)
let setB: Set<Int> = Set(5...15)

let intersection = setA.intersection(setB)
let union = setA.union(setB)
let difference = setA.subtracting(setB)


let isSubsetA = setA.isSubset(of: setB)
let isSubsetB = setB.isSubset(of: setA)


let symmetricDifference = setA.symmetricDifference(setB)

let isEqual = setA == setB


print("Пересечение: \(intersection)")
print("Объединение: \(union)")
print("Разность: \(difference)")
print("setA является подмножеством setB: \(isSubsetA)")
print("setB является подмножеством setA: \(isSubsetB)")
print("Симметрическая разность: \(symmetricDifference)")
print("Множества равны: \(isEqual)")


