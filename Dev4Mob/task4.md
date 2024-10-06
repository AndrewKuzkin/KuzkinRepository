Вариант 6
Написать функцию, которая вычисляет площадь и периметр эллипса по заданным полуосям.
Написать функцию, которая принимает опциональный массив строк и возвращает количество строк, начинающихся с гласной, если массив не nil, иначе возвращает 0.
Написать функцию, которая принимает кортеж из трех массивов чисел и возвращает массив, состоящий из попарных произведений элементов.
Написать функцию, которая принимает кортеж из двух массивов чисел и возвращает массив, состоящий из попарных произведений элементов. Затем написать цикл, который сортирует этот массив по возрастанию и выводит только уникальные значения.
Написать функцию, которая принимает массив строк и возвращает массив строк, отсортированных в алфавитном порядке.


// 1. Функция для вычисления площади и периметра эллипса
func ellipseAreaAndPerimeter(a: Double, b: Double) -> (area: Double, perimeter: Double) {
    let area = Double.pi * a * b
    let perimeter = Double.pi * (3 * (a + b) - sqrt((3 * a + b) * (a + 3 * b)))
    return (area, perimeter)
}

// 2. Функция для подсчета строк, начинающихся с гласной
func countStringsStartingWithVowel(_ strings: [String]?) -> Int {
    guard let strings = strings else { return 0 }
    let vowels = Set("AEIOUaeiou")
    return strings.filter { !$0.isEmpty && vowels.contains($0.first!) }.count
}

// 3. Функция для попарных произведений элементов трех массивов
func pairwiseProductsOfThreeArrays(arrays: ([Int], [Int], [Int])) -> [Int] {
    var result = [Int]()
    
    let (array1, array2, array3) = arrays
    
    for i in 0..<min(array1.count, array2.count, array3.count) {
        result.append(array1[i] * array2[i] * array3[i])
    }
    
    return result
}

// 4. Функция для попарных произведений элементов двух массивов и сортировка уникальных значений
func uniqueSortedProductsOfTwoArrays(arrays: ([Int], [Int])) -> [Int] {
    let (array1, array2) = arrays
    var products = [Int]()
    
    for i in 0..<min(array1.count, array2.count) {
        products.append(array1[i] * array2[i])
    }
    
    let uniqueProducts = Array(Set(products)).sorted()
    return uniqueProducts
}

// 5. Функция для сортировки массива строк в алфавитном порядке
func sortStringsAlphabetically(_ strings: [String]) -> [String] {
    return strings.sorted()
}


//Вызовы функций
let ellipse = ellipseAreaAndPerimeter(a: 5, b: 3)
print("Ellipse Area: \(ellipse.area), Perimeter: \(ellipse.perimeter)")

let stringsArray: [String]? = ["apple", "banana", "orange", "umbrella", "grape"]
let vowelCount = countStringsStartingWithVowel(stringsArray)
print("Count of strings starting with a vowel: \(vowelCount)")

let productsOfThree = pairwiseProductsOfThreeArrays(arrays: ([1, 2, 3], [4, 5, 6], [7, 8, 9]))
print("Pairwise products of three arrays: \(productsOfThree)")

let uniqueSortedProducts = uniqueSortedProductsOfTwoArrays(arrays: ([1, 2, 3], [4, 5, 6]))
print("Unique sorted products of two arrays: \(uniqueSortedProducts)")

let sortedStrings = sortStringsAlphabetically(["banana", "apple", "orange"])
print("Sorted strings: \(sortedStrings)")


