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
    console.log('aprovado')
    localStorage.setItem('login', 'true')
    window.location.href = 'index.html'
}

function loginrecused() {
    var boxerror = document.querySelector('.caixa-alerta-erro')
    boxerror.style.display = 'block'

}

