const capacitateCilindrica = prompt("Introduceti capacitatea cilindrica")
let impozit

if(capacitateCilindrica <= 1600){
    impozit = capacitateCilindrica / 200 * 8
}
else if(capacitateCilindrica > 1600 && capacitateCilindrica <= 2000){
    impozit = capacitateCilindrica / 200 * 22
}
else if(capacitateCilindrica > 2001 && capacitateCilindrica <= 2601){
    impozit = capacitateCilindrica / 200 * 85
}
else if(capacitateCilindrica > 2601 && capacitateCilindrica <= 3000){
    impozit = capacitateCilindrica / 200 * 171
}
else if(capacitateCilindrica > 3000){
    impozit = capacitateCilindrica / 200 * 345
}
console.log(`Impozitul pentru capacitatea cilindrica de ${capacitateCilindrica} este de ${impozit} lei`)