let habilidades = [
    { nombre: "HTML", porcentaje: 90 },
    { nombre: "CSS", porcentaje: 90 },
    { nombre: "Javascript", porcentaje: 90 },
    { nombre: "Bootstrap", porcentaje: 80 },
    { nombre: "Git", porcentaje: 80 },
    { nombre: "Node js", porcentaje: 80 },
    { nombre: "React hook", porcentaje: 50 },
    { nombre: "Web scraping, Automatización", porcentaje: 80 },
    { nombre: "Convertir web a app movil", porcentaje: 80 },
    { nombre: "Sintaxis de los lenguajes mas conocidos", porcentaje: 80 },
];
let proyectos = [
    {
        nombre: "Juego Cajero",
        descripcion: "Juego para practicar y divertirte en el manejo de la caja.",
        img: "src/Juego Cajero.png",
        url: "https://djoako22.github.io/juego_cajero/",
    },
    {
        nombre: "App para Pedidos",
        descripcion: "App para hacer pedidos, manda los pedidoas atraves de mensaje de whatsapp.",
        img: "src/App Menus.png",
        url: "",
    },
    {
        nombre: "Crypto Alarma",
        descripcion: "Alarma de precio de criptomonedas.",
        img: "https://cdn.pixabay.com/photo/2021/03/11/12/58/laptop-6087062_1280.png",
        url: "",
    },
    {
        nombre: "Que comeremos hoy?",
        descripcion: "App que te elije un plato de comida aleatoria.",
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