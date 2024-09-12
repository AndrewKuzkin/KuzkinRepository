#Задание 1

let firstString = "I can"
let secondString = "code"
print("\(firstString) \(secondString)!")


#Задание 2

let myAge = 55
let myAgeInTenYears = myAge + 10
let daysInYear = 365.25
let daysPassed: Float = Float(myAgeInTenYears) * Float(daysInYear)

print("Мой возраст \(myAge) лет. Через 10 лет, мне будет \(myAgeInTenYears) лет, с момента моего рождения пройдет \(daysPassed) дней.")


#Задание 3

import Foundation

let AC = 8.0
let CB = 6.0

let h = sqrt(AC * AC + CB * CB)
let a = (AC * CB) / 2
let p = AC + CB + h

print("Площадь треугольника: \(a)")
print("Периметр прямоугольного треугольника: \(p)")
