// continue : Permite saltarse una iteración de un ciclo antes de que haya terminado el bloque de código.

for (let index = 0; index < 10; index++) {
  if (index === 5) {
    continue // salta esta iteración del ciclo cuando index es 5
  }
  if (index === 3) {
    continue // salta esta iteración del ciclo cuando index es 3
  }
  console.log(index)
}
