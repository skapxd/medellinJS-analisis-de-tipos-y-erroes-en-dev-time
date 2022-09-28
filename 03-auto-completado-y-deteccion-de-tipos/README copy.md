# [<-](../README.md) 03. Auto completado, detección de tipos y visualización de errores

Imaginemos lo placentero que seria tener los beneficios de `TypeScript` sin tener que migrar el proyecto y añadirle el tipo `any` a todo

Las forma mas rápida de agregar el análisis de tipos es agregando el comentario `// @ts-check` al inicio del fichero

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

Pero esta forma es poco optima para proyectos nuevos, porque se deberá añadir a cada archivo que se cree

Yo recomiendo `jsconfig.json` ya que es portable a otras Herramientas que soporten [LSP](https://microsoft.github.io/language-server-protocol/implementors/tools/), 
 
Para tener un poco mas de detalle sobre que es LSP ir a [stackoverflow](https://stackoverflow.com/questions/68675994/what-is-jsconfig-json#:~:text=a%20JavaScript%20Project.-,The%20jsconfig.,by%20the%20JavaScript%20language%20service)

```json
{
    "compilerOptions": {
        "checkJs": true,
    }
}
```

Hay varias formas de hacer que `vscode` intente analizar los tipos de un fichero, pero yo recomiendo utilizar un archivo de configuración llamado  que se debe añadir en la raíz del proyecto

El archivo debe tener el siguiente contenido 
