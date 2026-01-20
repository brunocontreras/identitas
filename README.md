# Identitas

## Para compilar el proyecto

Versión de node: 16.20.2 (última de v16)
Instalación de dependencias con yarn: 1.22.22

`yarn install`
`yarn electron:build`
`yarn electron:serve`

## Documentación oficial

Página con la documentación: https://identitas.netlify.app/

## Para añadir un curso nuevo.

1. Nombre del curso y añadirlo en el fichero `identitas.js`
2. Imagen en la carpeta `/src/assets/img` con dimensiones 2000x2000

## Comentarios

- No he conseguido hacerlo funcionar con el npm de la versión de node
- Se han eliminado las DevTools de Vue porque hay un problema con la dependencia que instala la extensión de chrome.

# Creación de los ejecutables

Se han dejado de utilizar appveyor y travis para crear los ejecutables de windows y mac. Ahora se utiliza Github Actions.