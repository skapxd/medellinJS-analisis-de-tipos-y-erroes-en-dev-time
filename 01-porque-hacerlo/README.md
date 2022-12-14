# [<-](../README.md) 01 ¿Porque hacerlo? 

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

## Inyectar tipos a un objeto usando `jsdoc` y `types.d.ts` [Ver detalle](../03-auto-completado-y-deteccion-de-tipos/README.md)

```js
const resp = await fetch('https://skapxd.dev/api/user')
// Nosotros sabemos las propiedades del objeto `user` pero el editor no
const user = await resp.json()

/** user.??? */
```

## Detectar variables nulas con `strictNullChecks`

```js 
const user = null

const {ig, address, name, age} = user 
```

## Mejorando la legibilidad de los errores con las extensiones `Eslint` y `Error Lens`  

## Rutas `semi-absolutas` como patron de importación de archivos con `jsconfig.json` y el archivo de configuración del compilador de turno

```js
// Ruta relativa
import AnyFile from '../../../../AnyFile.js'

// Ruta semi-absoluta
import AnyFile from '#/AnyFile.js'
```

### 1. Formateo auto mágico del código -> eslint
### 2. Tener un auto completado decente -> ts-check
### 3. Saber el tipo de una variable (con la mayor exactitud posible) -> ["jsdoc", "types.d.ts"]
### 4. Visualizar los errores de una forma mas cómoda -> plugins vscode = ["Error Lens", "ESlint"]
### 5. Rutas semi-absolutas -> ["compilerOptions.baseUrl", "compilerOptions.paths", "resolve.alias"]
