function dinamic() {

  array = [0, 0, 0]

  for (let i = 0; i < array.length; i++ ) {
    array[i] = parseInt(Math.random() * 3 + 1)
  }

  if (array[0] == array[1] && array[0] == array[2]) {
    console.log("Porta 1: aberta")
  } else {
    console.log("Tente de novo")
  }

  return array
}
