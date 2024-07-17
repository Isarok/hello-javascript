// Strings 

// Concatenar strings

let myName = "Isaac"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud de una cadena de texto

console.log(greeting.length)

// Acceder a una letra de una cadena de texto

console.log(greeting[0])
console.log(greeting[11])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Isaac"))
console.log(greeting.indexOf("IsaacDev"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Isaac"))
console.log(greeting.includes("IsaacDev"))

console.log(greeting.slice(0, 10))
console.log(greeting.replace("Isaac", "IsaacDev"))

// Template Literals (Plantillas Literales)

let message = `Hola, 
este
es
mi
primer 
mensaje!`

console.log(message)

console.log("Hola, " + myName + "!")

let email = `isaac.lucerito@gmail.com`

console.log(`Hola, ${myName}! tu email es ${email}`)


