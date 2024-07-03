// Break : Permite salir de un ciclo antes de que haya terminado su ejecución normal.

for (let index = 0; index < 10; index++) {
  if (index === 5) {
    break // sale del diclo cuando index es 5
  }
  console.log(index)
}
