const firstSentence = "Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing."
const secondSentence = "Andrei are un salariu de 1000 euro/luna , un bonus de 9000 lei/an si mai castiga suplimentar aproximativ de 500 usd/luna din freelancing."

function computeIncome(unString) {
    const arrayString = unString.split(" ")
    console.log(arrayString)
    let listaSumeString = arrayString.filter((suma) => {
        if (Number(suma)) {
            return +suma
        }
    })
    console.log(listaSumeString)
    let listaSumeNumar = listaSumeString.map(numar => {
        return +numar
    })
    console.log(`Sumele initiale ${listaSumeNumar}`)

    let listaValute = []
    for (let i = 0; i < arrayString.length; i++) {
        if (Number(arrayString[i]))
            listaValute.push(arrayString[i + 1].split("/"))
    }
    console.log("Lista valute este: ", listaValute)

    for (let i = 0; i < listaValute.length; i++) {
        if (listaValute[i][0].toLowerCase() === 'euro') {
            listaSumeNumar[i] *= 4.97
        } else if (listaValute[i][0].toLowerCase() === 'usd') {
            listaSumeNumar[i] *= 4.7
        }
    }
    console.log(`Sumele dupa conversie ${listaSumeNumar}`)

    for (let i = 0; i < listaValute.length; i++) {
        if (listaValute[i][1].toLowerCase() === 'luna') {
            listaSumeNumar[i] = 12 * listaSumeNumar[i]
        }
    }
    console.log(`Sumele pe tot anul ${listaSumeNumar}`)

    let sumaAnuala = listaSumeNumar.reduce((suma, numar) => {
        return suma + numar
    }, 0)
    console.log(sumaAnuala)

    console.log(`Venitul anual al lui ${arrayString[0]} este de ${sumaAnuala}`)
}

computeIncome(firstSentence)
computeIncome(secondSentence)