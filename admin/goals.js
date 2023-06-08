let meta_anual = document.querySelector('#anual')
let meta_mes = document.querySelector('#mensal')

function newanualmeta() {
    localStorage.setItem('meta_anual', meta_anual.value)
}
function newmesmeta() {
    localStorage.setItem('meta_mes', meta_mes.value)
}

meta_anual.value = localStorage.getItem('meta_anual')
meta_mes.value = localStorage.getItem('meta_mes')