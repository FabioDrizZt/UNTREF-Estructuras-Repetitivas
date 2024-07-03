// Cuando no sepamos la cantidad de veces a iterar
// se puede usar un while
let index = 1
while (index <= 10) {
  console.log(index)
  index++
}
// Juego del numero secreto
const prompt = require('prompt-sync')({ siging: true })

const nroSecreto = Math.round(Math.random() * 10)
let nroUsuario = null
while (nroUsuario !== nroSecreto) {
  if (nroUsuario !== null) {
    console.log('Perdiste')
  }
  nroUsuario = parseInt(prompt('adivine el numero: '))
}
console.log('Ganaste')
