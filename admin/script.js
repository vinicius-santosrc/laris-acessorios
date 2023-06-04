let username = localStorage.getItem('user')

const userhtml = document.querySelector('#nameuser')
const fotohtml = document.querySelector('.profile-change img')

const fotominiprofile = document.querySelector('.account-show img')
const nomeminiprofile = document.querySelector('.infoaccount h1')
const userminiprofile = document.querySelector('.infoaccount p')

function sairdoprofile() {
    localStorage.setItem('continue', username)

    localStorage.removeItem('user')
    localStorage.removeItem('login')
    window.location.href = 'login.html'

}

user_account()
function user_account(){
    if(username == 'vinicius_santosrc') {
        userhtml.innerHTML = username

        fotohtml.setAttribute('src', "img/vinicius-profile.jpeg")


        nomeminiprofile.innerHTML = `Vinícius Santos`
        userminiprofile.innerHTML = `@` + username
        fotominiprofile.setAttribute('src', "img/vinicius-profile.jpeg")

    }
    else if(username == 'larissa.alves') {
        userhtml.innerHTML = username
        fotohtml.setAttribute('src', "img/larissa-profile.jpeg")

        nomeminiprofile.innerHTML = `Larissa Alves`
        userminiprofile.innerHTML = `@` + username
        fotominiprofile.setAttribute('src', "img/larissa-profile.jpeg")
    }
    else {

    }
};

if(username == 'vinicius_santosrc') {
    document.querySelector('.form-profile img.fotoperfilprofile').setAttribute('src', 'img/vinicius-profile.jpeg')
    document.querySelector('.titleprofile h1.nameuser').innerHTML = `Vinícius Santos`
    document.querySelector('.titleprofile p.user').innerHTML = '@' + localStorage.getItem('user')

    document.querySelector('p.nomecompleto').innerHTML = `<b>Nome completo:</b> Vinícius da Silva Santos`
    document.querySelector('p.cpf').innerHTML = `<b>CPF:</b> Não informado`
    document.querySelector('p.funcao').innerHTML = `<b>Função:</b> Sócio/Designer/Engenheiro do Software`
}

else if(username == 'larissa.alves') {
    document.querySelector('.form-profile img.fotoperfilprofile').setAttribute('src', 'img/larissa-profile.jpeg')
    document.querySelector('.titleprofile h1.nameuser').innerHTML = `Larissa Alves`
    document.querySelector('.titleprofile p.user').innerHTML = '@' + localStorage.getItem('user')

    document.querySelector('p.nomecompleto').innerHTML = `<b>Nome completo:</b> Larissa Alves de Andrade Moreira`
    document.querySelector('p.cpf').innerHTML = `<b>CPF:</b> Não informado`
    document.querySelector('p.funcao').innerHTML = `<b>Função:</b> Fundadora/Gerente`
}

function openmenuprofile() {
    var menu = document.querySelector('.menu-profile-change')
    menu.style.display = 'block'

    var background = document.querySelector('.backgrond')

    background.style.display = "block"
}   

function fecharmenuprofile() {
    var menu = document.querySelector('.menu-profile-change')
    menu.style.display = 'none'

    var background = document.querySelector('.backgrond')

    background.style.display = "none"
    document.querySelector('.notifications').style.display = 'none'

    document.querySelector('.fixed-bar-left-mobile').style.display = 'none'
}

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

function notificacaoopen() {
    var background = document.querySelector('.backgrond')
    document.querySelector('.notifications').style.display = 'block'
    background.style.display = 'block'
}

function fecharnotification() {
    var background = document.querySelector('.backgrond')
    background.style.display = 'none'
    document.querySelector('.notifications').style.display = 'none'
}