# Curso de JS Profesional

## Iniciar server

```shell
npm start
```

## Proxys

son handlers o trampas en el codigo para capturar una llamada a una funcion
utiliza handlers y targets en un objeto para controlar los llamados a los atributos y funciones de ese objeto

## Generators

No son funciones normales ya que deben ser asignadas a una variable para que sean construidas
syntaxis de declaracion

```javascript
    function* (params) {
        yield;
        yield 2;
    }
```

al declarar el generador como

```javascript
const gen = simpleGenerator()
```

al llamarse next en la funcion

```javascript
gen.next();
```

esta ejecutara el codigo hasta el primer yield que encuentre y devolvera un diccionario con `value` y `done` donde `value` es el valor que retorna yield

## Getters y Setters

permite crear propiedades virtuales dentro de un objeto, cuyo comportamiento es igual al de las propiedades del objeto en syntaxis

```javascript
const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
        return this.media.muted;
    },
    set muted(value){
        this.media.muted = value;
    }
};
```

en el ejemplo la propiedad `muted` puede ser llamada `player.muted` e igualisada `player.muted = true` sin ningun problema

## Promesas

Son la promesa de que eventualmente se ejecutara un pedaso de codigo tras la finalizacion de una tarea

```javascript
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  console.log(people);
});
```

## Async await

mediante el uso de funciones asincronas se frena la ejecucion del condigo hasta que el await alla concluido su ejecucion

```javascript
async function getMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
```
