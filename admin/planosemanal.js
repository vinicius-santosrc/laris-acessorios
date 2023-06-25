function closeadditem() {
    document.querySelector('.blockuptoadd').style.display = 'none'
    
}

function openadditem() {
    document.querySelector('.segundaadd').style.display = 'block'
    document.querySelector('.segundabuttonline').style.display = 'none'

}

function openadditemterca() {
    document.querySelector('.tercaadd').style.display = 'block'
    document.querySelector('.tercabuttonadline').style.display = 'none'
}

function openadditemquarta() {
    document.querySelector('.quartaadd').style.display = 'block'
    document.querySelector('.quartabuttonadline').style.display = 'none'
}

function openadditemquinta() {
    document.querySelector('.quintaadd').style.display = 'block'
    document.querySelector('.quintabuttonadline').style.display = 'none'
}

function openadditemsexta() {
    document.querySelector('.sextaadd').style.display = 'block'
    document.querySelector('.sextabuttonadline').style.display = 'none'
}

function openadditemsabado() {
    document.querySelector('.sabadoadd').style.display = 'block'
    document.querySelector('.sabadobuttonadline').style.display = 'none'
}

function openadditemdomingo() {
    document.querySelector('.domingoadd').style.display = 'block'
    document.querySelector('.domingobuttonadline').style.display = 'none'
}

function cancelsegunda() {
    document.querySelector('.segundaadd').style.display = 'none'
    document.querySelector('.segundabuttonline').style.display = 'block'
}

function cancelterca() {
    document.querySelector('.tercaadd').style.display = 'none'
    document.querySelector('.tercabuttonadline').style.display = 'block'
}

function cancelquarta() {
    document.querySelector('.quartaadd').style.display = 'none'
    document.querySelector('.quartabuttonadline').style.display = 'block'
}

function cancelquinta() {
    document.querySelector('.quintaadd').style.display = 'none'
    document.querySelector('.quintabuttonadline').style.display = 'block'
}

function cancelsexta() {
    document.querySelector('.sextaadd').style.display = 'none'
    document.querySelector('.sextabuttonadline').style.display = 'block'
}

function cancelsabado() {
    document.querySelector('.sabadoadd').style.display = 'none'
    document.querySelector('.sabadobuttonadline').style.display = 'block'
}

function canceldomingo() {
    document.querySelector('.domingoadd').style.display = 'none'
    document.querySelector('.domingobuttonadline').style.display = 'block'
}




const cartao = document.querySelector('.segundainput')
const cartaoterca = document.querySelector('.tercainput')
const cartaoquarta = document.querySelector('.quartainput')
const cartaoquinta = document.querySelector('.quintainput')
const cartaosexta = document.querySelector('.sextainput')
const cartaosabado = document.querySelector('.sabadoinput')
const cartaodomingo = document.querySelector('.domingoinput')

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
        if (cartaoterca.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemsterca.push({
            cartaoterca: cartaoterca.value,
        });

        setItensBDterca();

        loadItensterca();

        cartaoterca.value = "";
    };

    function deleteItemterca(index) {
        itemsterca.splice(index, 1);
        setItensBDterca();
        loadItensterca();
    }

    function insertItemterca(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartaoterca}</td>
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
        if (cartaoquarta.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemsquarta.push({
            cartaoquarta: cartaoquarta.value,
        });

        setItensBDquarta();

        loadItensquarta();

        cartaoquarta.value = "";
    };

    function deleteItemquarta(index) {
        itemsquarta.splice(index, 1);
        setItensBDquarta();
        loadItensquarta();
    }

    function insertItemquarta(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartaoquarta}</td>
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
        if (cartaoquinta.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemsquinta.push({
            cartaoquinta: cartaoquinta.value,
        });

        setItensBDquinta();

        loadItensquinta();

        cartaoquinta.value = "";
    };

    function deleteItemquinta(index) {
        itemsquinta.splice(index, 1);
        setItensBDquinta();
        loadItensquinta();
    }

    function insertItemquinta(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartaoquinta}</td>
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
        if (cartaosexta.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemssexta.push({
            cartaosexta: cartaosexta.value,
        });

        setItensBDsexta();

        loadItenssexta();

        cartaosexta.value = "";
    };

    function deleteItemsexta(index) {
        itemssexta.splice(index, 1);
        setItensBDsexta();
        loadItenssexta();
    }

    function insertItemsexta(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartaosexta}</td>
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
    if (cartaosabado.value === "") {
        return alert("Preencha todos os campos!");
    }

    itemssabado.push({
        cartaosabado: cartaosabado.value,
    });

    setItensBDsabado();

    loadItenssabado();

    cartaosabado.value = "";
};

function deleteItemsabado(index) {
    itemssabado.splice(index, 1);
    setItensBDsabado();
    loadItenssabado();
}

function insertItemsabado(item, index) {
    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${item.cartaosabado}</td>
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
        if (cartaodomingo.value === "") {
            return alert("Preencha todos os campos!");
        }

        itemsdomingo.push({
            cartaodomingo: cartaodomingo.value,
        });

        setItensBDdomingo();

        loadItensdomingo();

        cartaodomingo.value = "";
    };

    function deleteItemdomingo(index) {
        itemsdomingo.splice(index, 1);
        setItensBDdomingo();
        loadItensdomingo();
    }

    function insertItemdomingo(item, index) {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.cartaodomingo}</td>
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



