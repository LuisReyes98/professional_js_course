// Funciones

function add(a:number, b:number): number {
  return a + b;
}

const sum = add(4,6)

function createAdder(a:number): (number) => number {
  return function (b:number) : number {
    return b + a
  }
}

const addFour = createAdder(4)

const fourPlusSix = addFour(6)

function fullName(firstName:string, lastName: string = 'Smith', middleName?: string): string { // ?: permite que sea nulo el valor
  return `${firstName} ${lastName}`
}

const richard = fullName('Agente')
console.log(richard)