// Cuando no sepamos las veces que vamos a repetir, PERO si sabemos que al menos se repite una vez
// Juego del numero secreto
const prompt = require('prompt-sync')({ siging: true })

const nroSecreto = Math.round(Math.random() * 10)
let nroUsuario
do {
  nroUsuario = parseInt(prompt('adivine el numero: '))
} while (nroUsuario !== nroSecreto)
console.log('Ganaste')
