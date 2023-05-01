//COLAR

function colarfoto() {
    window.open('https://api.whatsapp.com/send/?phone=553597394181')
}


function colarurl() {
    let url = document.querySelector('#url')
    if (url.value == '' || url.value == null) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Coloque o URL de inspiração.',
            
          })
    }
    else {
        Swal.fire(
            'Sucesso!',
            'Item adicionado ao carrinho.',
            'success'
          )
        tarefas.push('(1)' + ' ' + 'Colar(P-URL) - ' + url.value)
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function colartext() {
    let outro = document.querySelector('#outro')
    if (outro.value == '' || outro.value == null) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Coloque a mensagem de inspiração.',
            
          })
    }
    else {
        Swal.fire(
            'Sucesso!',
            'Item adicionado ao carrinho.',
            'success'
          )
        tarefas.push('(1)' + ' ' + 'Colar(P) - ' + outro.value)
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

//Chocker

function chockerurl() {
    let url = document.querySelector('#url')
    if (url.value == '' || url.value == null) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Coloque o URL de inspiração.',
            
          })
    }
    else {
        Swal.fire(
            'Sucesso!',
            'Item adicionado ao carrinho.',
            'success'
          )
        tarefas.push('(1)' + ' ' + 'Chocker(P-URL) - ' + url.value)
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function chockertext() {
    let outro = document.querySelector('#outro')
    if (outro.value == '' || outro.value == null) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Coloque a mensagem de inspiração.',
            
          })
    }
    else {
        Swal.fire(
            'Sucesso!',
            'Item adicionado ao carrinho.',
            'success'
          )
        tarefas.push('(1)' + ' ' + 'Chocker(P) - ' + outro.value)
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

//Strap

function sphurl() {
    let url = document.querySelector('#url')
    if (url.value == '' || url.value == null) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Coloque o URL de inspiração.',
            
          })
    }
    else {
        Swal.fire(
            'Sucesso!',
            'Item adicionado ao carrinho.',
            'success'
          )
        tarefas.push('(1)' + ' ' + 'Phone Strap(P-URL) - ' + url.value)
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function sphtext() {
    let outro = document.querySelector('#outro')
    if (outro.value == '' || outro.value == null) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Coloque a mensagem de inspiração.',
            
          })
    }
    else {
        Swal.fire(
            'Sucesso!',
            'Item adicionado ao carrinho.',
            'success'
          )
        tarefas.push('(1)' + ' ' + 'Phone Strap(P) - ' + outro.value)
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

//PULSEIRAS

function Pulseirasurl() {
    let url = document.querySelector('#url')
    if (url.value == '' || url.value == null) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Coloque o URL de inspiração.',
            
          })
    }
    else {
        Swal.fire(
            'Sucesso!',
            'Item adicionado ao carrinho.',
            'success'
          )
        tarefas.push('(1)' + ' ' + 'Phone Strap(P-URL) - ' + url.value)
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function Pulseirastext() {
    let outro = document.querySelector('#outro')
    if (outro.value == '' || outro.value == null) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Coloque a mensagem de inspiração.',
            
          })
    }
    else {
        Swal.fire(
            'Sucesso!',
            'Item adicionado ao carrinho.',
            'success'
          )
        tarefas.push('(1)' + ' ' + 'Phone Strap(P) - ' + outro.value)
        mostraTarefas()
        salvarNoLocalStorage()
    }
}
