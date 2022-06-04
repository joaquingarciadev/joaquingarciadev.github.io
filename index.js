document.addEventListener(
    "scroll",
    (e) => {
        if (
            document.querySelector(".main").scrollTop >=
            document.querySelector("#contacto").offsetTop - 10
        ) {
            document.querySelector("nav > ul").style.border = "#fff solid 2px";
            document.querySelectorAll("nav a").forEach((e) => {
                e.classList.add("navdark");
            });
        } else {
            document.querySelector("nav > ul").style.border = "#111 solid 2px";
            document.querySelectorAll("nav a").forEach((e) => {
                e.classList.remove("navdark");
            });
        }
    },
    true
);

document.querySelector(".btn_nav").addEventListener("click", (e) => {
    document.querySelector(".btn_nav").classList.toggle("active");
    document.querySelectorAll('li > a').forEach((e) => {
        e.addEventListener('click', (e) => {
            document.querySelector(".btn_nav").classList.remove("active");
            document.querySelector("ul").style.visibility = "hidden";
        })
    });
    if (document.querySelector(".btn_nav").classList.contains("active")) {
        document.querySelector("ul").style.visibility = "visible";
    } else {
        document.querySelector("ul").style.visibility = "hidden";
    }
});

let habilidades = [
    {
        nombre: "HTML",
        img: "src/habilidades/html-5.svg",
    },
    {
        nombre: "CSS",
        img: "src/habilidades/css-3.svg",
    },
    {
        nombre: "Javascript",
        img: "src/habilidades/js.svg",
    },
    {
        nombre: "Node JS",
        img: "src/habilidades/node-js.svg",
    },
    {
        nombre: "React",
        img: "src/habilidades/react.svg",
    },
    {
        nombre: "MongoDB",
        img: "src/habilidades/MongoDB.png",
    },
    {
        nombre: "Git",
        img: "src/habilidades/git.svg",
    },
    {
        nombre: "PHP",
        img: "src/habilidades/php.png",
    },
    {
        nombre: "MySQL",
        img: "src/habilidades/sql.png",
    },
    {
        nombre: "Bootstrap",
        img: "src/habilidades/bootstrap.svg",
    },
    {
        nombre: "Wordpress",
        img: "src/habilidades/wordpress.png",
    },
    {
        nombre: "Web Sraping",
        img: "src/habilidades/data.png",
    },
];
let proyectos = [
    {
        nombre: "Juego Cajero",
        descripcion:
            "Juego para practicar y divertirte en el manejo de la caja.",
        img: "src/proyectos/Juego Cajero.png",
        demo: "https://djoako22.github.io/juego_cajero/",
        repo: "https://github.com/Djoako22/juego_cajero",
    },
    {
        nombre: "Pedidos",
        descripcion:
            "App para hacer pedidos, manda los pedidoas atraves de mensaje de whatsapp.",
        img: "src/proyectos/App Menus.png",
        demo: "https://djoako22.github.io/app_pedidos",
        repo: "https://github.com/Djoako22/app_pedidos",
    },
    {
        nombre: "Cripto Alarma",
        descripcion: "Alarma de precio de criptomonedas.",
        img: "src/proyectos/Cripto Alarma.png",
        demo: "https://djoako22.github.io/cripto_alarma/",
        repo: "https://github.com/Djoako22/cripto_alarma",
    },
    {
        nombre: "Que comemos?",
        descripcion: "App que te elije un plato de comida aleatoria.",
        img: "src/proyectos/Que Comemos.png",
        demo: "https://djoako22.github.io/que_comemos/",
        repo: "https://github.com/Djoako22/que_comemos",
    },
    {
        nombre: "Login Stack MERN",
        descripcion: "App login realizada con en el stack MERN.",
        img: "src/proyectos/loginmern.png",
        demo: "https://loginmern.netlify.app/",
        repo: "https://loginmern.netlify.app/",
    },
];

const div_habilidades = document.querySelector(".habilidades");
const div_proyectos = document.querySelector(".proyectos");

function render() {
    // Habilidades
    habilidades.forEach((habilidad) => {
        div_habilidades.innerHTML += `
        <div class="habilidad" >
            <img src=${habilidad.img} width='50' style="border-radius: 50%;">
            ${habilidad.nombre}
        </div>
        `;
    });
    // Proyectos
    proyectos.forEach((proyecto) => {
        div_proyectos.innerHTML += `
        <div class="proyecto">
            <img src="${proyecto.img}" alt="">
            <div class="contenido">
                <h1>${proyecto.nombre}</h1>
                <p>${proyecto.descripcion}</p>
                <div>
                    <a class="btn_proyecto" href="${proyecto.demo}">DEMO</a>
                    <a class="btn_proyecto" href="${proyecto.repo}">REPO</a>
                </div>
            </div>
        </div>
        `;
    });
}

render();
