let habilidades = [
    {
        nombre: "<img src='src/habilidades/html-5.svg' width='30'>HTML",
        porcentaje: 90,
    },
    {
        nombre: "<img src='src/habilidades/css-3.svg' width='30'>CSS",
        porcentaje: 90,
    },
    {
        nombre: "<img src='src/habilidades/js.svg' width='30'>Javascript",
        porcentaje: 90,
    },
    { nombre: "<img src='src/habilidades/react.svg' width='30'>React hook", porcentaje: 50 },
    {
        nombre: "<img src='src/habilidades/bootstrap.svg' width='25'>Bootstrap",
        porcentaje: 80,
    },
    {
        nombre: "<img src='src/habilidades/git.svg' width='30'>Git",
        porcentaje: 80,
    },
    {
        nombre: "<img src='src/habilidades/node-js.svg' width='30'>Node js",
        porcentaje: 80,
    },
    { nombre: "<img src='src/habilidades/MongoDB.png' width='30'>Mongo DB", porcentaje: 80 },
    { nombre: "<img src='src/habilidades/php.png' width='30'>PHP", porcentaje: 80 },
    { nombre: "<img src='src/habilidades/sql.png' width='30'>SQL", porcentaje: 80 },
    { nombre: "<img src='src/habilidades/data.jpg' width='30'>Web scraping, Automatización", porcentaje: 80 },
];
let proyectos = [
    {
        nombre: "Juego Cajero",
        descripcion:
            "Juego para practicar y divertirte en el manejo de la caja.",
        img: "src/proyectos/Juego Cajero.png",
        url: "https://djoako22.github.io/juego_cajero/",
    },
    {
        nombre: "App para Pedidos",
        descripcion:
            "App para hacer pedidos, manda los pedidoas atraves de mensaje de whatsapp.",
        img: "src/proyectos/App Menus.png",
        url: "",
    },
    {
        nombre: "Cripto Alarma",
        descripcion: "Alarma de precio de criptomonedas.",
        img: "src/proyectos/Cripto Alarma.png",
        url: "https://djoako22.github.io/cripto_alarma/",
    },
    {
        nombre: "Que comemos?",
        descripcion: "App que te elije un plato de comida aleatoria.",
        img: "src/proyectos/Que Comemos.png",
        url: "https://djoako22.github.io/que_comemos/",
    },
    {
        nombre: "Scraper",
        descripcion: "Obtiene un elemento de una url.",
        img: "https://cdn.pixabay.com/photo/2021/03/11/12/58/laptop-6087062_1280.png",
        url: "",
    },
];

const div_habilidades = document.querySelector("#habilidades");
const div_proyectos = document.querySelector(".proyectos");

function render() {
    // Habilidades
    habilidades.forEach((habilidad) => {
        div_habilidades.innerHTML += `
        <span>${habilidad.nombre}</span>
        <div class="progressbar" style="background: linear-gradient(90deg, black ${habilidad.porcentaje}%, transparent ${habilidad.porcentaje}%);">
        </div>
        `;
    });
    // Proyectos
    proyectos.forEach((proyecto) => {
        div_proyectos.innerHTML += `
        <a class="proyecto" href="${proyecto.url}">
            <img src="${proyecto.img}" alt="">
            <div class="contenido">
                <h1>${proyecto.nombre}</h1>
                <p>${proyecto.descripcion}</p>
            </div>
        </a>
        `;
    });
}

render();
