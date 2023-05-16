let username = localStorage.getItem('user')

const userhtml = document.querySelector('#nameuser')
const fotohtml = document.querySelector('.profile-change img')


user_account()
function user_account(){
    if(username == 'vinicius_santosrc') {
        userhtml.innerHTML = username
        fotohtml.setAttribute('src', "img/vinicius-profile.jpeg")

    }
    else if(username == 'larissa.alves') {
        userhtml.innerHTML = username
        fotohtml.setAttribute('src', "img/larissa-profile.jpeg")
    }
    else {

    }
};

function savethis() {
    localStorage.setItem('planilha', document.querySelector('.planilha').outerHTML)
}

var planilhabanco = localStorage.getItem('planilha')
var planilha = document.querySelector('.planilha')
if(planilhabanco == null) {
    
}
else {
    planilha.innerHTML = planilhabanco
}

function addlinhas() {
    var input1 = document.querySelector('.input1')
    var input2 = document.querySelector('.input2')
    var input3 = document.querySelector('.input3')
    var input4 = document.querySelector('.input4')
    var input5 = document.querySelector('.input5')
    var input6 = document.querySelector('.input6')
    var input7 = document.querySelector('.input7')

    input1.setAttribute('value', input1.value)
    input2.setAttribute('value', input2.value)
    input3.setAttribute('value', input3.value)
    input4.setAttribute('value', input4.value)
    input5.setAttribute('value', input5.value)
    input6.setAttribute('value', input6.value)
    input7.setAttribute('value', input7.value)

    var table = document.querySelector('table')
    var tr = document.createElement('tr')
    cont = 0
        tr.classList = 'linha'

        table.appendChild(tr)
        document.querySelector(`.linha`).innerHTML = `
        <td><input type="text" disabled value="` + input1.value + `"></label></td>
        <td><input type="text" disabled value="` + input2.value + `"></label></td>
        <td><input type="text" disabled value="` + input3.value + `"></label></td>
        <td><input type="text" disabled value="` + input4.value + `"></label></td>
        <td><input type="text" disabled value="` + input5.value + `"></label></td>
        <td><input type="text" disabled value="` + input6.value + `"></label></td>
        <td><input type="text" disabled value="` + input7.value + `"></label></td>`
        cont = cont + 1 
}   