1.
var numbers: [Int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
2.
var isTen = (numbers.count == 10)

3.
numbers.append(11)
numbers.append(12)
numbers.append(13)

4.
numbers.remove(at: 0)

5.
if numbers.count > 4 {
    numbers.remove(at: 4)

6.
if numbers.count >= 4 {
    numbers.insert(15, at: 4)

7.
if !numbers.isEmpty {
    numbers.removeLast()

8.
numbers.removeAll()



