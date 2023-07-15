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

    for (item of tarefas) {

        const creatediv = document.createElement('div')
        const itemImage = document.createElement('img')
        const itemList = document.createElement('li')
        const itemText = document.createTextNode(item)
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
        itemList.append(creatediv)

        listElement.appendChild(itemList)
    }
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
        window.location.href = 'resumo.html'
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

        emailjs.send("laris-acessorios","template_v9pyefq", {
            from_name: `Nome: ` + primeironome.value + ` ` + ultimonome.value + ` Email: ` + email.value  + ` ` + `CPF: ` + cpf.value + ` Telefone: ` + numercont + '',
            to_name: `CEP: ` + cep.value + ` Cidade: ` + cidade.value + '-' + estado.value + ` Bairro: ` + bairro.value + ` Rua: ` + rua.value + ` Número: ` + numero.value + ` Referência: ` + referencia.value,
            message: `Pedido N°` + pedido + `: ` + localStorage.list_tarefas.replace(/"/gi,  ' '),
            reply_to: '' + methodpay.value,
        })
        
        .then(() => {
            emailjs.send("laris-acessorios","confirmacao-email",{
                reply_to: pedido,
                to_name: '' + primeironome.value,
                info_pedido: '' + localStorage.list_tarefas.replace(/"/gi,  ' '),
                email_go: '' + email.value,
                data_hoje: "",
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
                    window.open("https://api.whatsapp.com/send/?phone=553597394181&text=" + '✨*LARI’S ACEESSORIOS*✨' + '%0D%0A' + 'Acessórios que te representam' + '%0D%0A' + '%0D%0A' + '================' + '%0D%0A' + '%0D%0A' + '📦 Pedido *N' + pedido + '*' + '%0D%0A' + '💳 Pagamento via *' + methodpay.value + '*' + '%0D%0A' + '🚚 Endereço : *' + cidade.value + ': ' + bairro.value + ', ' + rua.value + ', ' + numero.value + '*' + '%0D%0A' + '%0D%0A' + '🔍 Nome: *' + primeironome.value + + '  ' + ultimonome.value + '*' + '%0D%0A' + '%0D%0A' + '================')

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
            product: 'Scrunchie de Cetim Vermelho',
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

// PRODUTOS

function chockersalmaoencomendar() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Produto adicionado à sacola',
        showConfirmButton: false,
        timer: 1500
      })
    tarefas.push('Chocker Salmão'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chocker Crystal'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chocker: Disco com Pérolas'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chocker Agatha'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chocker Lis'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chocker Colorida'   + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chocker Rosa Búzios'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chocker Basic Branca'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chocker Basic Vermelha'   + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
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
    tarefas.push('Chocker Shine'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Colar Jade' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Colar Olho Grego Rosa'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Colar Olho Grego Azul'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Colar Trio Azul' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Brinco Circular' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Brinco Argola Meia Cana' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Brinco com Veneziana' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Brinco Earcuff Cristal' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Phone-Strap Vibes'   + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Phone-Strap Azul'   + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Phone-Strap Happy'   + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Phone-Strap Smile'   + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Pulseira Coração' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Pulseira Disco' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Mix Pulseira Mar' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chaveiro Vida'   + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chaveiro Sucesso'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Chaveiro Medicina Veterinária'   + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Brinco Fé'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Brinco Estrela'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Brinco Quadrado Luz'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Brinco Coração'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Anel de Falange Infinito'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Anel Colorido'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Kit Brinco + Tornozeleira'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Tornozeleira Fé'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Brinco Argolinha'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Brinco Cristal'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Trio Rosa Claro'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Trio Brinco Verde'   + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Pulseira Detalhada'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Colar Ponto de Luz Rosa'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Anel Olho Grego Cravejado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Tornozeleira Coração'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Anel Quadrado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Anel Trançado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Bracelete Lily'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Tornozeleira Bolinha (Brinde: Extensor)'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
          tarefas.push('Pulseira de Bolinha'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
          mostraTarefas()
          salvarNoLocalStorage()
          tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
          tarefas.push('Pulseira de Bolinha' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Colar Ponto de Luz Pink'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
        tarefas.push('Colar Ponto de Luz Pink' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Colar Mão de Fátima'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
        tarefas.push('Colar Mão de Fátima' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
          tarefas.push('Pulseira de Bolinha'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
          mostraTarefas()
          salvarNoLocalStorage()
          tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
          tarefas.push('Pulseira de Bolinha' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
          tarefas.push('Conjunto Glow'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
          mostraTarefas()
          salvarNoLocalStorage()
          tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
          tarefas.push('Conjunto Glow' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
          tarefas.push('Pulseira Coração'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
          mostraTarefas()
          salvarNoLocalStorage()
          tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
          tarefas.push('Pulseira Coração' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Pulseira Veneziana'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
        tarefas.push('Pulseira Veneziana' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Colar Veneziana'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
        tarefas.push('Colar Veneziana' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Colar Coração Colorido'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
        tarefas.push('Colar Coração Colorido' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Colar Ponto de Luz'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
        tarefas.push('Colar Ponto de Luz' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Colar Elos de Coração'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
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
        tarefas.push('Colar Elos de Coração' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Brinco Coração Trançado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Brinco Mini Mão de Fátima'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Brinco Trio Estrelinha de Luz'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

function prata_brinco_argolazirconiacristais_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push('Brinco Argola Zircônia Cristais'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Piercing Argolinha Cristal'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Piercing Fake Laço Cravejado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Anel Coração Cravejado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Anel Dois em Um '  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Brinco Heart '  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Anel Cravejado '  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('(' + parseInt(quantidade.value) + ')' + ' ' + 'Phone Strap Rosa: ' + personaliza.value)
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
        tarefas.push('Chocker Crystal Personalizado: ' + personaliza.value  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Colar Name Personalizado: ' + personaliza.value +  ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Colar Basic Name Personalizado: ' + personaliza.value + ' / ' + cor.value  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('Chocker Iniciais Personalizado: ' + personaliza.value  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
        tarefas.push('(' + parseInt(quantidade.value) + ')' + ' ' + 'Phone-Strap Olho Grego Personalizado: ' + personaliza.value)
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
        tarefas.push('(' + parseInt(quantidade.value) + ')' + ' ' + 'Phone-Strap Neutro Personalizado: ' + personaliza.value)
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
tarefas.push('Scrunchie de Cetim Preto'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Scrunchie de Cetim Rosa Claro'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Scrunchie de Cetim Laranja Neon'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Scrunchie de Cetim Pink'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Scrunchie de Cetim Dourado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Touca de Cetim Rosa Bebê'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
    tarefas.push('Touca de Cetim Dupla Face Bordô/Pérola'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Touca de Cetim Dupla Face Rosa e Preta'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Touca de Cetim Dupla Face Azul e Rosa'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Scrunchie Cetim Azul Claro'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Scrunchie Cetim Azul Bebê'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Touca Cetim Face Única Preta'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Touca Cetim Face Única Bordô'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
  tarefas.push('Anel Solitário Pink'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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
tarefas.push('Touca Cetim Face Única Azul Royal'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

//MASCULINOS

function pulseiramasculinablackout_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
  tarefas.push('Pulseira Masculina Blackout'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
  mostraTarefas()
  salvarNoLocalStorage()
}

function pulseiramasculinaclouds_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
  tarefas.push('Pulseira Masculina Clouds'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
  mostraTarefas()
  salvarNoLocalStorage()
}

function pulseiramasculinadarkblood_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push('Pulseira Masculina Darkblood'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

function pulseiramasculinaSkin_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push('Pulseira Masculina Skin'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

function prata_corrente_masculina_enco() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Produto adicionado à sacola',
    showConfirmButton: false,
    timer: 1500
  })
tarefas.push('Corrente Masculina'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
mostraTarefas()
salvarNoLocalStorage()
}

function prata_pulseira_corrente_masculina_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
  tarefas.push('Pulseira Corrente Masculina'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
  mostraTarefas()
  salvarNoLocalStorage()
}

function prata_pulseira_corrente_masculina_3x1_enco() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado à sacola',
      showConfirmButton: false,
      timer: 1500
    })
  tarefas.push('Pulseira Corrente Masculina 3x1'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
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