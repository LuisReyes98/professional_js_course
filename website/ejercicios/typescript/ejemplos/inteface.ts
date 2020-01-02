// Interfaces

enum Color {
  Rojo = "Rojo",
  Verde = "Verde"
}

//las interfaces definen propiedades de forma exacta
interface Rectangulo {
  ancho: number
  alto: number
  color?: Color //argumento opcional
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo
}

function area(r:Rectangulo) {
  return r.alto * r.ancho
}

const areaRect = area(rect)

console.log(areaRect)

rect.toString = function () {
  return this.color ? `un rectangulo ${this.color}` : `Un rectangulo sin color`
}

console.log(rect.toString())