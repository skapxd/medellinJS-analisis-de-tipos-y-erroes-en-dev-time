# [<-](../README.md) 03. Auto completado, detección de tipos y visualización de errores

```js
// @ts-check /* <--- Como se muestra en esta parte */
let user = {
    age: 23,
    ig: 'fegge_'
    name: 'Manuel',
    address: 'Envigado',
}

user = 0 

/* user.??? */
```

## Creando el jsconfig.json

```json
{
    "compilerOptions": {
        "checkJs": true,
    }
}
```

## Desestructurando Nulos?

```js
const user = null

const {age, ig, name, address} = user
```