let nomeuser = ''

//DETECTOR LOGIN

function loginrequired() {
    if(localStorage.getItem('login') == 'true') {

    }
            else {
                window.location.href = 'login.html'
            }
}

//CHECAR SE HÁ APARÊNCIA DEFINIDA E MUDAR PARA OS MODOS RESPECTIVOS

if(localStorage.getItem('aparencia') == 'escura') {
    document.querySelector('html').classList.toggle('darkmode')
}
else if(localStorage.getItem('aparencia') == 'clara') {
    document.querySelector('html').classList.remove('darkmode')
}
if(localStorage.getItem('aparencia') == null) {
    localStorage.setItem('aparencia', 'clara')
}

//AUTO APARENCIA

if(localStorage.getItem('auto-aparencia') == 'true') {
    let data = new Date()
    let hora = data.getHours()

    if(hora >= 0 && hora < 7) {
        localStorage.setItem('aparencia', 'escura')
        console.log('Modo escuro ativo por causa da aparência automática')
    }
    else if(hora >= 7 && hora < 18) {
        localStorage.setItem('aparencia', 'clara')
        console.log('Modo claro ativo por causa da aparência automática')
    }
    else if(hora >= 18 && hora <= 23) {
        localStorage.setItem('aparencia', 'escura')
        console.log('Modo escuro ativo por causa da aparência automática')
    }
}

else if(localStorage.getItem('auto-aparencia') == 'false') {

}

if(localStorage.getItem("auto-aparencia") == null) {
    localStorage.setItem('auto-aparencia', 'false')
}



function verifylogin() {
    let inputuser = document.querySelector('#user')
    let senha = document.querySelector('#senha')

    if (inputuser.value == 'vinicius_santosrc' && senha.value == '109901casa') {
        loginapproved()
        localStorage.setItem('user', 'vinicius_santosrc')
    }
    else if (inputuser.value == 'larissa.alves' && senha.value == 'laris1609') {
        loginapproved()
        localStorage.setItem('user', 'larissa.alves')
    }
    else {
        loginrecused()
    }
}

function loginapproved() {
    localStorage.setItem('login', 'true')
    window.location.href = 'index.html'
}

function loginrecused() {
    var boxerror = document.querySelector('.caixa-alerta-erro')
    boxerror.style.display = 'block'

}

if(localStorage.getItem('continue') == 'vinicius_santosrc') {
    document.querySelector('.continuewith').style.display = 'block'
    document.querySelector('.inputs-form').style.display = 'none'
    document.querySelector('button.buttonverify').style.display = 'none'

    var img = document.querySelector('.accountcontinue img')
    var nome = document.querySelector('.accountcontinue-details h1')
    var user = document.querySelector('.accountcontinue-details p')

    img.setAttribute('src', "img/vinicius-profile.jpeg")
    nome.innerHTML = `Vinícius Santos`
    user.innerHTML = '@' + localStorage.getItem('continue')
}

else if(localStorage.getItem('continue') == 'larissa.alves') {
    document.querySelector('.continuewith').style.display = 'block'
    document.querySelector('.inputs-form').style.display = 'none'
    document.querySelector('button.buttonverify').style.display = 'none'

    var img = document.querySelector('.accountcontinue img')
    var nome = document.querySelector('.accountcontinue-details h1')
    var user = document.querySelector('.accountcontinue-details p')

    img.setAttribute('src', "img/larissa-profile.jpeg")
    nome.innerHTML = `Larissa Alves`
    user.innerHTML = '@' + localStorage.getItem('continue')
}

function continuewithaccount() {
    if(localStorage.getItem('continue') == 'vinicius_santosrc') {
        localStorage.setItem('user', 'vinicius_santosrc')
        localStorage.setItem('login', 'true')
        window.location.href = 'index.html'
    }
    else if(localStorage.getItem('continue') == 'larissa.alves') {
        localStorage.setItem('user', 'larissa.alves')
        localStorage.setItem('login', 'true')
        window.location.href = 'index.html'
    }
    else {
        document.querySelector('.continuewith').style.display = 'none'
    }
}

function outroprofile() {
    localStorage.removeItem('continue')
    window.location.href = 'login.html'
}