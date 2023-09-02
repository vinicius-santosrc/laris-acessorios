let methodpay = document.querySelector('.pay-inside select')


function emailsubs() {
  (function(){
      emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
  })();
  let email = document.querySelector('.emailsubs').value
  
  if(email == '') {
    document.querySelector('.fraseerroemail').style.display = 'block'
  }
  else {
    document.querySelector('.emailsubscribe').style.display = 'none'
    document.querySelector('.frasesucessoemail').style.display = 'block'
    document.querySelector('.fraseerroemail').style.display = 'none'
    emailjs.send("service_efrmdzr","template_arq9nrk",{
      email: email,
      });
  }
}

function opencart() {
    let carrinho = document.querySelector('.carrinhoshow')
    let back = document.querySelector('.background-cart')
    fecharmenu()

    carrinho.style.display = 'block'
    back.style.display = 'block'
    

}

function openfiltros() {
    let filtros = document.querySelector('.filtros-select-cell')
    let back = document.querySelector('.background-cart')
    back.style.display = 'block'
    filtros.style.display = 'block'
}

function fecharcart() {
    let carrinho = document.querySelector('.carrinhoshow')
    let back = document.querySelector('.background-cart')
    let filtros = document.querySelector('.filtros-select-cell')

    carrinho.style.display = 'none'
    back.style.display = 'none'
    filtros.style.display = 'none'
}

let quantidade = document.querySelector('select#quant')
let tamanho = document.querySelector('select#tamanho')
const listElement = document.querySelector('.carrinhoshow .cheio ul')
const inputElement = document.querySelector('.carrinhoshow .cheio input')
const buttonElement = document.querySelector('.carrinhoshow .cheio button')

const tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

function mostraTarefas() {
    listElement.innerHTML = ''
    let outputcart = ''

    for (item of tarefas) {
      outputcart += `
      <li class="mdl-list__item">
        <div class="product-photo leftsidecart"'">
          <img src="${item.photoURL}">
        </div>
        <div class="product-info rightsidecart">
          <div class="product-info-top toprightside">
            <div class="productname-delete">
              <p>${item.name}</p>
              <a class="material-icons" onclick="removeTarefa(0)">
                <i class="fa-solid fa-trash-can"></i>
              </a>
            </div>
            <p class="product-size">Tamanho: ${item.tamanho}</p>
          </div>
          <select disabled>
            <option value="${item.qtd}">${item.qtd}</option>
          </select>
          <div class="product-list-price">
          R$ ${item.preco}
          </div>
        </div>
      </li>
      `

        /*const creatediv = document.createElement('div')
        const itemImage = document.createElement('img')
        const itemList = document.createElement('li')
        const itemText = document.createTextNode(item.name)
        const itemPreco = document.createElement('p')

        
        
        itemList.setAttribute('class', 'mdl-list__item')
        creatediv.setAttribute('class', 'product-list-price')
        itemPreco.setAttribute('class', 'precoitematual')

        const linkElement = document.createElement('a')
        linkElement.setAttribute('class', 'material-icons')
        

        const linkText = document.createElement('i')
        linkText.setAttribute('class', 'fa-solid fa-trash-can')
        linkElement.appendChild(linkText)
        itemList.appendChild(itemImage)
        const pos = tarefas.indexOf(item)
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`)

        
        itemList.appendChild(itemText)
        itemList.appendChild(linkElement)
        itemList.append(creatediv)*/
    }

    listElement.innerHTML = outputcart
}

mostraTarefas()

function salvarNoLocalStorage() {
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas))
}

function removeTarefa(pos) {
    tarefas.splice(pos, 1)
    mostraTarefas()
    salvarNoLocalStorage()
}

function removeTarefaCart(pos) {
  tarefas.splice(pos, 1)
  mostraTarefas()
  salvarNoLocalStorage()
  window.location.reload()
}

if(localStorage.list_tarefas == '[]' || localStorage.list_tarefas == undefined || localStorage.list_tarefas == 'undefined' || localStorage == null) {
    
}
else {
    let cart3 = document.querySelector('.cart')
    cart3.style.color = '#EF59A0'
    let cartmobile = document.querySelector('.headercell a.cart')
    cartmobile.style.color = '#EF59A0'
}

function finalizar() {
    if (localStorage.list_tarefas == '[]' || localStorage.list_tarefas == undefined || localStorage.list_tarefas == 'undefined' || localStorage == null) {
        Swal.fire({
            icon: 'error',
            title: 'Atenção!',
            text: 'Sua sacola está vazia.',
            
          })
    }
    else {
        window.location.href = window.location.origin + '/checkout.html'
    }
}

function alertindisponivel() {
    Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Esse produto está indisponível.',
        
      })
}

function finalizartudo() {
    let rua = document.getElementById('endereco')
    let bairro = document.getElementById('bairro')
    let cidade = document.getElementById('cidade')
    let estado = document.getElementById('estado')
    let numero = document.getElementById('numero')
    let referencia = document.getElementById('referencia')

    let primeironome = document.getElementById('primeironome')
    let ultimonome = document.getElementById('ultimonome')
    let cpf = document.getElementById('cpf')
    let email = document.getElementById('Email')
    let numercont = document.getElementById('Numerocont')

    
    
    if (primeironome.value == '' || ultimonome.value == '' || cpf.value == '' || rua.value == '' || email.value == '' || numercont.value == '' || bairro.value == '' || cidade.value == '' || estado.value == '' || numero.value == '' || referencia.value == '' ) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }

    else if (localStorage.list_tarefas == '[]' || localStorage.list_tarefas == undefined || localStorage.list_tarefas == 'undefined' || localStorage == null) {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Sua sacola de compras está vazia.',
            
          })
    }
    else {
        let background = document.querySelector('.background-load')
        let loader = document.querySelector('.loader')

        loader.style.display = 'block'
        background.style.display = 'block'

        let rua = document.getElementById('endereco')
        let bairro = document.getElementById('bairro')
        let cidade = document.getElementById('cidade')
        let estado = document.getElementById('estado')
        let numero = document.getElementById('numero')
        let referencia = document.getElementById('referencia')
        let cep = document.getElementById('cep')

        let primeironome = document.getElementById('primeironome')
        let ultimonome = document.getElementById('ultimonome')
        let cpf = document.getElementById('cpf')
        let email = document.getElementById('Email')
        let numercont = document.getElementById('Numerocont').value
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
        const pedido = random(0, 999)
        let data2 = new Date()
        let ano = data2.getFullYear()
        let mes = data2.getMonth()
        let dia = data2.getDate()
        if (dia > 10) {
            dia = '0' + dia
        }
        else {

        }
        let outputfinal = ''
        
        produtos2.forEach(function(item){
            outputfinal += `
            📦
                Produto: ${item.name}
                Tamanho: ${item.tamanho}
                Quantidade: ${item.qtd}
                Preço: ${item.preco}
              -------------------------
           `
          })
        

        emailjs.send("laris-acessorios","template_v9pyefq", {
            from_name: `Nome: ` + primeironome.value + ` ` + ultimonome.value + ` Email: ` + email.value  + ` ` + `CPF: ` + cpf.value + ` Telefone: ` + numercont + '',
            to_name: `CEP: ` + cep.value + ` Cidade: ` + cidade.value + '-' + estado.value + ` Bairro: ` + bairro.value + ` Rua: ` + rua.value + ` Número: ` + numero.value + ` Referência: ` + referencia.value,
            message: `Pedido N°` + pedido + `: ` + outputfinal,
            reply_to: '' + methodpay.value,
        }).catch(e => {
          console.log('ERRO: ' + e)
        })
        
        .then(() => {
            emailjs.send("laris-acessorios","confirmacao-email",{
                reply_to: pedido,
                to_name: primeironome.value,
                info_pedido: outputfinal,
                email_go: email.value,
            })
            .catch(e => {
              console.log('ERRO: ' + e.toString())
            })
            loader.style.display = 'none'
            background.style.display = 'none'
            Swal.fire({
                title: 'Pedido N°' + pedido,
                text: "Abrir o WhatsApp para entrar em contato sobre a entrega?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim',
                cancelButtonText: 'Entre em contato comigo',
              }).then((result) => {
                if (result.isConfirmed) {
                    window.open("https://api.whatsapp.com/send/?phone=553597394181&text=" + '✨*LARI’S ACEESSORIOS*✨'
                     + '%0D%0A'
                      + 'Acessórios que te representam'
                       + '%0D%0A' + '%0D%0A'
                        + '================' +
                         '%0D%0A' + '%0D%0A' +
                          '📦 Pedido *N' + pedido 
                          + '*' + '%0D%0A'
                           + '💳 Pagamento via *' + methodpay.value +
                            '*' + '%0D%0A' +
                             '🚚 Endereço : *' + cidade.value + ': ' + bairro.value + ', ' + rua.value + ', ' + numero.value +
                              '*' + '%0D%0A' + '%0D%0A' +
                               '🔍 Nome: *' + primeironome.value + ' ' + ultimonome.value + '*' +
                                '%0D%0A' + '%0D%0A'
                                 + '================')

                    localStorage.list_tarefas = '[]'
                    window.location.href = 'sucesso.html'
                }
                else {
                    localStorage.list_tarefas = '[]'
                    window.location.href = 'sucesso.html'
                }
              })
          });
        


    }
}

//PRODUTOS INDISPONIVEIS

function prata_colar_elos_de_coracao_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Elos de Coração - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function prata_colar_gravatinha_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Gravatinha - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function toucacetimduplafacebordoperolaindisponivel() {
    (async () => {

        const { value: formValues } = await Swal.fire({
          title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
          html:
            '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
            '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
            '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
          focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
          preConfirm: () => {
            return [
              document.getElementById('swal-input').value,
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value
            ]
          }
        })

        let nomeaviso = document.getElementById('swal-input').value
        let emailaviso = document.getElementById('swal-input1').value
        let numberaviso = document.getElementById('swal-input2').value
        
        if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preenche todas as opções.',
            })
        }

        else {
            (function(){
                emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
            })();
            emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
                user: nomeaviso,
                product: 'Touca de Cetim Dupla Face Bordô/Pérola',
                email: emailaviso,
                number: numberaviso,
            });
            Swal.fire(
                'Sucesso!',
                'Você será avisada(o) de quando o produto estiver disponível.',
                'success'
            )
          }
        
        })()
}

function scrunchie_cetim_azul_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Scrunchie de Cetim Azul',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function scrunchie_cetim_vermelho_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Scrunchie de Cetim Vermelho - Shopee',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function scrunchie_cetim_preto_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Scrunchie de Cetim Preto',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function scrunchie_cetim_dourado_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Scrunchie de Cetim Dourado',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function tornozeleira_disco_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Tornozeleira Disco',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function chaveiro_adm_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Chaveiro Profissão ADM',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function colar_grego_azul_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Olho Grego Azul',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function chocker_colorida_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Chocker Colorida',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function chocker_agatha_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Chocker Agatha',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function chocker_rosa_buzios_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Chocker Rosa Búzios',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function chocker_basic_vermelha_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Chocker Basic Vermelha',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_argolinha_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Argolinha - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_quadradodeluz_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Quadrado de Luz - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_coracao_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Coração - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_fe_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Fé - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function kit_brinco_tornozeleira_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Kit Brinco + Tornozeleira - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function tornozeleira_fe_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
          confirmButtonText: 'Confirmar recebimento de notificações',
          confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Tornozeleira Fé - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function colar_turmalina_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Turmalina - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function colar_ponto_de_luz_rosa_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Ponto de Luz Rosa - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function touca_rosa_bebe_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Touca Rosa Bebê',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function scrunchie_pink_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Scrunchie de Cetim Pink',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_triocolorido_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Trio Brinco Colorido - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_trioquadradocolorido_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Trio Brinco Quadrado Colorido - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_argolinhaclickverde_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Argolinha Click Verde - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function anel_falangeinfinito_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Anel de Falange Infinito - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_triobrincoverde_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Trio Brinco Verde - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function touca_cetim_face_unica_bordo_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Touca de Cetim Face Única Bordô (Shopee)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function scrunchie_pink_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Scrunchie de Cetim Pink (Shopee)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_estrela_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Estrela - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function scrunchie_neon_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Scrunchie de Cetim Laranja Neon',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function pulseira_coracao_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Pulseira Coração - Prata 925 (Luminatti Pratas)',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function touca_cetim_face_unica_azul_royal_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Touca de Cetim Face Única Azul Royal - Shoppee',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_trio_ponto_de_luz_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Trio Ponto de Luz - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function touca_cetim_face_unica_preta_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Touca de Cetim Face Única Preta - Shopee',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function scrunchie_cetim_rosaclaro_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Scrunchie de Cetim Rosa Claro - Shopee',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_argolazirconiacristais_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Argola Zircônia Cristais - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_coracaotrançado_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Coração Trançado - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function anel_olhogregocravejado_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Anel Olho Grego Cravejado - Luminatti Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function conjunto_glow_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Conjunto Glow - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function pulseira_de_bolinha_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Pulseira de Bolinha - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function colar_mao_de_fatima_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Mão de Fátima - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function anel_colorido_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Anel Colorido - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function tornozeleirabolinha_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Tornozeleira Bolinha - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function colar_ponto_de_luz_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Ponto de Luz - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_minimaodefatima_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Mini Mão de Fátima - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function touca_cetim_dupla_face_azul_rosa_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Touca de Cetim Dupla Face Azul e Rosa - Shopee',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_trio_estrelinha_luz_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Trio Estrelinha de Luz - Luminati Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function anel_trançado_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Anel Trançado - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function bracelete_lily_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Bracelete Lily - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function colar_veneziana_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Veneziana - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function prata_colar_ponto_de_luz_pink_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Ponto de Luz Pink - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function colar_coracao_colorido_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Coração Colorido - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function touca_cetim_dupla_face_rosa_preta_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Touca de Cetim Dupla Face Rosa e Preta - Shopee',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function pulseira_veneziana_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Pulseira Veneziana - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function piercing_fake_laco_cravejado_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Piercing Fake Laço Cravejado - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function colar_veneziana_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Veneziana - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function prata_brinco_com_veneziana_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco com Veneziana - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function prata_anel_coracao_cravejado_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Anel Coração Cravejado - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function trio_rosa_claro_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Trio Rosa Claro - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function prata_colar_ponto_de_luz_pink_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Colar Ponto de Luz Pink - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function prata_brinco_argola_meia_cana_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Argola Meia Cana - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function prata_anel_solitario_pink_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Anel Solitário Pink - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function brinco_cristal_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Cristal - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

function prata_brinco_ponto_de_luz_pink_indisponivel() {
  (async () => {

    const { value: formValues } = await Swal.fire({
      title: 'Complete as opções abaixo para receber aviso quando esse produto estiver disponível.',
      html:
        '<input id="swal-input" class="swal2-input" placeholder=Nome>' +
        '<input type="email" id="swal-input1" class="swal2-input" placeholder=Email>' +
        '<input type="tel" id="swal-input2" class="swal2-input" placeholder=Telefone>',
      focusConfirm: false,
      confirmButtonText: 'Confirmar recebimento de notificações',
      confirmButtonColor: '#EF59A0',
      preConfirm: () => {
        return [
          document.getElementById('swal-input').value,
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ]
      }
    })

    let nomeaviso = document.getElementById('swal-input').value
    let emailaviso = document.getElementById('swal-input1').value
    let numberaviso = document.getElementById('swal-input2').value
    
    if (emailaviso == '' || numberaviso == '' || nomeaviso == '' || emailaviso == undefined || numberaviso == undefined || nomeaviso == undefined || emailaviso == null || numberaviso == null || nomeaviso == null || emailaviso == 'null' || numberaviso == 'null' || nomeaviso == 'null' || emailaviso == ' ' || numberaviso == ' ' || nomeaviso == ' ' || emailaviso == '  ' || nomeaviso == '  ' || numberaviso == '  ' || emailaviso == '   ' || nomeaviso == '   ' || numberaviso == '   ') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Preenche todas as opções.',
        })
    }

    else {
        (function(){
            emailjs.init("gpZLP0YsCZWO9dPoR"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
        })();
        emailjs.send(`service_efrmdzr`,'template_jtb4ja7',{
            user: nomeaviso,
            product: 'Brinco Ponto de Luz Pink - Cy Pratas',
            email: emailaviso,
            number: numberaviso,
        });
        Swal.fire(
            'Sucesso!',
            'Você será avisada(o) de quando o produto estiver disponível.',
            'success'
        )
      }
    
    })()
}

// PRODUTOS

function chockersalmaoencomendar() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
    tarefas.push({
      name: 'Chocker Salmão',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 12.00,
      photoURL: window.location.origin + '/imgs/chocker2.png',
      onclick: window.location.origin + '/chocker/chockersalmao.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chockercrystal_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
    tarefas.push({
      name: 'Chocker Crystal',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 15.90,
      photoURL: window.location.origin + '/imgs/chocker-crystal.jpeg',
      onclick: window.location.origin + '/chocker/chocker-crystal.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chockerdiscoprerolas_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
    
    tarefas.push({
      name: 'Chocker: Disco com Pérolas',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 15.90,
      photoURL: window.location.origin + '/imgs/chocker.png',
      onclick: window.location.origin + '/chocker/chockerdiscoperolas.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chockeragatha_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })

    tarefas.push({
      name: 'Chocker Agatha',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 13.00,
      photoURL: window.location.origin + '/imgs/chocker_agatha.png',
      onclick: window.location.origin + '/chocker/chockeragatha.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chockerlis_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
    
    tarefas.push({
      name: 'Chocker Lis',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 11.90,
      photoURL: window.location.origin + '/imgs/chockerlis.png',
      onclick: window.location.origin + '/chocker/chockerlis.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chockercolorida_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
    tarefas.push({
      name: 'Chocker Colorida',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 12.00,
      photoURL: window.location.origin + '/imgs/chocker%20colorida.png',
      onclick: window.location.origin + '/chocker/chocker-colorida.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chockerrosabuzio_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Chocker Rosa Búzios',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 10.90,
        photoURL: window.location.origin + '/imgs/chocker_rosa_buzios.png',
        onclick: window.location.origin + '/chocker/chocker-rosa-buzios.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chockerbasicbranca_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Chocker Basic Branca',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 12.00,
        photoURL: window.location.origin + '/imgs/chocker-basic-branca.jpeg',
        onclick: window.location.origin + '/chocker/chocker-basic-branca.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chockerbasicvermelha_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Chocker Basic Vermelha',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 12.00,
        photoURL: window.location.origin + '/imgs/chocker-basic-vermelha.jpeg',
        onclick: window.location.origin + '/chocker/chocker-basic-vermelha.html'
      })
    salvarNoLocalStorage()
}

function chockershine_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Chocker Shine',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 15.00,
        photoURL: window.location.origin + '/imgs/chocker-shine.jpeg',
        onclick: window.location.origin + '/chocker/chocker-shine.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

//COLARES

function colarjade_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Colar Jade',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 14.90,
        photoURL: window.location.origin + '/imgs/colarjade.png',
        onclick: window.location.origin + '/colares/colarjade.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function colarolhogregorosa_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Colar Olho Grego Rosa',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 20.00,
        photoURL: window.location.origin + '/imgs/colar-olho-grego-rosa.jpeg',
        onclick: window.location.origin + '/colares/colar-olho-grego-rosa.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function colarolhogregoazul_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Colar Olho Grego Azul',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 20.00,
        photoURL: window.location.origin + '/imgs/colar-olho-grego-azul.jpeg',
        onclick: window.location.origin + '/colares/colar-olho-grego-azul.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function colartrioazul_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Colar Trio Azul',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 12.00,
        photoURL: window.location.origin + '/imgs/colar-trio-azul2.jpg',
        onclick: window.location.origin + '/colares/colar-trio-azul.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_brinco_circular_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Brinco Circular',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 25.00,
      photoURL: window.location.origin + '/imgs/Brinco%20circular%20(1).jpeg',
      onclick: window.location.origin + '/prata/brinco-circular.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_brinco_argola_meia_cana_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Brinco Argola Meia Cana',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 65.00,
      photoURL: window.location.origin + '/imgs/brinco%20argola%20meia%20cana%20(1).jpeg',
      onclick: window.location.origin + '/prata/brinco-argola-meia-cana.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_brinco_com_veneziana_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Brinco com Veneziana',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 65.00,
      photoURL: window.location.origin + '/imgs/brinco-com-veneziana-_1_.webp',
      onclick: window.location.origin + '/prata/brinco-com-veneziana.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
  }

  function prata_brinco_earcuff_cristal_enco() {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Brinco Earcuff Cristal',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 55.00,
        photoURL: window.location.origin + '/imgs/brinco-earcuff-cristal-_1_.webp',
        onclick: window.location.origin + '/prata/brinco-earcuff-cristal.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
  }

//STRAPPHONE

function strapphone_vibes_enco() {
   
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Strap Phone - Vibes',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 16.00,
        photoURL: window.location.origin + '/imgs/phonestrap.png',
        onclick: window.location.origin + '/strap_phone/strapphone-vibes.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
}

function strapphone_azul_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Phone Strap - Azul',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 17.00,
        photoURL: window.location.origin + '/imgs/phone-strap-azul.jpeg',
        onclick: window.location.origin + '/strap_phone/strapphone-azul.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function strapphone_happy_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Phone Strap - Happy',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 20.00,
        photoURL: window.location.origin + '/imgs/phone-strap-happy.jpeg',
        onclick: window.location.origin + '/strap_phone/strapphone-happy.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function strapphone_smile_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Phone Strap Smile',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 21.00,
        photoURL: window.location.origin + '/imgs/phone-strap-smile.jpeg',
        onclick: window.location.origin + '/strap_phone/strapphone-smile.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

//PULSEIRAS

function pulseiracoracao_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Pulseira Coração',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 10.50,
        photoURL: window.location.origin + '/imgs/pulseiracoracao1.png',
        onclick: window.location.origin + '/chocker/pulseira-coracao.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function pulseiradisco_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Pulseira Disco',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 11.90,
        photoURL: window.location.origin + '/imgs/pulseiradisco1.png',
        onclick: window.location.origin + '/chocker/pulseira-disco.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function pulseiramar_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Mix Pulseira Mar',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 40.00,
        photoURL: window.location.origin + '/imgs/pulseira-mar.jpeg',
        onclick: window.location.origin + '/chocker/pulseira-mar.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

// CHAVEIROS

function chaveiro_vida_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Chaveiro Vida',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 20.00,
        photoURL: window.location.origin + '/imgs/chaveiro-vida2.jpeg',
        onclick: window.location.origin + '/chaveiros/chaveiro-vida.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chaveiro_sucesso_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Chaveiro Sucesso',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 20.00,
        photoURL: window.location.origin + '/imgs/chaveiro-sucesso2.jpeg',
        onclick: window.location.origin + '/chaveiros/chaveiro-sucesso.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function chaveiro_medvet_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Chaveiro Medicina Veterinária',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 25.00,
        photoURL: window.location.origin + '/imgs/chaveiro-medvet.png',
        onclick: window.location.origin + '/chaveiros/chaveiro-medicinavet.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

// PRATAS //

function prata_brincofe_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Brinco Fé',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 45.00,
        photoURL: window.location.origin + '/imgs/brinco-fe.jpg',
        onclick: window.location.origin + '/prata/brinco-fe.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_brincoestrela_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Brinco Estrela',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 25.00,
        photoURL: window.location.origin + '/imgs/brinco-fe4.jpg',
        onclick: window.location.origin + '/prata/brinco-estrela.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_brincoquadradoluz_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Brinco Quadrado de Luz',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 35.00,
        photoURL: window.location.origin + '/imgs/brinco-quadrado-de-luz.jpg',
        onclick: window.location.origin + '/prata/brinco-quadrado-de-luz.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_brincocoracao_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Brinco Coração',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 30.00,
        photoURL: window.location.origin + '/imgs/brinco-coracao.jpg',
        onclick: window.location.origin + '/prata/brinco-coracao.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_aneldefalangeinfinito_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Anel de Falange Infinito',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 45.00,
        photoURL: window.location.origin + '/imgs/anel-de-falange-infinito-2.png',
        onclick: window.location.origin + '/prata/anel-de-falange-infinito.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_anel_colorido_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: 'Anel Colorido',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 65.00,
    photoURL: window.location.origin + '/imgs/anel-colorido%20(1).jpeg',
    onclick: window.location.origin + '/prata/anel-colorido.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_kitbrincotornozeleira_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Kit Brinco + Tornozeleira',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 120.00,
        photoURL: window.location.origin + '/imgs/kit-brinco-tornozeleira.jpg',
        onclick: window.location.origin + '/prata/kit-brinco-tornozeleira.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_tornozeleirafe_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Tornozeleira Fé',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 85.00,
        photoURL: window.location.origin + '/imgs/tornozeleira%20fe.jpg',
        onclick: window.location.origin + '/prata/tornozeleira-fe.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_brincoargolinha_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Brinco Argolinha',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 35.00,
        photoURL: window.location.origin + '/imgs/brinco%20argolinha.jpeg',
        onclick: window.location.origin + '/prata/brinco-argolinha.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function brinco_cristal_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Brinco Cristal',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 40.00,
      photoURL: window.location.origin + '/imgs/Brinco%20cristal%20%20(1).jpeg',
      onclick: window.location.origin + '/prata/brinco-cristal.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function trio_rosa_claro_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Trio Rosa Claro',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 60.00,
      photoURL: window.location.origin + '/imgs/trio%20rosa%20claro%20(1).jpeg',
      onclick: window.location.origin + '/prata/trio-rosa-claro.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_triobrincoverde_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Trio Brinco Verde',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 60.00,
        photoURL: window.location.origin + '/imgs/Trio%20brinco%20verde2.jpeg',
        onclick: window.location.origin + '/prata/trio-brinco-verde.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_pulseiradetalhada_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
    tarefas.push({
      name: 'Pulseira Detalhada',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 70.00,
      photoURL: window.location.origin + '/imgs/Pulseira-Detalhada%20(1).jpeg',
      onclick: window.location.origin + '/prata/pulseira-detalhada.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_pontodeluzrosa_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Colar Ponto de Luz Rosa',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 75.00,
        photoURL: window.location.origin + '/imgs/Colar%20Ponto%20De%20Luz%20Rosa%20(2).jpeg',
        onclick: window.location.origin + '/prata/colar-ponto-de-luz-rosa.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_anelolhogregocravejado_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Anel Olho Grego Cravejado',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 60.00,
        photoURL: window.location.origin + '/imgs/Anel%20Olho%20Grego%20Cravejado%20(4).jpeg',
        onclick: window.location.origin + '/prata/anel-olho-grego-cravejado.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_tornozeleiracoracao_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: 'Tornozeleira Coração',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 90.00,
        photoURL: window.location.origin + '/imgs/Tornozeleira%20Coração%20(5).jpeg',
        onclick: window.location.origin + '/prata/tornozeleira-coracao.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_anel_quadrado_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: 'Anel Quadrado',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 50.50,
    photoURL: window.location.origin + '/imgs/anel-quadrado%20(1).jpeg',
    onclick: window.location.origin + '/prata/anel-quadrado.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_anel_trançado_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: 'Anel Trançado',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 35.00,
    photoURL: window.location.origin + '/imgs/anel-traçado%20(1).jpeg',
    onclick: window.location.origin + '/prata/anel-trançado.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function bracelete_lily_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Bracelete Lily',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 35.00,
      photoURL: window.location.origin + '/imgs/bracelete%20lily%20(2).jpeg',
      onclick: window.location.origin + '/prata/bracelete%20lily.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function tornozeleirabolinha_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Tornozeleira Bolinha',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 50.00,
      photoURL: window.location.origin + '/imgs/Tornozeleira%20bolinha%20(1).jpeg',
      onclick: window.location.origin + '/prata/tornozeleira-bolinha.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_pulseira_de_bolinha_enco() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

  Swal.fire({
      title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
      icon: 'info',
      html:
        `
        <div class='item-prata'>
            <img src="../imgs/extensor (1).jpeg" alt="">
            <div class="text-prata">
                <p class='novidade-loja'>Novo</p>
                <h1 class="nome-prata">Extensor (+4cm)</h1>
                <div class='estrelas'>
                    <img src="../imgs/Nenhuma estrela.png" alt="">
                </div>
                <div class="promocao">
                    <p class="preço-promo"><s>R$ 13,00</s>
                    <p class="preço-loja">R$ 8,50</p>
                    <p class="opcoesdepaga">(comprado junto com produtos)</p>
                </div>
                
            </div>
        </div>
  ` +
        '+ R$ 8,50 na soma total',
        showCancelButton: true,
        confirmButtonColor: '#EF59A0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ADICIONAR',
        cancelButtonText: 'NÃO '
  }).then((result) => {
      if (result.isConfirmed) {
        tarefas.push({
          name: 'Pulseira de Bolinha',
          tamanho: tamanho.value,
          qtd: parseInt(quantidade.value),
          preco: 85.00,
          photoURL: window.location.origin + '/imgs/pulseira-de-bolinha%20(1).jpeg',
          onclick: window.location.origin + '/prata/pulseira-de-bolinha.html'
        })
          mostraTarefas()
          salvarNoLocalStorage()
          tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
          mostraTarefas()
          salvarNoLocalStorage()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado à sacola + Extensor(+4cm)',
            showConfirmButton: false,
            timer: 1500
          })
      } else if (
          result.dismiss
      ){
        tarefas.push({
          name: 'Pulseira de Bolinha',
          tamanho: tamanho.value,
          qtd: parseInt(quantidade.value),
          preco: 85.00,
          photoURL: window.location.origin + '/imgs/pulseira-de-bolinha%20(1).jpeg',
          onclick: window.location.origin + '/prata/pulseira-de-bolinha.html'
        })
          mostraTarefas()
          salvarNoLocalStorage()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado à sacola',
            showConfirmButton: false,
            timer: 1500
          })
      }
    })
  }

function prata_colar_ponto_de_luz_pink_enco() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

Swal.fire({
    title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
    icon: 'info',
    html:
      `
      <div class='item-prata'>
          <img src="../imgs/extensor (1).jpeg" alt="">
          <div class="text-prata">
              <p class='novidade-loja'>Novo</p>
              <h1 class="nome-prata">Extensor (+4cm)</h1>
              <div class='estrelas'>
                  <img src="../imgs/Nenhuma estrela.png" alt="">
              </div>
              <div class="promocao">
                  <p class="preço-promo"><s>R$ 13,00</s>
                  <p class="preço-loja">R$ 8,50</p>
                  <p class="opcoesdepaga">(comprado junto com produtos)</p>
              </div>
              
          </div>
      </div>
` +
      '+ R$ 8,50 na soma total',
      showCancelButton: true,
      confirmButtonColor: '#EF59A0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ADICIONAR',
      cancelButtonText: 'NÃO '
}).then((result) => {
    if (result.isConfirmed) {
      tarefas.push({
        name: 'Colar Ponto de Luz Pink',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 80.00,
        photoURL: window.location.origin + '/imgs/colar-ponto-de-luz-pink.webp',
        onclick: window.location.origin + '/prata/colar-ponto-de-luz-pink.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola + Extensor(+4cm)',
          showConfirmButton: false,
          timer: 1500
        })
    } else if (
        result.dismiss
    ){
      tarefas.push({
        name: 'Colar Ponto de Luz Pink',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 80.00,
        photoURL: window.location.origin + '/imgs/colar-ponto-de-luz-pink.webp',
        onclick: window.location.origin + '/prata/colar-ponto-de-luz-pink.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola',
          showConfirmButton: false,
          timer: 1500
        })
    }
  })
}

function prata_colar_mao_de_fatima_enco() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

Swal.fire({
    title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
    icon: 'info',
    html:
      `
      <div class='item-prata'>
          <img src="../imgs/extensor (1).jpeg" alt="">
          <div class="text-prata">
              <p class='novidade-loja'>Novo</p>
              <h1 class="nome-prata">Extensor (+4cm)</h1>
              <div class='estrelas'>
                  <img src="../imgs/Nenhuma estrela.png" alt="">
              </div>
              <div class="promocao">
                  <p class="preço-loja">R$ 8,50</p>
                  <p class="opcoesdepaga">Pague à vista ou Pix</p>
              </div>
              
          </div>
      </div>
` +
      '+ R$ 8,50 na soma total',
      showCancelButton: true,
      confirmButtonColor: '#EF59A0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ADICIONAR',
      cancelButtonText: 'NÃO '
}).then((result) => {
    if (result.isConfirmed) {
      tarefas.push({
        name: 'Colar Mão de Fátima',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 85.00,
        photoURL: window.location.origin + '/imgs/colar-mao-de-fatima%20(1).jpeg',
        onclick: window.location.origin + '/prata/colar-mao-de-fatima.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola + Extensor(+4cm)',
          showConfirmButton: false,
          timer: 1500
        })
    } else if (
        result.dismiss
    ){
      tarefas.push({
        name: 'Colar Mão de Fátima',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 85.00,
        photoURL: window.location.origin + '/imgs/colar-mao-de-fatima%20(1).jpeg',
        onclick: window.location.origin + '/prata/colar-mao-de-fatima.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola',
          showConfirmButton: false,
          timer: 1500
        })
    }
  })
}

function prata_pulseira_de_bolinha_enco() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

  Swal.fire({
      title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
      icon: 'info',
      html:
        `
        <div class='item-prata'>
            <img src="../imgs/extensor (1).jpeg" alt="">
            <div class="text-prata">
                <p class='novidade-loja'>Novo</p>
                <h1 class="nome-prata">Extensor (+4cm)</h1>
                <div class='estrelas'>
                    <img src="../imgs/Nenhuma estrela.png" alt="">
                </div>
                <div class="promocao">
                    <p class="preço-promo"><s>R$ 13,00</s>
                    <p class="preço-loja">R$ 8,50</p>
                    <p class="opcoesdepaga">(comprado junto com produtos)</p>
                </div>
                
            </div>
        </div>
  ` +
        '+ R$ 8,50 na soma total',
        showCancelButton: true,
        confirmButtonColor: '#EF59A0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ADICIONAR',
        cancelButtonText: 'NÃO '
  }).then((result) => {
      if (result.isConfirmed) {
        tarefas.push({
          name: 'Pulseira de Bolinha',
          tamanho: tamanho.value,
          qtd: parseInt(quantidade.value),
          preco: 85.00,
          photoURL: window.location.origin + '/imgs/pulseira-de-bolinha%20(1).jpeg',
          onclick: window.location.origin + '/prata/pulseira-de-bolinha.html'
        })
          mostraTarefas()
          salvarNoLocalStorage()
          tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
          mostraTarefas()
          salvarNoLocalStorage()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado à sacola + Extensor(+4cm)',
            showConfirmButton: false,
            timer: 1500
          })
      } else if (
          result.dismiss
      ){
        tarefas.push({
          name: 'Pulseira de Bolinha',
          tamanho: tamanho.value,
          qtd: parseInt(quantidade.value),
          preco: 85.00,
          photoURL: window.location.origin + '/imgs/pulseira-de-bolinha%20(1).jpeg',
          onclick: window.location.origin + '/prata/pulseira-de-bolinha.html'
        })
          mostraTarefas()
          salvarNoLocalStorage()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado à sacola',
            showConfirmButton: false,
            timer: 1500
          })
      }
    })
  }

  function prata_conjunto_glow_enco() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

  Swal.fire({
      title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
      icon: 'info',
      html:
        `
        <div class='item-prata'>
            <img src="../imgs/extensor (1).jpeg" alt="">
            <div class="text-prata">
                <p class='novidade-loja'>Novo</p>
                <h1 class="nome-prata">Extensor (+4cm)</h1>
                <div class='estrelas'>
                    <img src="../imgs/Nenhuma estrela.png" alt="">
                </div>
                <div class="promocao">
                    <p class="preço-promo"><s>R$ 13,00</s>
                    <p class="preço-loja">R$ 8,50</p>
                    <p class="opcoesdepaga">(comprado junto com produtos)</p>
                </div>
                
            </div>
        </div>
  ` +
        '+ R$ 8,50 na soma total',
        showCancelButton: true,
        confirmButtonColor: '#EF59A0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ADICIONAR',
        cancelButtonText: 'NÃO '
  }).then((result) => {
      if (result.isConfirmed) {
        tarefas.push({
          name: 'Conjunto Glow',
          tamanho: tamanho.value,
          qtd: parseInt(quantidade.value),
          preco: 90.00,
          photoURL: window.location.origin + '/imgs/conjunto-glow%20(1).jpeg',
          onclick: window.location.origin + '/prata/conjunto-glow.html'
        })
          mostraTarefas()
          salvarNoLocalStorage()
          tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
          mostraTarefas()
          salvarNoLocalStorage()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado à sacola + Extensor(+4cm)',
            showConfirmButton: false,
            timer: 1500
          })
      } else if (
          result.dismiss
      ){
        tarefas.push({
          name: 'Conjunto Glow',
          tamanho: tamanho.value,
          qtd: parseInt(quantidade.value),
          preco: 90.00,
          photoURL: window.location.origin + '/imgs/conjunto-glow%20(1).jpeg',
          onclick: window.location.origin + '/prata/conjunto-glow.html'
        })
          mostraTarefas()
          salvarNoLocalStorage()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado à sacola',
            showConfirmButton: false,
            timer: 1500
          })
      }
    })
  }

  function prata_pulseiracoracao_enco() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

  Swal.fire({
      title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
      icon: 'info',
      html:
        `
        <div class='item-prata'>
            <img src="../imgs/extensor (1).jpeg" alt="">
            <div class="text-prata">
                <p class='novidade-loja'>Novo</p>
                <h1 class="nome-prata">Extensor (+4cm)</h1>
                <div class='estrelas'>
                    <img src="../imgs/Nenhuma estrela.png" alt="">
                </div>
                <div class="promocao">
                    <p class="preço-promo"><s>R$ 13,00</s>
                    <p class="preço-loja">R$ 8,50</p>
                    <p class="opcoesdepaga">(comprado junto com produtos)</p>
                </div>
                
            </div>
        </div>
  ` +
        '+ R$ 8,50 na soma total',
        showCancelButton: true,
        confirmButtonColor: '#EF59A0',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ADICIONAR',
        cancelButtonText: 'NÃO '
  }).then((result) => {
      if (result.isConfirmed) {
        tarefas.push({
          name: 'Pulseira Coração',
          tamanho: tamanho.value,
          qtd: parseInt(quantidade.value),
          preco: 80.50,
          photoURL: window.location.origin + '/imgs/Pulseira%20Coração%20(1).jpeg',
          onclick: window.location.origin + '/prata/pulseira-coracao.html'
        })
          mostraTarefas()
          salvarNoLocalStorage()
          tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
          mostraTarefas()
          salvarNoLocalStorage()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado à sacola + Extensor(+4cm)',
            showConfirmButton: false,
            timer: 1500
          })
      } else if (
          result.dismiss
      ){
        tarefas.push({
          name: 'Pulseira Coração',
          tamanho: tamanho.value,
          qtd: parseInt(quantidade.value),
          preco: 80.50,
          photoURL: window.location.origin + '/imgs/Pulseira%20Coração%20(1).jpeg',
          onclick: window.location.origin + '/prata/pulseira-coracao.html'
        })
          mostraTarefas()
          salvarNoLocalStorage()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Produto adicionado à sacola',
            showConfirmButton: false,
            timer: 1500
          })
      }
    })
}

function pulseira_veneziana_enco() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

Swal.fire({
    title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
    icon: 'info',
    html:
      `
      <div class='item-prata'>
          <img src="../imgs/extensor (1).jpeg" alt="">
          <div class="text-prata">
              <p class='novidade-loja'>Novo</p>
              <h1 class="nome-prata">Extensor (+4cm)</h1>
              <div class='estrelas'>
                  <img src="../imgs/Nenhuma estrela.png" alt="">
              </div>
              <div class="promocao">
                  <p class="preço-promo"><s>R$ 13,00</s>
                  <p class="preço-loja">R$ 8,50</p>
                  <p class="opcoesdepaga">(comprado junto com produtos)</p>
              </div>
              
          </div>
      </div>
` +
      '+ R$ 8,50 na soma total',
      showCancelButton: true,
      confirmButtonColor: '#EF59A0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ADICIONAR',
      cancelButtonText: 'NÃO '
}).then((result) => {
    if (result.isConfirmed) {
      tarefas.push({
        name: 'Pulseira Veneziana',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 30.00,
        photoURL: window.location.origin + '/imgs/Pulseira%20Veneziana%20(1).jpeg',
        onclick: window.location.origin + '/prata/pulseira-veneziana.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola + Extensor(+4cm)',
          showConfirmButton: false,
          timer: 1500
        })
    } else if (
        result.dismiss
    ){
      tarefas.push({
        name: 'Pulseira Veneziana',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 30.00,
        photoURL: window.location.origin + '/imgs/Pulseira%20Veneziana%20(1).jpeg',
        onclick: window.location.origin + '/prata/pulseira-veneziana.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola',
          showConfirmButton: false,
          timer: 1500
        })
    }
  })
}

function colar_veneziana_enco() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

Swal.fire({
    title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
    icon: 'info',
    html:
      `
      <div class='item-prata'>
          <img src="../imgs/extensor (1).jpeg" alt="">
          <div class="text-prata">
              <p class='novidade-loja'>Novo</p>
              <h1 class="nome-prata">Extensor (+4cm)</h1>
              <div class='estrelas'>
                  <img src="../imgs/Nenhuma estrela.png" alt="">
              </div>
              <div class="promocao">
                  <p class="preço-promo"><s>R$ 13,00</s>
                  <p class="preço-loja">R$ 8,50</p>
                  <p class="opcoesdepaga">(comprado junto com produtos)</p>
              </div>
              
          </div>
      </div>
` +
      '+ R$ 8,50 na soma total',
      showCancelButton: true,
      confirmButtonColor: '#EF59A0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ADICIONAR',
      cancelButtonText: 'NÃO '
}).then((result) => {
    if (result.isConfirmed) {
      tarefas.push({
        name: 'Colar Veneziana',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 60.00,
        photoURL: window.location.origin + '/imgs/colar%20veneziana%20(1).jpeg',
        onclick: window.location.origin + '/prata/colar-veneziana.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola + Extensor(+4cm)',
          showConfirmButton: false,
          timer: 1500
        })
    } else if (
        result.dismiss
    ){
      tarefas.push({
        name: 'Colar Veneziana',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 60.00,
        photoURL: window.location.origin + '/imgs/colar%20veneziana%20(1).jpeg',
        onclick: window.location.origin + '/prata/colar-veneziana.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola',
          showConfirmButton: false,
          timer: 1500
        })
    }
  })
}

function colar_coracao_colorido_enco() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

Swal.fire({
    title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
    icon: 'info',
    html:
      `
      <div class='item-prata'>
          <img src="../imgs/extensor (1).jpeg" alt="">
          <div class="text-prata">
              <p class='novidade-loja'>Novo</p>
              <h1 class="nome-prata">Extensor (+4cm)</h1>
              <div class='estrelas'>
                  <img src="../imgs/Nenhuma estrela.png" alt="">
              </div>
              <div class="promocao">
                  <p class="preço-promo"><s>R$ 13,00</s>
                  <p class="preço-loja">R$ 8,50</p>
                  <p class="opcoesdepaga">(comprado junto com produtos)</p>
              </div>
              
          </div>
      </div>
` +
      '+ R$ 8,50 na soma total',
      showCancelButton: true,
      confirmButtonColor: '#EF59A0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ADICIONAR',
      cancelButtonText: 'NÃO '
}).then((result) => {
    if (result.isConfirmed) {
      tarefas.push({
        name: 'Colar Coração Colorido',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 80.00,
        photoURL: window.location.origin + '/imgs/colar%20coração%20colorido%20(1).jpeg',
        onclick: window.location.origin + '/prata/colar-coracao-colorido.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola + Extensor(+4cm)',
          showConfirmButton: false,
          timer: 1500
        })
    } else if (
        result.dismiss
    ){
      tarefas.push({
        name: 'Colar Coração Colorido',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 80.00,
        photoURL: window.location.origin + '/imgs/colar%20coração%20colorido%20(1).jpeg',
        onclick: window.location.origin + '/prata/colar-coracao-colorido.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola',
          showConfirmButton: false,
          timer: 1500
        })
    }
  })
}

function colar_ponto_de_luz_enco() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

Swal.fire({
    title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
    icon: 'info',
    html:
      `
      <div class='item-prata'>
          <img src="../imgs/extensor (1).jpeg" alt="">
          <div class="text-prata">
              <p class='novidade-loja'>Novo</p>
              <h1 class="nome-prata">Extensor (+4cm)</h1>
              <div class='estrelas'>
                  <img src="../imgs/Nenhuma estrela.png" alt="">
              </div>
              <div class="promocao">
                  <p class="preço-promo"><s>R$ 13,00</s>
                  <p class="preço-loja">R$ 8,50</p>
                  <p class="opcoesdepaga">(comprado junto com produtos)</p>
              </div>
              
          </div>
      </div>
` +
      '+ R$ 8,50 na soma total',
      showCancelButton: true,
      confirmButtonColor: '#EF59A0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ADICIONAR',
      cancelButtonText: 'NÃO '
}).then((result) => {
    if (result.isConfirmed) {
      tarefas.push({
        name: 'Colar Ponto de Luz',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 80.00,
        photoURL: window.location.origin + '/imgs/colar-ponto-de-luz%20(4).jpeg',
        onclick: window.location.origin + '/prata/colar-ponto-de-luz.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola + Extensor(+4cm)',
          showConfirmButton: false,
          timer: 1500
        })
    } else if (
        result.dismiss
    ){
        tarefas.push({
        name: 'Colar Ponto de Luz',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 80.00,
        photoURL: window.location.origin + '/imgs/colar-ponto-de-luz%20(4).jpeg',
        onclick: window.location.origin + '/prata/colar-ponto-de-luz.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola',
          showConfirmButton: false,
          timer: 1500
        })
    }
  })
}

function prata_colar_elos_de_coracao_enco() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

Swal.fire({
    title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
    icon: 'info',
    html:
      `
      <div class='item-prata'>
          <img src="../imgs/extensor (1).jpeg" alt="">
          <div class="text-prata">
              <p class='novidade-loja'>Novo</p>
              <h1 class="nome-prata">Extensor (+4cm)</h1>
              <div class='estrelas'>
                  <img src="../imgs/Nenhuma estrela.png" alt="">
              </div>
              <div class="promocao">
                  <p class="preço-promo"><s>R$ 13,00</s>
                  <p class="preço-loja">R$ 8,50</p>
                  <p class="opcoesdepaga">(comprado junto com produtos)</p>
              </div>
              
          </div>
      </div>
` +
      '+ R$ 8,50 na soma total',
      showCancelButton: true,
      confirmButtonColor: '#EF59A0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ADICIONAR',
      cancelButtonText: 'NÃO '
}).then((result) => {
    if (result.isConfirmed) {
      tarefas.push({
        name: 'Colar Elos de Coração',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 100.00,
        photoURL: window.location.origin + '/imgs/COLAR-ELOS-DE-CORAÇÃO.webp',
        onclick: window.location.origin + '/prata/colar-elos-de-coracao.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola + Extensor(+4cm)',
          showConfirmButton: false,
          timer: 1500
        })
    } else if (
        result.dismiss
    ){
      tarefas.push({
        name: 'Colar Elos de Coração',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 100.00,
        photoURL: window.location.origin + '/imgs/COLAR-ELOS-DE-CORAÇÃO.webp',
        onclick: window.location.origin + '/prata/colar-elos-de-coracao.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola',
          showConfirmButton: false,
          timer: 1500
        })
    }
  })
}

function prata_pulseira_nossa_senhora_enco() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

Swal.fire({
    title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
    icon: 'info',
    html:
      `
      <div class='item-prata'>
          <img src="../imgs/extensor (1).jpeg" alt="">
          <div class="text-prata">
              <p class='novidade-loja'>Novo</p>
              <h1 class="nome-prata">Extensor (+4cm)</h1>
              <div class='estrelas'>
                  <img src="../imgs/Nenhuma estrela.png" alt="">
              </div>
              <div class="promocao">
                  <p class="preço-promo"><s>R$ 13,00</s>
                  <p class="preço-loja">R$ 8,50</p>
                  <p class="opcoesdepaga">(comprado junto com produtos)</p>
              </div>
              
          </div>
      </div>
` +
      '+ R$ 8,50 na soma total',
      showCancelButton: true,
      confirmButtonColor: '#EF59A0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ADICIONAR',
      cancelButtonText: 'NÃO '
}).then((result) => {
    if (result.isConfirmed) {
      tarefas.push({
        name: 'Pulseira Nossa Senhora',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 80.00,
        photoURL: window.location.origin + '/imgs/PULSEIRA%20NOSSA%20SENHORA%20(1).jpeg',
        onclick: window.location.origin + '/prata/pulseira-nossa-senhora.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola + Extensor(+4cm)',
          showConfirmButton: false,
          timer: 1500
        })
    } else if (
        result.dismiss
    ){
      tarefas.push({
        name: 'Pulseira Nossa Senhora',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 80.00,
        photoURL: window.location.origin + '/imgs/PULSEIRA%20NOSSA%20SENHORA%20(1).jpeg',
        onclick: window.location.origin + '/prata/pulseira-nossa-senhora.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola',
          showConfirmButton: false,
          timer: 1500
        })
    }
  })
}

function prata_colar_gravatinha_enco() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

Swal.fire({
    title: 'Você deseja adicionar <b>Extensor (+4cm)</b>',
    icon: 'info',
    html:
      `
      <div class='item-prata'>
          <img src="../imgs/extensor (1).jpeg" alt="">
          <div class="text-prata">
              <p class='novidade-loja'>Novo</p>
              <h1 class="nome-prata">Extensor (+4cm)</h1>
              <div class='estrelas'>
                  <img src="../imgs/Nenhuma estrela.png" alt="">
              </div>
              <div class="promocao">
                  <p class="preço-promo"><s>R$ 13,00</s>
                  <p class="preço-loja">R$ 8,50</p>
                  <p class="opcoesdepaga">(comprado junto com produtos)</p>
              </div>
              
          </div>
      </div>
` +
      '+ R$ 8,50 na soma total',
      showCancelButton: true,
      confirmButtonColor: '#EF59A0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ADICIONAR',
      cancelButtonText: 'NÃO '
}).then((result) => {
    if (result.isConfirmed) {
      tarefas.push({
        name: 'Colar Gravatinha',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 130.00,
        photoURL: window.location.origin + '/imgs/COLAR%20GRAVATINHA.jpeg',
        onclick: window.location.origin + '/prata/colar-gravatinha.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push({
            name: 'Extensor (+4cm)',
            tamanho: '4cm',
            qtd: 1,
            preco: 8.50,
            photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
            onclick: window.location.origin + '/prata/extensor.html'
          })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola + Extensor(+4cm)',
          showConfirmButton: false,
          timer: 1500
        })
    } else if (
        result.dismiss
    ){
      tarefas.push({
        name: 'Colar Gravatinha',
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 130.00,
        photoURL: window.location.origin + '/imgs/COLAR%20GRAVATINHA.jpeg',
        onclick: window.location.origin + '/prata/colar-gravatinha.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Produto adicionado à sacola',
          showConfirmButton: false,
          timer: 1500
        })
    }
  })
}

function kit_annefrank_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push('Kit Anne Frank'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

function kit_joanadarc_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push(`Kit Joana D'arc`  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

function prata_brinco_coracaotrançado_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: 'Brinco Coração Trançado',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 35.00,
    photoURL: window.location.origin + '/imgs/brinco-coracao-traçado%20(1).jpeg',
    onclick: window.location.origin + '/prata/brinco-coracao-trançado.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_brinco_minimaodefatima_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: 'Brinco Mini Mão de Fátima',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 25.00,
    photoURL: window.location.origin + '/imgs/brinco-mini-mao-de-fatima%20(1).jpeg',
    onclick: window.location.origin + '/prata/brinco-mini-mao-de-fatima.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_brinco_trio_estrelinha_luz_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: 'Brinco Trio Estrelinha de Luz',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 70.00,
    photoURL: window.location.origin + '/imgs/trio-de-estrelinha-de-luz%20(2).jpeg',
    onclick: window.location.origin + '/prata/trio-de-estrelinha-de-luz.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

/* -----------------------------------------------------------------------*/

function prata_brinco_argolazirconiacristais_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  let precoitem = 0
  if(tamanho.value == '1.00mm Colorido' || tamanho.value == '1.00mm Cristal') {
    precoitem = 45.00
  }
  else (
    precoitem = 55.00
  )
  tarefas.push({
    name: 'Brinco Argola Zircônia Cristais',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: precoitem,
    photoURL: window.location.origin + '/imgs/brinco%20zircônia%20cristal%201.0%20mm%20(1).jpeg',
    onclick: window.location.origin + '/prata/brinco-argola-zirconia-cristais.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_extensor_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: 'Extensor',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 13.00,
    photoURL: window.location.origin + '/imgs/extensor%20(1).jpeg',
    onclick: window.location.origin + '/prata/extensor.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_piercing_argolinha_crital_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: 'Piercing Argolinha Cristal',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 40.00,
    photoURL: window.location.origin + '/imgs/piercing-argolinha-cristal%20(1).jpeg',
    onclick: window.location.origin + '/prata/piercing-argolinha-cristal.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_piercing_fake_laco_cravejado_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: 'Piercing Fake Laço Cravejado',
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 35.00,
    photoURL: window.location.origin + '/imgs/piercing-fake-laço-cravejado%20(1).jpeg',
    onclick: window.location.origin + '/prata/piercing-fake-laço-cravejado.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_anel_coracao_cravejado_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Anel Coração Cravejado',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 75.00,
      photoURL: window.location.origin + '/imgs/ANEL-CORAÇÃO-CRAVEJADO.webp',
      onclick: window.location.origin + '/prata/anel-coracao-cravejado.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_anel_dois_em_um_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Anel Dois em Um',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 90.00,
      photoURL: window.location.origin + '/imgs/anel-dois-em-um.webp',
      onclick: window.location.origin + '/prata/anel-dois-em-um.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}
function prata_brinco_heart_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    let precoitem = 0
    if(tamanho.value == 'Médio') {
      precoitem = 50.00
    }
    else (
      precoitem = 55.00
    )
    tarefas.push({
      name: 'Brinco Heart',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: precoitem,
      photoURL: window.location.origin + '/imgs/brinco-coração.webp',
      onclick: window.location.origin + '/prata/brinco-heart.html'
    })
    mostraTarefas()
    salvarNoLocalStorage()
}

function prata_anelcravejado_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Anel Cravejado',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 55.00,
      photoURL: window.location.origin + '/imgs/anel-cravejado-_1_.webp',
      onclick: window.location.origin + '/prata/anel-cravejado.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_brinco_com_veneziana_cristal_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Brinco com Veneziana Cristal',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 60.00,
      photoURL: window.location.origin + '/imgs/BRINCO%20COM%20VENEZIANA%20CRISTAL%20(1).jpeg',
      onclick: window.location.origin + '/prata/brinco-com-veneziana-cristal.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_brinco_articulado_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Brinco Articulado',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 60.00,
      photoURL: window.location.origin + '/imgs/BRINCO%20ARTICULADO%20(1).jpeg',
      onclick: window.location.origin + '/prata/brinco-articulado.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_brinco_ponto_de_luz_pink_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Brinco Ponto de Luz Pink',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 30.00,
      photoURL: window.location.origin + '/imgs/BRINCO%20PONTO%20DE%20LUZ%20PINK%20(1).jpeg',
      onclick: window.location.origin + '/prata/brinco-ponto-de-luz-pink.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_anel_entrelacado_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: 'Anel Entrelaçado',
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 60.00,
      photoURL: window.location.origin + '/imgs/anel%20entrelaçado%20(1).jpeg',
      onclick: window.location.origin + '/prata/anel-entrelacado.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

// PERSONALIZADOS //

function perso_straprosa_enco() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Phone Strap Rosa (${personaliza.value})`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 20.00,
        photoURL: window.location.origin + '/imgs/celeste-personalizado.jpeg',
        onclick: window.location.origin + '/personalizado/phone-strap-rosa.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function perso_crystal_enco() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Chocker Crystal (${personaliza.value})`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 17.00,
        photoURL: window.location.origin + '/imgs/crystal-perso.jpeg',
        onclick: window.location.origin + '/personalizado/crystal.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function perso_colarname_enco() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Colar Name (${personaliza.value})`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 15.00,
        photoURL: window.location.origin + '/imgs/colar-name-perso.jpeg',
        onclick: window.location.origin + '/personalizado/colar-name.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function perso_colarbasicname_enco() {
    let personaliza = document.querySelector('#personalizacao')
    let cor = document.querySelector('#cor')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Colar Basic Name (${personaliza.value})`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 15.00,
        photoURL: window.location.origin + '/imgs/chocker-basic-name.jpeg',
        onclick: window.location.origin + '/personalizado/colar-basic-name.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function perso_iniciais_enco() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Chocker Iniciais (${personaliza.value})`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 17.00,
        photoURL: window.location.origin + '/imgs/chockeriniciais.jpeg',
        onclick: window.location.origin + '/personalizado/chocker-iniciais.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function perso_olhogrego_enco() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Phone Strap Personalizado - Olho Grego (${personaliza.value})`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 21.00,
        photoURL: window.location.origin + '/imgs/olhogrego-perso.jpeg',
        onclick: window.location.origin + '/personalizado/strap-phone-olho-grego.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
    }
}

function perso_neutrophone_enco() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Phone Strap Personalizado - Neutro (${personaliza.value})`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 20.00,
        photoURL: window.location.origin + '/imgs/phonestrap-neutro.jpeg',
        onclick: window.location.origin + '/personalizado/phone-strap-neutro.html'
      })
        mostraTarefas()
        salvarNoLocalStorage()
    }
}
// CETIM //

function scrunchie_preto_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: `Scrunchie de Cetim Preto`,
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 5.00,
    photoURL: window.location.origin + '/imgs/Scrunchie%20de%20cetim%20preto.jpeg',
    onclick: window.location.origin + '/cetim/scrunchie-de-cetim-preto.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
  }

function scrunchie_rosaclaro_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Scrunchie de Cetim Rosa Claro`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 5.00,
        photoURL: window.location.origin + '/imgs/Scrunchie%20de%20cetim%20rosa%20claro%20(1).jpeg',
        onclick: window.location.origin + '/cetim/scrunchie-de-cetim-rosa-claro.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function scrunchie_laranjaneon_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Scrunchie de Cetim Laranja Neon`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 6.50,
        photoURL: window.location.origin + '/imgs/Scrunchie%20de%20laranja%20neon%20(1).jpeg',
        onclick: window.location.origin + '/cetim/scrunchie-de-cetim-laranja-neon.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function scrunchie_pink_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Scrunchie de Cetim Pink`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 5.00,
        photoURL: window.location.origin + '/imgs/Scrunchie%20de%20cetim%20pink%20(1).jpeg',
        onclick: window.location.origin + '/cetim/scrunchie-de-cetim-pink.html'
      })
      mostraTarefas()
      salvarNoLocalStorage()
}

function scrunchie_dourado_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Scrunchie de Cetim Dourado`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 5.00,
        photoURL: window.location.origin + '/imgs/Scrunchie%20de%20cetim%20dourado.jpeg',
        onclick: window.location.origin + '/cetim/scrunchie-de-cetim-dourado.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function toucadecetimrosabebe_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Touca de Cetim Rosa Bebê`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 10.50,
        photoURL: window.location.origin + '/imgs/touca-de-cetim-rosa-bebe-_1_.webp',
        onclick: window.location.origin + '/cetim/touca-de-cetim-rosa-bebe.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function toucadecetimduplafacebordoperola_enco() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
      tarefas.push({
        name: `Touca de Cetim Dupla Face Bordô/Pérola`,
        tamanho: tamanho.value,
        qtd: parseInt(quantidade.value),
        preco: 22.50,
        photoURL: window.location.origin + '/imgs/touca-de-cetim-dupla-face-bordo-1.webp',
        onclick: window.location.origin + '/cetim/touca-de-cetim-dupla-face-bordo-perola.html'
      })
    mostraTarefas()
    salvarNoLocalStorage()
}

function touca_cetim_dupla_face_rosa_preta_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: `Touca de Cetim Dupla Face Rosa e Preta`,
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 22.50,
      photoURL: window.location.origin + '/imgs/touca%20dupla%20face%20rosa%20e%20preta%20(1).jpeg',
      onclick: window.location.origin + '/cetim/touca-de-cetim-dupla-face-rosa-preta.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function touca_cetim_dupla_face_azul_rosa_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: `Touca de Cetim Dupla Face Azul e Rosa`,
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 22.50,
      photoURL: window.location.origin + '/imgs/touca%20de%20cetim%20dupla%20face%20azul%20rosa%20(1).jpeg',
      onclick: window.location.origin + '/cetim/touca-de-cetim-dupla-face-azul-rosa.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function scrunchie_cetim_azul_claro_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: `Scrunchie de Cetim Azul Claro`,
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 5.00,
      photoURL: window.location.origin + '/imgs/scrunchie-azul-claro%20(1).jpeg',
      onclick: window.location.origin + '/cetim/scrunchie-de-cetim-azul-claro.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function scrunchie_cetim_azul_bebe_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: `Scrunchie de Cetim Azul Bebê`,
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 5.00,
    photoURL: window.location.origin + '/imgs/scrunchie-azul-claro%20(1).jpeg',
    onclick: window.location.origin + '/cetim/scrunchie-de-cetim-azul-claro.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function touca_cetim_face_unica_preta_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: `Touca de Cetim Face Única Preta`,
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 10.50,
    photoURL: window.location.origin + '/imgs/touca-cetim-face-unica-preta%20(1).jpeg',
    onclick: window.location.origin + '/cetim/touca-de-cetim-face-unica-preta.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function touca_cetim_face_unica_bordo_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: `Touca de Cetim Face Única Bordô`,
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 10.50,
    photoURL: window.location.origin + '/imgs/touca-cetim-face-unica-bordo%20(1).jpeg',
    onclick: window.location.origin + '/cetim/touca-de-cetim-face-unica-bordo.html'
  })
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_anel_solitario_pink_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
    tarefas.push({
      name: `Anel Solitário Pink`,
      tamanho: tamanho.value,
      qtd: parseInt(quantidade.value),
      preco: 60.00,
      photoURL: window.location.origin + '/imgs/Anel-solitário-pink-_1_.webp',
      onclick: window.location.origin + '/prata/anel-solitario-pink.html'
    })
  mostraTarefas()
  salvarNoLocalStorage()
}

function touca_cetim_face_unica_azul_royal_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
  tarefas.push({
    name: `Touca de Cetim Face Única Azul Royal`,
    tamanho: tamanho.value,
    qtd: parseInt(quantidade.value),
    preco: 10.50,
    photoURL: window.location.origin + '/imgs/touca-cetim-face-unica-royal%20(1).jpeg',
    onclick: window.location.origin + '/cetim/touca-de-cetim-face-unica-azul-royal.html'
  })
mostraTarefas()
salvarNoLocalStorage()
}


function kit_malala_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push('Kit Malala Yousafzai'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

function kit_clarice_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push('Kit Clarice Lispector'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

function kit_frida_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push('Kit Frida Kahlo'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

function kit_marie_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push('Kit Marie Curie'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}