// Operadores 

// Operadores aritmeticos
let a = 5
let b = 10
let c = a + b
console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo ES EL RESTO DE UNA DIVISION
console.log(a ** b) // Exponente

// Incremento 
a++
console.log(a)

// Decremento
b--
console.log(b)

// Operadores de Asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación
console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == 6) // Igualdad por valor
console.log(a == "6") // Igualdad por valor
console.log(a == a)
console.log(a === a) // Igualdad por identidad  (valor e tipo)
console.log(a === "6") // Igualdad por valor y tipo

console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por valor y tipo
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Thruthy values (valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null 
// undefined
// NaN
// El bolean false
// "" (una cadena de texto vacia)

// Operadores logicos

// and &&
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 < 10 && 15 > 20 && 30 > 40)

// or ||
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 < 10 || 15 > 20 || 30 > 40)

console.log(5 < 10 && 15 > 20 || 30 < 40)

// not !
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores de ternarios

const isRaining = false

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")