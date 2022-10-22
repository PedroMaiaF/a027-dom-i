const frutas = ["laranja", "limão", "uva"];
// Para editar o arquivo HTML por meio DOM - através do "id":
// let editarFrutas = document.getElementById("lista-de-frutas")
let editarFruta1 = document.getElementById("fruta-1")
let editarFruta2 = document.getElementById("fruta-2")
let editarFruta3 = document.getElementById("fruta-3")


// Para concatenar(adicionar ao que já existe):
// editarFrutas.innerHTML = editarFrutas.innerHTML + frutas
editarFruta1.innerHTML = editarFruta1.innerHTML + frutas[0]
editarFruta2.innerHTML = editarFruta2.innerHTML + frutas[1]
editarFruta3.innerHTML = editarFruta3.innerHTML + frutas[2]


let lerValorElementoFruta4 = document.getElementById("fruta-4")
lerValorElementoFruta4.innerHTML
console.log(lerValorElementoFruta4.innerHTML)

function printarInput() {
    let printInput = document.getElementById("FrutaAd")
    console.log(printInput.value)
}

function mostraInput() {
    let valorInseridoParaFruta4 = document.getElementById("FrutaAd")
    let valorInnerPadraoFruta4 = document.getElementById("fruta-4")
    valorInnerPadraoFruta4.innerHTML += valorInseridoParaFruta4.value
    console.log(valorInseridoParaFruta4.value)
}
