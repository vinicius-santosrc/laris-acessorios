let nomeuser = ''

function loginrequired() {
    if(localStorage.getItem('login') == 'true') {

    }
            else {
                window.location.href = 'login.html'
            }
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