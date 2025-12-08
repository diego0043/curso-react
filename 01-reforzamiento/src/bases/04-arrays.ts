//definicion de tipo para el array no recomendable mesclar datos
const myArray: (number | string)[] = [1, 2, 3, 4, 5]

//operador spread posible mejor opcion structureClone()
const myArray2 = [...myArray]

myArray2.push(4)

console.log({ myArray, myArray2 })