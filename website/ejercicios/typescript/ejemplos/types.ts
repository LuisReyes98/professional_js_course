// console.log('Hello typescript')

// function add(a:number, b:number) {
//     return a + b
// }

// const sum = add(2,3)

// console.log(sum)

// Boolean
let muted: boolean = true
muted = false

// Numeros
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

// String
let nombre: string = 'Richard'
let saludo = `Me llamo ${nombre}`

// arreglos
let people: string[] = []
people = ["Isable", "Nicol", "Raul"]

people.push("2")

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push("Rogelio")
peopleAndNumbers.push(300000000)

// Enum
enum Carro {
    Grande,
    Small
}

// enum Color {
//     Rojo = "Rojo",
//     Verde = "Verde",
//     Azul = "Azul"
// }

let colorFavorito: Color = Color.Verde

console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let joker: any = "Joker"

joker = { type: 'WildCard' }

// Object

let someObject: object = { type: 'WildCard' }