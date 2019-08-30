# Notas de la clase

- La ética

```html
        <script></script>
```

detiene la ejecución del DOM hasta que se ejecute todo su código, no carga mas HTML

- El atributo **async**

```html
        <script async src="index.js"></script>
```

en una declaración de script externo permite que el script se descargue mientras el DOM se sig
ue ejecutando , pero el DOM se deja de ejecutar para ejecutar el script una vez la descarga a terminado

- El atributo **defer**

```html
        <script defer src="index.js"></script>
```

igual que async permite la descarga asincrono del script pero este no se ejecutara hasta que la cargar del DOM se alla ejecutado en su totalidad.

## Herencia

En javascript la herencia se maneja median los prototipos de una variable , estas poseeran un prototipo en el cual javascript buscara metodos y atributo de no ser encontrados en los primeros, e ira bajando al prototipo del prototipo hasta llegar a undefined y retornar que el atributo no fue encontrado.
