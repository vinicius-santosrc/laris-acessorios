function closeadditem() {
    document.querySelector('.blockuptoadd').style.display = 'none'
    document.querySelector('.background-planosemanal').style.display = 'none'
}

function openadditem() {
    document.querySelector('.blockuptoadd').style.display = 'block'
    document.querySelector('.background-planosemanal').style.display = 'block'

    document.querySelector('.trellolist').innerHTML = `> <b class="diadasemana">SEGUNDA-FEIRA</b>`
    document.querySelector('.buttontrello').innerHTML = `<button onclick="addlinesegunda()" class="addnewline">
                                                            <i class="fa-sharp fa-solid fa-plus"></i> Adicionar
                                                        </button>`
}

function openadditemterca() {
    document.querySelector('.blockuptoadd').style.display = 'block'
    document.querySelector('.background-planosemanal').style.display = 'block'

    document.querySelector('.trellolist').innerHTML = `> <b class="diadasemana">TERÇA-FEIRA</b>`
    document.querySelector('.buttontrello').innerHTML = `<button onclick="addlineterca()" class="addnewline">
                                                            <i class="fa-sharp fa-solid fa-plus"></i> Adicionar
                                                        </button>`
}

function openadditemquarta() {
    document.querySelector('.blockuptoadd').style.display = 'block'
    document.querySelector('.background-planosemanal').style.display = 'block'

    document.querySelector('.trellolist').innerHTML = `> <b class="diadasemana">QUARTA-FEIRA</b>`
    document.querySelector('.buttontrello').innerHTML = `<button onclick="addlinequarta()" class="addnewline">
                                                            <i class="fa-sharp fa-solid fa-plus"></i> Adicionar
                                                        </button>`
}

function openadditemquinta() {
    document.querySelector('.blockuptoadd').style.display = 'block'
    document.querySelector('.background-planosemanal').style.display = 'block'

    document.querySelector('.trellolist').innerHTML = `> <b class="diadasemana">QUINTA-FEIRA</b>`
    document.querySelector('.buttontrello').innerHTML = `<button onclick="addlinequinta()" class="addnewline">
                                                            <i class="fa-sharp fa-solid fa-plus"></i> Adicionar
                                                        </button>`
}

function openadditemsexta() {
    document.querySelector('.blockuptoadd').style.display = 'block'
    document.querySelector('.background-planosemanal').style.display = 'block'

    document.querySelector('.trellolist').innerHTML = `> <b class="diadasemana">SEXTA-FEIRA</b>`
    document.querySelector('.buttontrello').innerHTML = `<button onclick="addlinesexta()" class="addnewline">
                                                            <i class="fa-sharp fa-solid fa-plus"></i> Adicionar
                                                        </button>`
}

function openadditemsabado() {
    document.querySelector('.blockuptoadd').style.display = 'block'
    document.querySelector('.background-planosemanal').style.display = 'block'

    document.querySelector('.trellolist').innerHTML = `> <b class="diadasemana">SÁBADO</b>`
    document.querySelector('.buttontrello').innerHTML = `<button onclick="addlinesabado()" class="addnewline">
                                                            <i class="fa-sharp fa-solid fa-plus"></i> Adicionar
                                                        </button>`
}

function openadditemdomingo() {
    document.querySelector('.blockuptoadd').style.display = 'block'
    document.querySelector('.background-planosemanal').style.display = 'block'

    document.querySelector('.trellolist').innerHTML = `> <b class="diadasemana">DOMINGO</b>`
    document.querySelector('.buttontrello').innerHTML = `<button onclick="addlinedomingo()" class="addnewline">
                                                            <i class="fa-sharp fa-solid fa-plus"></i> Adicionar
                                                        </button>`
}




const cartao = document.querySelector('.title input')

let items;
let itemsterca;
let itemsquarta;
let itemsquinta;
let itemssexta;
let itemssabado;
let itemsdomingo;

//** SEGUNDA FEIRA */
    function addlinesegunda() {
        if (cartao.value === "") {
            return alert("Preencha todos os campos!");
        }

        items.push({
            cartao: cartao.value,
        });

        setItensBD();

        loadItens();

        cartao.value = "";
    };

        function deleteItem(index) {
            items.splice(index, 1);
            setItensBD();
            loadItens();
        }

        function insertItem(item, index) {
            let tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${item.cartao}</td>
                <td class="columnAction">
                <button onclick="deleteItem(${index})"><i class="fa-solid fa-minus"></i></button>
                </td>
            `;

            const tbody = document.querySelector(".tbodysegunda");
            tbody.appendChild(tr);
        }

        function loadItens() {
            const tbody = document.querySelector(".tbodysegunda");
            items = getItensBD();
            tbody.innerHTML = "";
            items.forEach((item, index) => {
                insertItem(item, index);
            });
        }

        const getItensBD = () => JSON.parse(localStorage.getItem("cartao_items")) ?? [];
        const setItensBD = () =>
        localStorage.setItem("cartao_items", JSON.stringify(items));

        loadItens();
    

// TERÇA-FERA

    function addlineterca() {
        if (cartao.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemsterca.push({
            cartao: cartao.value,
        });

        setItensBDterca();

        loadItensterca();

        cartao.value = "";
    };

    function deleteItemterca(index) {
        itemsterca.splice(index, 1);
        setItensBDterca();
        loadItensterca();
    }

    function insertItemterca(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartao}</td>
            <td class="columnAction">
            <button onclick="deleteItemterca(${index})"><i class="fa-solid fa-minus"></i></button>
            </td>
        `;

        const tbody = document.querySelector(".tbodyterca");
        tbody.appendChild(tr);
    }

    function loadItensterca() {
        const tbody = document.querySelector(".tbodyterca");
        itemsterca = getItensBDterca();
        tbody.innerHTML = "";
        itemsterca.forEach((item, index) => {
            insertItemterca(item, index);
        });
    }

        const getItensBDterca = () => JSON.parse(localStorage.getItem("cartao_items_terca")) ?? [];
        const setItensBDterca = () =>
        localStorage.setItem("cartao_items_terca", JSON.stringify(itemsterca));

        loadItensterca();

// QUARTA-FERA

    function addlinequarta() {
        if (cartao.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemsquarta.push({
            cartao: cartao.value,
        });

        setItensBDquarta();

        loadItensquarta();

        cartao.value = "";
    };

    function deleteItemquarta(index) {
        itemsquarta.splice(index, 1);
        setItensBDquarta();
        loadItensquarta();
    }

    function insertItemquarta(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartao}</td>
            <td class="columnAction">
            <button onclick="deleteItemquarta(${index})"><i class="fa-solid fa-minus"></i></button>
            </td>
        `;

        const tbody = document.querySelector(".tbodyquarta");
        tbody.appendChild(tr);
    }

    function loadItensquarta() {
        const tbody = document.querySelector(".tbodyquarta");
        itemsquarta = getItensBDquarta();
        tbody.innerHTML = "";
        itemsquarta.forEach((item, index) => {
            insertItemquarta(item, index);
        });
    }

        const getItensBDquarta = () => JSON.parse(localStorage.getItem("cartao_items_quarta")) ?? [];
        const setItensBDquarta = () =>
        localStorage.setItem("cartao_items_quarta", JSON.stringify(itemsquarta));

        loadItensquarta();

// QUINTA-FERA

    function addlinequinta() {
        if (cartao.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemsquinta.push({
            cartao: cartao.value,
        });

        setItensBDquinta();

        loadItensquinta();

        cartao.value = "";
    };

    function deleteItemquinta(index) {
        itemsquinta.splice(index, 1);
        setItensBDquinta();
        loadItensquinta();
    }

    function insertItemquinta(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartao}</td>
            <td class="columnAction">
            <button onclick="deleteItemquinta(${index})"><i class="fa-solid fa-minus"></i></button>
            </td>
        `;

        const tbody = document.querySelector(".tbodyquinta");
        tbody.appendChild(tr);
    }

    function loadItensquinta() {
        const tbody = document.querySelector(".tbodyquinta");
        itemsquinta = getItensBDquinta();
        tbody.innerHTML = "";
        itemsquinta.forEach((item, index) => {
            insertItemquinta(item, index);
        });
    }

        const getItensBDquinta = () => JSON.parse(localStorage.getItem("cartao_items_quinta")) ?? [];
        const setItensBDquinta = () =>
        localStorage.setItem("cartao_items_quinta", JSON.stringify(itemsquinta));

        loadItensquinta();

// SEXTA-FERA

    function addlinesexta() {
        if (cartao.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemssexta.push({
            cartao: cartao.value,
        });

        setItensBDsexta();

        loadItenssexta();

        cartao.value = "";
    };

    function deleteItemsexta(index) {
        itemssexta.splice(index, 1);
        setItensBDsexta();
        loadItenssexta();
    }

    function insertItemsexta(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartao}</td>
            <td class="columnAction">
            <button onclick="deleteItemsexta(${index})"><i class="fa-solid fa-minus"></i></button>
            </td>
        `;

        const tbody = document.querySelector(".tbodysexta");
        tbody.appendChild(tr);
    }

    function loadItenssexta() {
        const tbody = document.querySelector(".tbodysexta");
        itemssexta = getItensBDsexta();
        tbody.innerHTML = "";
        itemssexta.forEach((item, index) => {
            insertItemsexta(item, index);
        });
    }

        const getItensBDsexta = () => JSON.parse(localStorage.getItem("cartao_items_sexta")) ?? [];
        const setItensBDsexta = () =>
        localStorage.setItem("cartao_items_sexta", JSON.stringify(itemssexta));

        loadItenssexta();

// SÁBADO

function addlinesabado() {
    if (cartao.value === "") {
        return alert("Preencha todos os campos!");
    }

    itemssabado.push({
        cartao: cartao.value,
    });

    setItensBDsabado();

    loadItenssabado();

    cartao.value = "";
};

function deleteItemsabado(index) {
    itemssabado.splice(index, 1);
    setItensBDsabado();
    loadItenssabado();
}

function insertItemsabado(item, index) {
    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${item.cartao}</td>
        <td class="columnAction">
        <button onclick="deleteItemsabado(${index})"><i class="fa-solid fa-minus"></i></button>
        </td>
    `;

    const tbody = document.querySelector(".tbodysabado");
    tbody.appendChild(tr);
}

function loadItenssabado() {
    const tbody = document.querySelector(".tbodysabado");
    itemssabado = getItensBDsabado();
    tbody.innerHTML = "";
    itemssabado.forEach((item, index) => {
        insertItemsabado(item, index);
    });
}

    const getItensBDsabado = () => JSON.parse(localStorage.getItem("cartao_items_sabado")) ?? [];
    const setItensBDsabado = () =>
    localStorage.setItem("cartao_items_sabado", JSON.stringify(itemssabado));

    loadItenssabado();

// DOMINGO

    function addlinedomingo() {
        if (cartao.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemsdomingo.push({
            cartao: cartao.value,
        });

        setItensBDdomingo();

        loadItensdomingo();

        cartao.value = "";
    };

    function deleteItemdomingo(index) {
        itemsdomingo.splice(index, 1);
        setItensBDdomingo();
        loadItensdomingo();
    }

    function insertItemdomingo(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartao}</td>
            <td class="columnAction">
            <button onclick="deleteItemdomingo(${index})"><i class="fa-solid fa-minus"></i></button>
            </td>
        `;

        const tbody = document.querySelector(".tbodydomingo");
        tbody.appendChild(tr);
    }

    function loadItensdomingo() {
        const tbody = document.querySelector(".tbodydomingo");
        itemsdomingo = getItensBDdomingo();
        tbody.innerHTML = "";
        itemsdomingo.forEach((item, index) => {
            insertItemdomingo(item, index);
        });
    }

        const getItensBDdomingo = () => JSON.parse(localStorage.getItem("cartao_items_domingo")) ?? [];
        const setItensBDdomingo = () =>
        localStorage.setItem("cartao_items_domingo", JSON.stringify(itemsdomingo));

        loadItensdomingo();

