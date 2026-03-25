const gallery = document.getElementById("gallery");
const title = document.getElementById("title");
const buttons = document.querySelectorAll(".category-btn");
const search = document.getElementById("search");

const popup = document.getElementById("popup");
const pname = document.getElementById("pname");
const pprice = document.getElementById("pprice");
const close = document.getElementById("close");

function generate(name) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push({ name: name + " " + i, price: (100 + i * 20) + " AZN" });
    }
    return arr;
}

const data = {
    unitaz: generate("Asma Unitaz"),
    tulpan: generate("Tülpan"),
    vanna: generate("Vanna"),
    kran: generate("Kran"),
    aksesuar: generate("Aksesuar"),
    dus: generate("Duş sistemi"),
    kabin: generate("Duş kabin"),
    skaf: generate("Hamam şkafı"),
    moyka: generate("Mətbəx moykası"),
    bide: generate("Bide"),
    tulpanKran: generate("Tülpan smestiteli"),
    standart: generate("Standart Unitaz"),
    metbex: generate("Mətbəx smestiteli"),
    caska: generate("Çaşka"),
    jet: generate("Jet"),
    bacok: generate("Baçok"),
    dusDivar: generate("Divar içi duş"),
    tulpanDivar: generate("Divar içi tülpan"),
    bideDivar: generate("Divar içi bide")
};

let current = "unitaz";

function show(cat) {
    gallery.innerHTML = "";
    title.textContent = cat;
    current = cat;

    data[cat].forEach(item => {
        gallery.innerHTML += `
<div class="card">
<div class="img">img</div>
<h3>${item.name}</h3>
<b>${item.price}</b>
</div>
`;
    });

    addClick();
}

function addClick() {
    document.querySelectorAll(".card").forEach((card, i) => {
        card.onclick = () => {
            const item = data[current][i];
            popup.style.display = "flex";
            pname.textContent = item.name;
            pprice.textContent = item.price;
        };
    });
}

close.onclick = () => popup.style.display = "none";

search.oninput = () => {
    const val = search.value.toLowerCase();
    gallery.innerHTML = "";

    data[current].forEach(item => {
        if (item.name.toLowerCase().includes(val)) {
            gallery.innerHTML += `
<div class="card">
<div class="img">img</div>
<h3>${item.name}</h3>
<b>${item.price}</b>
</div>
`;
        }
    });

    addClick();
};

buttons.forEach(btn => {
    btn.onclick = () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        show(btn.dataset.category);
    };
});

show("unitaz");