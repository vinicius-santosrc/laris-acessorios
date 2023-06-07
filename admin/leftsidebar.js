selectdashboard = ''
selectdashboardpc = ''

selectedplanilha = ''
selectedplanilhapc = ''

pedidospen = ''
pedidospenpc = ''

messages = ''
messagespc = ''

conexao = ''
conexaopc = ''

config = ''
configpc = ''

product = ''
productpc = ''

if (document.location.pathname == '/admin/planilhas.html') {
    selectedplanilha = 'id="selectedpage"'
    selectedplanilhapc = 'id="selectedcardbar"'
}

if (document.location.pathname == '/admin/planilhaexpenses.html') {
    selectedplanilha = 'id="selectedpage"'
    selectedplanilhapc = 'id="selectedcardbar"'
}

if (document.location.pathname == '/admin/planilhaitems.html') {
    selectedplanilha = 'id="selectedpage"'
    selectedplanilhapc = 'id="selectedcardbar"'
}

else if (document.location.pathname == '/admin/index.html') {
    selectdashboard = 'id="selectedpage"'
    selectdashboardpc = 'id="selectedcardbar"'
    
}

else if (document.location.pathname == '/admin/') {
    selectdashboard = 'id="selectedpage"'
    selectdashboardpc = 'id="selectedcardbar"'
    
}

else if (document.location.pathname == '/admin') {
    selectdashboard = 'id="selectedpage"'
    selectdashboardpc = 'id="selectedcardbar"'
    
}

else if (document.location.pathname == '/admin/settings.html') {
    config = 'id="selectedpage"'
    configpc = 'id="selectedcardbar"'
}

document.querySelector('.barscript').innerHTML = `
    <div class="fixed-bar-left-mobile">
        <div class="top-mobile-bar">
            <div class="itens-mobile-bar-top">
                <img src="../imgs/logoonly.png">
            </div>
            <div class="itens-mobile-bar-top" onclick="fecharmenumobile()">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div class="opções-down-bar">
            <div class="title-opcoes">Opções de Navegação</div>
            <div class="item-opcoes-down" ${selectdashboard}>
                <a href="index.html"><i class="fa-solid fa-globe"></i> Dashboard</a>
            </div>
            <div class="item-opcoes-down" ${selectedplanilha}>
                <a href="planilhas.html"><i class="fa-regular fa-calendar-days"></i> Planilha</a>
            </div>
            <div class="item-opcoes-down" ${pedidospen}>
                <a href="orders.html"><i class="fa-regular fa-clipboard"></i> Pedidos Pendentes <label id="embreve">EM BREVE</label></a>
            </div>
            <div class="item-opcoes-down" ${messages}>
                <a href="alerts.html"><i class="fa-regular fa-envelope"></i> Mensagens <label id="embreve">EM BREVE</label></a>
            </div>
            <div class="item-opcoes-down" ${conexao}>
                <a href="conection.html"><i class="fa-solid fa-satellite-dish"></i> Conexão <label id="embreve">EM BREVE</label></a>
            </div>
            <div class="item-opcoes-down" ${config}>
                <a href="settings.html"><i class="fa-solid fa-gear"></i> Configurações <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div class="item-opcoes-down" ${product}>
                <a href="new-itens.html"><i class="fa-solid fa-plus"></i> Adicionar Produto <label id="embreve">EM BREVE</label></a>
            </div>
        </div>
    </div>

    <div class="fixed-bar-left">
        <div class="top">
            <img src="../imgs/logolaris.png" alt="">
        </div>
        <div class="options">
            <h1 class="title-opcoes-pc">Opções de Navegação</h1>
            <div class="options-cards">
                <a href="index.html"><div class="card-bar" ${selectdashboardpc}>
                    <h1><i class="fa-solid fa-globe"></i> Dashboard</h1>
                    <i class="fa-solid fa-angle-right"></i>
                </div></a>
                <a href="planilhas.html"><div class="card-bar" ${selectedplanilhapc}>
                    <h1><i class="fa-regular fa-calendar-days"></i> Planilha</h1>
                    <i class="fa-solid fa-angle-right"></i>
                </div></a>
                <a href="planilhas.html"><div class="card-bar" ${pedidospenpc}>
                    <h1><i class="fa-regular fa-clipboard"></i> Pedidos Pendentes <label id="embreve">EM BREVE</label></h1>
                    <i class="fa-solid fa-angle-right"></i>
                </div></a>
                <a href="alerts.html"><div class="card-bar" ${messagespc}>
                    <h1><i class="fa-regular fa-envelope"></i> Mensagens <label id="embreve">EM BREVE</label></h1>
                    <i class="fa-solid fa-angle-right"></i>
                </div></a>
                <a href="conection.html"><div class="card-bar" ${conexaopc}>
                    <h1><i class="fa-solid fa-satellite-dish"></i> Conexão <label id="embreve">EM BREVE</label></h1>
                    <i class="fa-solid fa-angle-right"></i>
                </div></a>
                <a href="settings.html"><div class="card-bar" ${configpc}>
                    <h1><i class="fa-solid fa-gear"></i> Configurações </h1>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div></a>
                <a href="new-itens.html"><div class="card-bar"${productpc}>
                    <h1><i class="fa-solid fa-plus"></i> Adicionar Produto <label id="embreve">EM BREVE</label></h1>
                    <i class="fa-solid fa-angle-right"></i>
                </div></a>
            </div>
        </div>
    </div>
    `

function abrirmenumobile() {
    var background = document.querySelector('.backgrond')
    document.querySelector('.fixed-bar-left-mobile').style.display = 'block'
    background.style.display = 'block'
}

function fecharmenumobile() {
    var background = document.querySelector('.backgrond')
    background.style.display = 'none'
    document.querySelector('.fixed-bar-left-mobile').style.display = 'none'

}