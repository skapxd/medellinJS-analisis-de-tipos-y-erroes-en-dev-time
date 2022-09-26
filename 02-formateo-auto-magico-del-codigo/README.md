# [<-](../README.md) 02 Formateo auto mágico del código    

## 01. Instalar `eslint` como paquete de npm

```sh
npm i eslint -D
```

## 02. Realizar la configuración `standard` de eslint

```sh
npx eslint --init
```

## 03 Instalar la extensión `Eslint`

Pegar `dbaeumer.vscode-eslint` en el buscador de extensiones e instalar

## 04 Permitir que la extension de `Eslint` formatee el código

Ingresar a la configuración de la extension y buscar `Eslint > Format: Enable` y cambiarle el valor a `true`

## 05 Establecer a `Eslint` como formateador de código por defecto

Abrir la paleta de comando y buscar "> format document with" y seleccionar `Eslint` 