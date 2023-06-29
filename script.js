let data = new Date;
let ano = data.getFullYear()
let footer = document.querySelector('p#ano')

function openmenu() {
    let menu = document.querySelector('.options')
    let back = document.querySelector('.background-option')
    
    menu.style.display = 'block';
    back.style.display = 'block';
}

function fecharmenu() {
    let menu = document.querySelector('.options')
    let back = document.querySelector('.background-option')

    menu.style.display = 'none';
    back.style.display = 'none';
}

function limpar() {
    Swal.fire({
        title: 'Você deseja continuar?',
        text: "Essa ação é irreversível.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#EF59A0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Sucesso!',
            'Seu carrinho foi limpo',
            'success'
          )
          localStorage.list_tarefas = '[]';
          location.reload()
        }
      })
}