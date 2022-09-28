# [<-](../README.md) 01 ¿Porque hacerlo? 

Creo que la mejor forma de responder a la pregunta del `¿Porque hacerlo?` es explicar los problemas que resuelve 

## Formateo auto mágico del código con `eslint`, [Ver detalle](../02-formateo-auto-magico-del-codigo/README.md)

```js
let user = {
        age: 23,
    name: 'Manuel',
        address: 'Envigado',
    ig: 'fegge_'
}

user =     0 

    /* user.??? */
```

Antes que nada, sé que el tabulado del código pone nervioso a más de uno, pero esa es la idea, recuerden el titulo `¿Porque hacerlo?`

Podemos arreglar este error de diferentes formas, pero mi favorita es que se arregle de forma auto mágica sin que yo tenga que enterarme 

Para eso, utilizo un paquete de npm que se llama `eslint` y el formateador de código que viene en `vscode`

## Tener un auto completado y detección de tipos decente usando `ts-check`, [Ver detalle](../03-auto-completado-y-deteccion-de-tipos/README.md)


```js
let user = {
    age: 23,
    name: 'Manuel',
    address: 'Envigado',
    ig: 'fegge_'
}

user =     0 

/* user.??? */
```

En este ejemplo, el código de JavaScript es valido, que nos va a sugerir el editor de código?

Nos va a sugerir un método del tipo de dato `Number`? ó, nos va a sugerir una clave del objeto `user`?


## Inyectar tipos a un objeto usando `jsdoc` y `types.d.ts` [Ver detalle](../03-auto-completado-y-deteccion-de-tipos/README.md)

También se puede dar el caso de que sepamos que es lo que estamos manejando y el editor de código no nos pueda ayudar, así que tenemos que inyectarle el tipo de alguna forma

```js
const resp = await fetch('https://skapxd.dev/api/user')
// Nosotros sabemos las propiedades del objeto `user` pero el editor no
const user = await resp.json()

/** user.??? */
```

## Detectar variables nulas con `strictNullChecks`

Imaginemos el siguiente escenario 

```js 
const user = null

const {ig, address, name, age} = user 
```

## Mejorando la legibilidad de los errores con las extensiones `Eslint` y `Error Lens`  

Estas extensiones de `vscode` solo son útiles si se realizan los pasos anteriores

Porque estas extensiones ayudan a mostrar los errores de una forma mas cómoda 

## Rutas `semi-absolutas` como patron de importación de archivos con `jsconfig.json` y el archivo de configuración del compilador de turno

Imaginemos el siguiente escenario donde queremos importar un archivo 

```js
// Ruta relativa
import AnyFile from '../../../../AnyFile.js'

// Ruta semi-absoluta
import AnyFile from '#/AnyFile.js'
```

Utilizar rutas semi-absolutas nos dicen la posición de un archivo en relación a la raíz del proyecto, para mi es mas cómodo hacer las importaciones de esta forma 

### 1. Formateo auto mágico del código -> eslint
### 2. Tener un auto completado decente -> ts-check
### 3. Saber el tipo de una variable (con la mayor exactitud posible) -> ["jsdoc", "types.d.ts"]
### 4. Visualizar los errores de una forma mas cómoda -> plugins vscode = ["Error Lens", "ESlint"]
### 5. Rutas semi-absolutas -> ["compilerOptions.baseUrl", "compilerOptions.paths", "resolve.alias"]
