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

    Swal.fire({
      title: 'Você tem certeza?',
      text: "Após fazer o requerimento de importação de dados, seus dados atuais não poderão ser recuperados. Para evitar de perder seus dados, faça um backup!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {

        
        let fr = new FileReader();

        fr.readAsText(upload.files[0]);

        fr.onload = function(){

        let file = JSON.stringify(fr.result)
        var dadosimport = file
        var dadoslidos = JSON.parse(dadosimport);

        // Objeto JSON que simula o arquivo de armazenamento
        var jsonStorage = {
          data: {},
          
          // Função para salvar os dados no arquivo JSON
          saveData: function() {
            var jsonData = JSON.stringify(this.data);
            // Aqui você pode salvar o jsonData em um arquivo no servidor, por exemplo
            console.log("Dados salvos: ", jsonData);
          },
          
          // Função para carregar os dados do arquivo JSON
          loadData: function() {
            // Aqui você pode carregar o conteúdo do arquivo JSON do servidor, por exemplo
            var jsonData = dadoslidos; // Exemplo de dados carregados
            this.data = JSON.parse(jsonData);
            console.log("Dados carregados: ", this.data);
          },
          
          // Função para definir um item no arquivo JSON
          setItem: function(key, value) {
            this.data[key] = value;
            this.saveData();
          },
          
          // Função para obter um item do arquivo JSON
          getItem: function(key) {
            return this.data[key];
          },
          
          // Função para remover um item do arquivo JSON
          removeItem: function(key) {
            delete this.data[key];
            this.saveData();
          },
          
          // Função para limpar todo o conteúdo do arquivo JSON
          clear: function() {
            this.data = {};
            this.saveData();
          }
        };

        // Exemplo de uso:
        jsonStorage.loadData(); // Carrega os dados do arquivo JSON

        // Define um item no arquivo JSON


        localStorage.setItem('total', jsonStorage.getItem('total'))
        localStorage.setItem('login', jsonStorage.getItem('login'))
        localStorage.setItem('meta_mes', jsonStorage.getItem('meta_mes'))
        localStorage.setItem('cartao_items_quarta', jsonStorage.getItem('cartao_items_quarta'))
        localStorage.setItem('expenses_items', jsonStorage.getItem('expenses_items'))
        localStorage.setItem('user', jsonStorage.getItem('user'))
        localStorage.setItem('cartao_items', jsonStorage.getItem('cartao_items'))
        localStorage.setItem('cartao_items_sabado', jsonStorage.getItem('cartao_items_sabado'))
        localStorage.setItem('cartao_items_quinta', jsonStorage.getItem('cartao_items_quinta'))
        localStorage.setItem('entradas', jsonStorage.getItem('entradas'))
        localStorage.setItem('db_items', jsonStorage.getItem('db_items'))
        localStorage.setItem('cartao_items_sexta', jsonStorage.getItem('cartao_items_sexta'))
        localStorage.setItem('meta_anual', jsonStorage.getItem('meta_anual'))
        localStorage.setItem('cartao_items_domingo', jsonStorage.getItem('cartao_items_domingo'))
        localStorage.setItem('saidas', jsonStorage.getItem('saidas'))
        localStorage.setItem('cartao_items_terca', jsonStorage.getItem('cartao_items_terca'))
        }

        
      }
      else {
        location.reload()
      }
    })
}