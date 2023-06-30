const divPedidosPendentes = document.querySelector(".divPedidosPendentes");

const cliente = document.querySelector(".newItem #clienteadd");
const nomeproduto = document.querySelector(".newItem #nomeproductadd");
const pagamento = document.querySelector(".newItem #pagamentoadd");
const totaladd = document.querySelector(".newItem #totaladd");
const descricaoadd = document.querySelector('.newItem #descricaoadd')


let items;

function submitorders() {
  if (cliente.value === "" || nomeproduto.value === "" || pagamento.value === "" || totaladd.value === "") {
    return alert("Preencha todos os campos!");
  }

  items.push({
    cliente: cliente.value,
    nomeproduto: nomeproduto.value,
    descricaoadd: descricaoadd.value,
    pagamento: pagamento.value,
    totaladd: totaladd.value,
  });

  setItensBD();

  loadItens();

  cliente.value = "";
  nomeproduto.value = "";
  descricaoadd.value = "";
  pagamento.value = "";
  totaladd.value = "";
};

function hideadcitem() {
    var cont = document.querySelector('.hideitem')
    var menus = document.querySelector('.side2item')
    var plus = document.querySelector('.side3item')
  
    cont.style.display = "none"
    menus.style.display = 'none'
    plus.style.display = 'block'
  
    localStorage.setItem('planilha', 'fechada')
  }
  
  function showadcitem() {
    var cont = document.querySelector('.hideitem')
    var menus = document.querySelector('.side2item')
    var plus = document.querySelector('.side3item')
  
    cont.style.display = "block"
    menus.style.display = 'block'
    plus.style.display = 'none'
  
    localStorage.setItem('planilha', 'aberta')
  }

function deleteItem(index) {
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Ao concluir seu pedido, ele será apagado automáticamente.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Não'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Sucesso!',
            'Seu pedido foi concluído com sucesso.',
            'success'
          )
          items.splice(index, 1);
            setItensBD();
            loadItens();
        }
      })
}

function insertItem(item, index) {
  let tr = document.createElement('div');

  tr.innerHTML = `

                        <div class="pedidopendente">
                            <div class="headerclient">
                                
                                <div class="headerpedidoobs">
                                    <div class='primaryside'>
                                        <i class="fa-solid fa-bag-shopping"></i>
                                        <div class='headerinside'>
                                        <h1 id="pedido">Pedido de ${item.cliente}</h1>
                                    </div>
                                    <div class='secundaryside'>
                                        <div class="checkbox">
                                        <h2 class="pendente">PENDENTE</h2>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="bodyorder">
                            <p><b>Pedido:</b> ${item.nomeproduto}</p>
                                <p><b>Descrição do pedido:</b> ${item.descricaoadd}</p>
                                <p><b>Pagamento:</b> ${item.pagamento}</p>
                                <p><b>Preço total:</b> ${item.totaladd}</p>
                                <p><button onclick="deleteItem(${index})">CONCLUÍDO</button></p>
                            </div>
                        </div>
                        </div>
                    
  `;

  divPedidosPendentes.appendChild(tr);
}

function loadItens() {
  items = getItensBD();
  divPedidosPendentes.innerHTML = "";
  items.forEach((item, index) => {
    insertItem(item, index);
  });
}

const getItensBD = () => JSON.parse(localStorage.getItem("products_orders")) ?? [];
const setItensBD = () =>
  localStorage.setItem("products_orders", JSON.stringify(items));

loadItens();