# [<-](../README.md) 01 ¿Porque hacerlo? 

Antes de entrar en detalle de como se usa, voy a explicar los problemas que resuelve 

## `ts-check` y `eslint`

```js
let user = {
        age: 23,
    name: 'Manuel',
        address: 'Envigado'
}

user =     0 

    /* user.??? */
```

Antes que nada, sé que el tabulado del código pone nervioso a más de uno, pero esa es la idea, recuerden el titulo `¿Porque hacerlo?`

En este ejemplo, el código de JavaScript es valido, pero sabemos que algo no anda bien.

Que nos va a sugerir el editor de código?

Nos va a sugerir un método del tipo de dato `Number`? ó, nos va a sugerir una clave del objeto `user`?

## `jsdoc` y `types.d.ts`

También se puede dar el caso de que sepamos que es lo que estamos manejando y el editor de código no nos pueda ayudar, así que tenemos que inyectarle el tipo de alguna forma

```js
const resp = await fetch('https://skapxd.dev/api/user')
// Nosotros sabemos que propiedades tiene el objeto `user` pero el editor no
const user = await resp.json()

/** user.??? */
```

### 1. Tener un auto completado decente -> ts-check
### 2. Formateo auto mágico del código -> eslint
### 3. Saber el tipo de una variable (con la mayor exactitud posible) -> ["jsdoc", "types.d.ts"]
### 4. Visualizar los errores de una forma mas cómoda -> plugins vscode = ["Error Lens", "ESlint"]
### 5. Rutas semi-absolutas -> ["compilerOptions.baseUrl", "compilerOptions.paths"]