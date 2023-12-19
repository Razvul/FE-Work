let initialValues = [1, 4, 8, 9, false, "Herou", null, 15, true, 16, ["Horde", "Alliance"]]
let otherValues = [3,5,7, true, 11, 13, "Fight"]

console.log(initialValues)
console.log(otherValues)


for(let i = 0; i < otherValues.length; i++){
    initialValues.push(otherValues[i])
}
console.log(initialValues)

for(let i = 0; i < initialValues.length; i++){
    if(typeof initialValues[i] === "number"){
        console.log(initialValues[i] * 2)
    }
}

for(let i = 0; i < initialValues.length; i++){
    if(typeof initialValues[i] === "number"){
        initialValues[i] *= 10
    }
    if(typeof initialValues[i] === "string"){
        initialValues[i] += " happy codding"
    }
    if(typeof initialValues[i] === "boolean"){
        initialValues[i] = !(initialValues[i])
    }
}
console.log(initialValues)