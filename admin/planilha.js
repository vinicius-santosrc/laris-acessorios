const tbody = document.querySelector("tbody");
const tbodyindex = document.querySelector('.planilha-home tbody')

const descItem = document.querySelector("#desc");
const amount = document.querySelector("#amount");
const type = document.querySelector("#type");

const codigo = document.querySelector("#codigo");
const nameofitem = document.querySelector("#nameofitem");
const detalhe = document.querySelector("#detalhe");
const precocompra = document.querySelector("#precocompra");
const custos = document.querySelector('#custos');
const precorevenda = document.querySelector("#precorevenda");
const quantcompra = document.querySelector("#quantcompra");
const lucroporitem = document.querySelector("#lucroporitem");


const btnNew = document.querySelector("#btnNew");

const incomes = document.querySelector(".incomes");
const expenses = document.querySelector(".expenses");
const total = document.querySelector(".lucrototal");

let items;

btnNew.onclick = () => {
  if (codigo.value === "" || nameofitem.value === "" || detalhe.value === "" || precocompra.value === "" || custos.value === "" || precorevenda.value === "" || quantcompra.value === "" || lucroporitem.value === "") {
    return alert("Preencha todos os campos!");
  }

  items.push({
    codigo: codigo.value,
    nameofitem: nameofitem.value,
    detalhe: detalhe.value,
    precocompra: precocompra.value,
    custos: custos.value,
    precorevenda: precorevenda.value,
    quantcompra: quantcompra.value,
    lucroporitem: lucroporitem.value,


  });

  setItensBD();

  loadItens();

  codigo.value = "";
  nameofitem.value = "";
  detalhe.value = "";
  precocompra.value = '';
  custos.value = '';
  precorevenda.value = "";
  quantcompra.value = "";
  lucroporitem.value = "";

};

function deleteItem(index) {
  items.splice(index, 1);
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement("tr");
  if (item.custos == undefined) {
    item.custos = '0'
  }
  else {
    item.custos = `${item.custos}`
  }
  tr.innerHTML = `
    <td>${item.codigo}</td>
    <td>${item.nameofitem}</td>
    <td>${item.detalhe}</td>
    <td>R$${item.precocompra}</td>
    <td>R$${item.custos}</td>
    <td>R$${item.precorevenda}</td>
    <td>${item.quantcompra}</td>
    <td id='lucrolinha'>R$${item.lucroporitem}</td>
    <td class="columnAction">
      <button onclick="deleteItem(${index})"><i class="fa-solid fa-trash"></i></button>
    </td>
  `;

  tbody.appendChild(tr);
}

function loadItens() {
  items = getItensBD();
  tbody.innerHTML = "";
  items.forEach((item, index) => {
    insertItem(item, index);
  });

  getTotals();
}


  const getItensBD = () => JSON.parse(localStorage.getItem("db_items")) ?? [];
  const setItensBD = () =>
  localStorage.setItem("db_items", JSON.stringify(items));

loadItens();

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

function getTotals() {
  const amountIncomes = items
      .filter((item) => item.precovenda)
      .map((transaction) => Number(transaction.amount));

  const amountExpenses = items
      .filter((item) => item.precocompra)
      .map((transaction) => Number(transaction.amount));

  const totalIncomes = amountIncomes
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);

  const totalExpenses = Math.abs(
      amountExpenses.reduce((acc, cur) => acc + cur, 0)
  ).toFixed(2);

  const totalItems = (totalIncomes - totalExpenses).toFixed(2);

  incomes.innerHTML = totalIncomes;
  expenses.innerHTML = totalExpenses;
  total.innerHTML = totalItems;
  }