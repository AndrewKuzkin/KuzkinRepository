##1
let userInfo = (name: "Andrew", age: 54, favoriteNumber: 3)
print("Имя: \(userInfo.name)" Возраст: \(userInfo.age) Любимое число: \(userInfo.favoriteNumber))

##2
//Проинициализируем, чтобы явно не задавать типы
let hasTicket = true
let isAdult = true
let isRegistered = false
let isVIP = false

// Искомое Логическое выражение :
let AccessConference = (hasTicket && isAdult && (isRegistered || isVIP))
