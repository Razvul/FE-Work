const tablaSah = document.getElementById("tabla-sah")

for (let i = 0; i < 8; i++) {
    if (i % 2 === 1) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 === 0)
                tablaSah.innerHTML += `<li class="patrat patrat-negru"></li>`
            else
                tablaSah.innerHTML += `<li class="patrat"></li>`
        }
    }
    else {
        for (let j = 0; j < 8; j++) {
            if (j % 2 === 0)
                tablaSah.innerHTML += `<li class="patrat"></li>`
            else
                tablaSah.innerHTML += `<li class="patrat patrat-negru"></li>`
        }
    }

}