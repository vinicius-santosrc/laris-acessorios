const tbody = document.querySelector("tbody");
const descItem = document.querySelector("#desc");
const amount = document.querySelector("#amount");
const type = document.querySelector("#type");
const btnNew = document.querySelector("#btnNew");

const incomes = document.querySelector(".incomes");
const expenses = document.querySelector(".expenses");
const total = document.querySelector(".total");

let items;

btnNew.onclick = () => {
  if (descItem.value === "" || amount.value === "" || type.value === "") {
    return alert("Preencha todos os campos!");
  }

  items.push({
    desc: descItem.value,
    amount: Math.abs(amount.value).toFixed(2),
    type: type.value,
  });

  setItensBD();

  loadItens();

  descItem.value = "";
  amount.value = "";
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
  items.splice(index, 1);
  setItensBD();
  loadItens();
}

function insertItem(item, index) {
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.type === "Entrada"
        ? `<b style="color: var(--verde); font-weight: 600">+ ${item.desc}</b>`
        : `<b style="color: red; font-weight: 600">- ${item.desc}</b>`
  }</td>
    <td>${item.type === "Entrada"
        ? `<b style="color: var(--verde)">R$ ${item.amount}</b>`
        : `<b style="color: red">R$  ${item.amount}</b>`
  }</td>
    <td class="columnType">${
      item.type === "Entrada"
        ? '<i class="bx bxs-chevron-up-circle"> Entrada</i>'
        : '<i class="bx bxs-chevron-down-circle"> Saída</i>'
    }</td>
    <td class="columnAction">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
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

function getTotals() {
  const amountIncomes = items
    .filter((item) => item.type === "Entrada")
    .map((transaction) => Number(transaction.amount));

  const amountExpenses = items
    .filter((item) => item.type === "Saída")
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

  localStorage.setItem('entradas', totalIncomes)
  localStorage.setItem('saidas', totalExpenses)
  localStorage.setItem('total', (totalIncomes - totalExpenses).toFixed(2))

  if (totalItems < 0) {
    document.querySelector('.totallabelvermelho').style.color = 'red'
  }
  else if (totalItems > 0) {
    document.querySelector('.totallabelvermelho').style.color = 'green'
  }

  document.querySelector('.lucrototal').innerHTML = 'R$' + totalItems
}

const getItensBD = () => JSON.parse(localStorage.getItem("expenses_items")) ?? [];
const setItensBD = () =>
  localStorage.setItem("expenses_items", JSON.stringify(items));

loadItens();