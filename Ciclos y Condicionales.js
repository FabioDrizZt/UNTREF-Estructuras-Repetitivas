// Cuando no sepamos las veces que vamos a repetir, PERO si sabemos que al menos se repite una vez
// Juego del numero secreto
const prompt = require('prompt-sync')({ siging: true })

const nroSecreto = Math.round(Math.random() * 100)
const intentosMax = 5
let intentos = 0
let nroUsuario
do {
  nroUsuario = parseInt(prompt('adivine el numero: '))
  if (nroUsuario > nroSecreto) {
    console.log('El numero secreto es menor')
  } else if (nroUsuario < nroSecreto) {
    console.log('El numero secreto es mayor')
  }
  intentos++
} while (nroUsuario !== nroSecreto && intentos < intentosMax)
// Verificamos si se gano o se acabaron los intentos
if (intentos === intentosMax) {
  console.log('Se te acabaron los intentos')
} else {
  console.log('Ganaste')
}
