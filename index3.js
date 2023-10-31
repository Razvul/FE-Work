const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let suma1 = 0
for (let i = 0; i < lista1.length; i++) {
    suma1 += lista1[i]
}
console.log(suma1 / lista1.length)

const lista = [3, 15, 42, true, 19, "pizza", 27, false, 33]
let suma2 = 0

for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] === "number") {
        suma2 += lista[i]
    }
}
console.log(suma2)

let numarTotal = 20
let numar1 = 1
let numar2 = 2
let termen1 = 0
let termen2 = 0

for (let i = 1; i <= numarTotal; i++) {
    if (i === 1) {
        termen1 = i
        console.log(1)
    }
    else if (i === 2) {
        termen2 = i
        console.log(i)
    }
    else {
        console.log(i - 1 + i)
    }
}