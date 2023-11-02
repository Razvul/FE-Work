let listaNumere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numaiNumerePare = listaNumere.every((numar, index, arr) => {
    if (numar % 2 === 0) {
        return true
    } else {
        return false
    }
})
console.log(numaiNumerePare)

listaNumere.forEach(numar => {
    console.log(numar)
})

let sumaNumere = listaNumere.reduce((suma, numar) => {
    return suma + numar
}, 0)
console.log(sumaNumere)

let produsNumere = listaNumere.reduce((suma, numar) => {
    return suma * numar
}, 1)
console.log(produsNumere)