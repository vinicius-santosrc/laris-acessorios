let total = 0
let quant = document.querySelector('select#tamanho')
let extensor = document.querySelector('select#extensor')

function chockresalmaocomprar() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker - Salmão'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function chockerdiscoprerolas_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker: - Disco com Pérolas'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    let preco = 12.00
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function chockeragatha_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker - Agatha'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function chockerrosabuzio_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker - Rosa Búzios'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function chockerlis_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker - Lis'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function colarjade_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Colar - Jade' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quant.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function strapphone_vibes_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Strap Phone - Vibes'   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quant.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function pulseiracoracao_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Pulseira Coração' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quant.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function pulseiradisco_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Pulseira Disco' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quant.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function chockercolorida_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker - Colorida'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function chaveiro_vida_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chaveiro - Vida'   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function chaveiro_sucesso_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chaveiro - Sucesso'   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function chockerbasicbranca_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker - Basic Branca'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function chockerbasicvermelha_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker - Basic Vermelha'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function colarolhogregorosa_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Colar - Olho Grego Rosa' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function colarolhogregoazul_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Colar - Olho Grego Azul' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = 'resumo.html'
}

function prata_brincofe_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Brinco Fé' + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_brincoestrela_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Brinco Estrela' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_brincoquadradoluz_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('(' + parseInt(quant.value) + ')' + ' ' + 'Brinco Quadrado de Luz'   + ' ' + 'TAMANHO: ' + (tamanho.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_brincocoracao_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('(' + parseInt(quant.value) + ')' + ' ' + 'Brinco Coração')
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_aneldefalangeinfinito_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('(' + parseInt(quant.value) + ')' + ' ' + 'Anel de Falange Infinito')
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_kitbrincotornozeleira_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('(' + parseInt(quant.value) + ')' + ' ' + 'Kit Brinco + Tornozeleira')
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_tornozeleirafe_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('(' + parseInt(quant.value) + ')' + ' ' + 'Tornozeleira Fé')
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function chockershine_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker - Shine'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function pulseiramar_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Mix Pulseira Mar' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quant.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function strapphone_azul_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Phone-Strap Azul'   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function strapphone_happy_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Phone-Strap Happy'   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function chockercrystal_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chocker Crystal'  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function chaveiro_medvet_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Chaveiro Medicina Veterinária'   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function perso_straprosa_comp() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        tarefas.push('Phone Strap Rosa Personalizado: ' + personaliza.value   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        window.location.href = '../resumo.html'
    }
}

function perso_crystal_comp() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        tarefas.push('Chocker Crystal Personalizado: ' + personaliza.value  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        window.location.href = '../resumo.html'
    }
}

function perso_colarname_comp() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        tarefas.push('Colar Name Personalizado: ' + personaliza.value  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        window.location.href = '../resumo.html'
    }
}

function perso_colarbasicname_comp() {
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
        tarefas.push('Colar Basic Name Personalizado: ' + personaliza.value + ' / ' + cor.value  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        window.location.href = '../resumo.html'
    }
}

function perso_iniciais_comp() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        tarefas.push('Chocker Iniciais Personalizado: ' + personaliza.value  + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        window.location.href = '../resumo.html'
    }
}

function perso_olhogrego_comp() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        tarefas.push('Phone-Strap Olho Grego Personalizado: ' + personaliza.value   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        window.location.href = '../resumo.html'
    }
}

function perso_neutrophone_comp() {
    let personaliza = document.querySelector('#personalizacao')

    if(personaliza.value == null || personaliza.value == '' || personaliza.value == undefined || personaliza.value == 'null') {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Preencha todos os dados.',
            
          })
    }
    else {
        tarefas.push('Phone-Strap Neutro Personalizado: ' + personaliza.value   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
        mostraTarefas()
        salvarNoLocalStorage()
        window.location.href = '../resumo.html'
    }
}

function colartrioazul_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Colar Trio Azul' + ' ' + '> Tam: ' + (tamanho.value) + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function strapphone_smile_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Phone-Strap Smile'   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_brincoargolinha_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('(' + parseInt(quant.value) + ')' + ' ' + 'Brinco Argolinha')
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_triobrincoverde_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Trio Brinco Verde'   + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_pulseiradetalhada_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Pulseira Detalhada' + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_pontodeluzrosa_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Colar Ponto de Luz Rosa' + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_anelolhogregocravejado_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('(' + parseInt(quant.value) + ')' + ' ' + 'Anel Olho Grego Cravejado')
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_tornozeleiracoracao_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('(' + parseInt(quant.value) + ')' + ' ' + 'Tornozeleira Coração')
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function scrunchie_rosaclaro_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Scrunchie de Cetim Rosa Claro'  + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function scrunchie_laranjaneon_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Scrunchie de Cetim Laranja Neon'  + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function scrunchie_pink_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Scrunchie de Cetim Pink'  + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function scrunchie_dourado_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Scrunchie de Cetim Dourado'  + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function toucadecetimrosabebe_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Touca de Cetim Rosa Bebê'  + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function toucadecetimduplafacebordoperola_comp() {
    let quant = document.querySelector('select#quant')

    tarefas.push('Touca de Cetim Dupla Face Bordô/Pérola'  + ' ' + '> Tam: Único' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function pulseiramasculinablackout_comp() {

  tarefas.push('Pulseira Masculina Blackout'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
  mostraTarefas()
  salvarNoLocalStorage()
  window.location.href = '../../resumo.html'
}

function pulseiramasculinaclouds_comp() {
    tarefas.push('Pulseira Masculina Clouds'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../../resumo.html'
}

function pulseiramasculinadarkblood_comp() {
    tarefas.push('Pulseira Masculina Darkblood'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../../resumo.html'
}

function pulseiramasculinaSkin_comp() {
    tarefas.push('Pulseira Masculina Skin'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../../resumo.html'
}

function prata_corrente_masculina_comp() {
    tarefas.push('Corrente Masculina'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_pulseira_corrente_masculina_comp() {
    tarefas.push('Pulseira Corrente Masculina'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_pulseira_corrente_masculina_3x1_comp() {
    tarefas.push('Pulseira Corrente Masculina 3x1'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function scrunchie_cetim_azul_claro_comp() {
    tarefas.push('Scrunchie Cetim Azul Claro'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function scrunchie_cetim_azul_bebe_comp() {
    tarefas.push('Scrunchie Cetim Azul Bebê'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function scrunchie_preto_comp() {
    tarefas.push('Scrunchie Cetim Preto'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function touca_cetim_face_unica_preta_comp() {
    tarefas.push('Touca Cetim Face Única Preta'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function touca_cetim_face_unica_bordo_comp() {
    tarefas.push('Touca Cetim Face Única Bordô'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function touca_cetim_face_unica_azul_royal_comp() {
    tarefas.push('Touca Cetim Face Única Azul Royal'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_anel_colorido_comp() {
    tarefas.push('Anel Colorido'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_anel_quadrado_comp() {
    tarefas.push('Anel Quadrado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_anel_trançado_comp() {
    tarefas.push('Anel Trançado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'

}

function tornozeleirabolinha_comp() {
    tarefas.push('Tornozeleira Bolinha (Brinde: Extensor)'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}



function prata_pulseira_de_bolinha_comp() {
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
            window.location.href = '../resumo.html'
        } else if (
            result.dismiss
        ){
            tarefas.push('Pulseira de Bolinha' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        }
      })
    } 

function prata_colar_mao_de_fatima_comp() {
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
            tarefas.push('Colar Mão de Fátima'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + '1')
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        } else if (
            result.dismiss
        ){
            tarefas.push('Colar Mão de Fátima' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        }
      })
    } 

function prata_conjunto_glow_comp() {
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
            window.location.href = '../resumo.html'
        } else if (
            result.dismiss
        ){
            tarefas.push('Conjunto Glow' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        }
      })
}

function prata_pulseiracoracao_comp() {
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
            window.location.href = '../resumo.html'
        } else if (
            result.dismiss
        ){
            tarefas.push('Pulseira Coração' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        }
      })
}

function pulseira_veneziana_comp() {
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
            window.location.href = '../resumo.html'
        } else if (
            result.dismiss
        ){
            tarefas.push('Pulseira Veneziana' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        }
      })
}

function colar_veneziana_comp() {
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
            window.location.href = '../resumo.html'
        } else if (
            result.dismiss
        ){
            tarefas.push('Colar Veneziana' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        }
      })
}

function colar_coracao_colorido_comp() {
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
            window.location.href = '../resumo.html'
        } else if (
            result.dismiss
        ){
            tarefas.push('Colar Coração Colorido' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        }
      })
}

function colar_ponto_de_luz_comp() {
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
            window.location.href = '../resumo.html'
        } else if (
            result.dismiss
        ){
            tarefas.push('Colar Ponto de Luz' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        }
      })
}

function prata_colar_ponto_de_luz_pink_comp() {
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
            window.location.href = '../resumo.html'
        } else if (
            result.dismiss
        ){
            tarefas.push('Colar Ponto de Luz Pink' + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
            mostraTarefas()
            salvarNoLocalStorage()
            window.location.href = '../resumo.html'
        }
      })
}


function prata_brinco_coracaotrançado_comp() {
    tarefas.push('Brinco Coração Trançado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function bracelete_lily_comp() {
    tarefas.push('Bracelete Lily'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_anel_coracao_cravejado_comp() {
    tarefas.push('Anel Coração Cravejado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_anel_dois_em_um_comp() {
    tarefas.push('Anel Dois em Um'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_brinco_minimaodefatima_comp() {
    tarefas.push('Brinco Mini Mão de Fátima'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function brinco_cristal_comp() {
    tarefas.push('Brinco Cristal'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function trio_rosa_claro_comp() {
    tarefas.push('Trio Rosa Claro'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_brinco_trio_estrelinha_luz_comp() {
    tarefas.push('Brinco Trio Estrelinha de Luz'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_brinco_argolazirconiacristais_comp() {
    tarefas.push('Brinco Argola Zircônia Cristais'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_extensor_comp() {
    tarefas.push('Extensor'  + ' ' + '> Tam: +4cm' + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_brinco_heart_comp() {
    tarefas.push('Brinco Heart'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_piercing_argolinha_crital_comp() {
    tarefas.push('Piercing Argolinha Cristal'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function prata_piercing_fake_laco_cravejado_comp() {
    tarefas.push('Piercing Fake Laço Cravejado'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function kit_annefrank_comp() {
    tarefas.push('Kit Anne Frank'  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function kit_joanadarc_comp() {
    tarefas.push(`Kit Joana D'arc` + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function kit_malala_comp() {
    tarefas.push(`Kit Malala Yousafzai`  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function kit_clarice_comp() {
    tarefas.push(`Kit Clarice Lispector`  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function kit_frida_comp() {
    tarefas.push(`Kit Frida Kahlo`  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function kit_marie_comp() {
    tarefas.push(`Kit Marie Curie`  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function touca_cetim_dupla_face_rosa_preta_comp() {
    tarefas.push(`Touca de Cetim Dupla Face Rosa e Preta`  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}

function touca_cetim_dupla_face_azul_rosa_comp() {
    tarefas.push(`Touca de Cetim Dupla Face Azul e Rosa`  + ' ' + '> Tam: ' + tamanho.value + ' ' + ' | ' + 'Qtd: ' + parseInt(quantidade.value))
    mostraTarefas()
    salvarNoLocalStorage()
    window.location.href = '../resumo.html'
}