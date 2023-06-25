function request_datadownload() {
    let timerInterval
    Swal.fire({
      title: 'Aguarde enquanto estamos realizando a exportação',
      html: 'Tempo estimado <b></b> milissegundos.',
      timer: randomnumberinterval(500, 2500),
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
        
        let storage = JSON.stringify(localStorage)
        let blob = new Blob([storage], 
            {
                type: "text/plain;charset=utf-8"
            });
        saveAs(blob, 'larisacessorios-requested-database()' + ".json");
      }
    })
}

function randomnumberinterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}



function importnewdatabase() {

    let upload = document.querySelector('#upload')

    let preview = document.querySelector('.preview')

    //Inicializar file reader

    let fr = new FileReader();

    fr.readAsText(upload.files[0]);

    fr.onload = function(){

        let importnow = new Array();

        let frresultreplace = fr.result.replace(/,/g, '<br>');
        console.log(fr.result.match('db_items'))
        preview.innerHTML = frresultreplace
    }
}