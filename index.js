// Load animation
const fadeOut = () => {
  const loaderWrapper = document.querySelector(".wrapper");
  loaderWrapper.classList.add("fade");
  textReveal("h3", 0, 500);
};

window.addEventListener("load", fadeOut);

// navbar
let previousScroll = window.pageYOffset;
window.onscroll = function () {
  // Effect hide and show navbar
  let currentScroll = window.pageYOffset;
  if (previousScroll > currentScroll) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-100px";
  }
  previousScroll = currentScroll;
  // Effect shadow navbar
  if (previousScroll > 0) {
    document.querySelector("nav").classList.add("scroll");
  } else {
    document.querySelector("nav").classList.remove("scroll");
  }
};

const showSidebar = () => {
  document.querySelector(".sidebar").classList.add("show");
  document.querySelector(".offcanvas").classList.add("show");
};

const hideSidebar = () => {
  document.querySelector(".sidebar").classList.remove("show");
  document.querySelector(".offcanvas").classList.remove("show");
};

// Theme
const handleChangeTheme = (param) => {
  if (param) {
    document.querySelector("body").classList.add("dark");
    document.querySelector(".switch input").checked = true;
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", "#171717");
    localStorage.setItem("theme", "dark");
  } else {
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".switch input").checked = false;
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", "#fff");
    localStorage.setItem("theme", "light");
  }
};

document.querySelector(".switch input").addEventListener("change", (e) => {
  handleChangeTheme(e.target.checked);
});

// Data
const skills = [
  {
    name: "HTML",
    img: "src/habilidades/html-5.svg",
    description: "Lenguaje de marcado para la creación de páginas web.",
    year: "2017",
  },
  {
    name: "CSS",
    img: "src/habilidades/css-3.svg",
    description: "Lenguaje de estilos para la creación de páginas web.",
    year: "2017",
  },
  {
    name: "Javascript",
    img: "src/habilidades/js.svg",
    description: "Lenguaje de programación para la creación de páginas web.",
    year: "2017",
  },
  {
    name: "React",
    img: "src/habilidades/react.svg",
    description:
      "Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario.",
    year: "2020",
  },
  {
    name: "Next JS",
    img: "src/habilidades/next-js.png",
    description: "Framework de creación de páginas web.",
    year: "2022",
  },
  {
    name: "Node JS",
    img: "src/habilidades/node-js.svg",
    description:
      "Entorno en tiempo de ejecución para la capa del servidor basado en el lenguaje de programación JavaScript.",
    year: "2020",
  },
  {
    name: "Express JS",
    img: "src/habilidades/express-js.png",
    description:
      "Infraestructura web rápida, minimalista y flexible para Node.js.",
    year: "2020",
  },
  {
    name: "MongoDB",
    img: "src/habilidades/mongodb.png",
    description: "Base de datos para la creación de páginas web.",
    year: "2020",
  },
  {
    name: "MySQL",
    img: "src/habilidades/sql.png",
    description: "Base de datos para la creación de páginas web.",
    year: "2020",
  },
  {
    name: "Bootstrap",
    img: "src/habilidades/bootstrap.svg",
    description: "Framework de creación de páginas web.",
    year: "2020",
  },
  {
    name: "Git",
    img: "src/habilidades/git.svg",
    description: "Software de control de versiones.",
    year: "2020",
  },
  {
    name: "Docker",
    img: "src/habilidades/docker.png",
    description: "Software de despliegue de aplicaciones.",
    year: "2022",
  },
  {
    name: "Linux",
    img: "src/habilidades/linux.png",
    description: "Sistema operativo open source.",
    year: "2020",
  },
  {
    name: "Photoshop",
    img: "src/habilidades/photoshop.png",
    description: "Programa de diseño.",
    year: "2021",
  },
];

const projects = [
  {
    name: "Página web - La Fermina",
    description:
      "Realicé una página web para un Salón de Fiestas y Eventos, ofreciendo a los clientes una plataforma digital para explorar y reservar sus servicios.",
    skills: ["HTML", "CSS", "Javascript"],
    img: "src/proyectos/pagina-la-fermina.png",
    demo: "https://laferminafiestasyeventos.netlify.app",
  },
  // {
  //     name: "Blog simple",
  //     description: "Blog realizado en nextjs utilizando markdown.",
  //     skills: ["React", "Next JS"],
  //     img: "src/proyectos/blog-simple.png",
  //     repo: "#",
  //     demo: "https://blog-simple.vercel.app",
  // },
  // {
  //     name: "Sistema de turnos",
  //     description: "Sistema para la gestión de turnos.",
  //     skills: ["React", "Next JS", "Node JS", "Express JS", "MongoDB"],
  //     img: "src/proyectos/sistema-de-turnos.png",
  //     repo: "#",
  //     demo: "https://sistema-de-turnos.vercel.app",
  // },
  // {
  //     name: "Sistema para restaurantes",
  //     description:
  //         "Sistema para restaurantes para administrar ordenes.",
  //     skills: ["React", "Next JS", "Node JS", "Express JS", "MongoDB"],
  //     img: "src/proyectos/sistema-para-restaurantes.png",
  //     repo: "#",
  //     demo: "https://sistema-para-restaurantes.vercel.app",
  // },
  {
    name: "Sistema de usuarios",
    description:
      "Desarrollé una aplicación completa con autenticación, registro y gestión de usuarios, fortaleciendo mis habilidades en el stack MERN y aprendiendo a implementar la autenticación OAuth.",
    skills: [
      "React",
      "Next JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Bootstrap",
    ],
    img: "src/proyectos/sistema-de-usuarios.png",
    repo: "https://github.com/joaquingarciadev/sistema-de-usuarios.git",
    demo: "https://camo.githubusercontent.com/2c08040ee2489e7bee08780ddbc6dc8990ca30c006df1af3fa22fc3e9e8f9d1a/68747470733a2f2f646a6f616b6f32322e6769746875622e696f2f7372632f70726f796563746f732f73697374656d612d64652d7573756172696f732e706e67",
  },
  // {
  //     name: "App pedidos",
  //     description: "App de pedidos simple.",
  //     skills: ["React", "Next JS", "Node JS", "Express JS", "MongoDB"],
  //     img: "src/proyectos/app-pedidos.png",
  //     repo: "https://github.com/joaquingarciadev/app-pedidos.git",
  //     demo: "https://joaquingarciadev.github.io/src/proyectos/app-pedidos.png",
  // },
  {
    name: "App cripto alarma",
    description:
      "Esta es una aplicación web desarrollada en Next.js que te permite establecer alarmas para criptomonedas. Aprendí a hacer una API con Next.js y también a realizar scraping dentro de ella.",
    skills: [
      "React",
      "Next JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Bootstrap",
    ],
    img: "src/proyectos/app-cripto-alarma.png",
    repo: "https://github.com/joaquingarciadev/app-cripto-alarma.git",
    demo: "https://app-cripto-alarma.vercel.app/",
  },
  {
    name: "Mi portafolio web",
    description:
      "Desarrollé un portafolio interactivo utilizando HTML, CSS y Javascript, donde muestro mi trabajo y habilidades. Además, incorporé animaciones dinámicas utilizando GSAP para agregar un toque especial a la experiencia de navegación.",
    skills: ["HTML", "CSS", "Javascript"],
    img: "src/proyectos/portafolio.png",
    demo: "https://joaquingarciadev.github.io/",
  },
  {
    name: "Juego cajero",
    description:
      "Juego de simulación de caja registradora. Aprende y diviértete mientras practicas tus habilidades en la gestión de efectivo.",
    skills: ["HTML", "CSS", "Javascript"],
    img: "src/proyectos/Juego Cajero.png",
    repo: "https://github.com/joaquingarciadev/juego_cajero",
    demo: "https://joaquingarciadev.github.io/juego_cajero/",
  },
  {
    name: "Máquina tragamonedas",
    description:
      "Este es un juego de máquina tragamonedas en el que aprendí a crear animaciones lógicas utilizando JavaScript. El juego simula una máquina tragamonedas clásica y puede ser utilizado como una herramienta de marketing o para entretener a los usuarios.",
    skills: ["HTML", "CSS", "Javascript"],
    img: "src/proyectos/tragamonedas.png",
    repo: "https://github.com/joaquingarciadev/tragamonedas",
    demo: "https://joaquingarciadev.github.io/tragamonedas/",
  },
];

const courses = [
  {
    name: "Curso de programación",
    description:
      "Contiene conceptos básicos de algunos lenguajes de programación",
    img: "src/cursos/programacion.png",
    url: "https://docs.google.com/document/d/e/2PACX-1vS_XTuqbf-aoqEssa2urPo4XLbjp_PxyN3NqFOtmxM-ZanYQYAZSn-y244crPOBtKm-AqgG3_N46Ia4/pub",
  },
  {
    name: "Curso de frontend",
    description:
      "Curso de frontend para el armado y diseño de una web con HTML, CSS y Javascript",
    img: "src/cursos/frontend.svg",
    url: "https://docs.google.com/document/d/e/2PACX-1vRPFIdZYr1M-fdnP4q04G5fewXxpOmIcZngbZ8S70ELkXC3Ue2buEhi0k6VSrUnIstWYruFHrpYKiyP/pub",
  },
  {
    name: "Curso de backend",
    description: "Curso que contiene conceptos básico de backend",
    img: "src/cursos/backend.png",
    url: "https://docs.google.com/document/d/e/2PACX-1vR6Yst05MsddXjhT0bBB2HoeHOHKUpZ7QwBMLw3zohoytkNyvZNuLCt1aEpsuB4qvnZsCFZd_-0eeG9/pub",
  },
  {
    name: "Curso de react",
    description: "Curso de react para principiantes",
    img: "src/habilidades/react.svg",
    url: "https://docs.google.com/document/d/e/2PACX-1vQCZ4LboVYjLM1ArNOqbsyCVqzX4Tx7rviP9dzf2U-lKIdKAjR_g3ip30PYqp9hpy6gnqKp5cJqRXm6/pub",
  },
  {
    name: "Curso de node js",
    description: "Curso de node js para principiantes",
    img: "src/habilidades/node-js.svg",
    url: "https://docs.google.com/document/d/e/2PACX-1vTkj4yQ__OKy0Yl9NmrbcpJQHRorR0oYTiA9AQhzE_Lr4qEiIsdNIO6D_kakqZAzY_c_Sxqck_AzDBn/pub",
  },
  {
    name: "Curso de base de datos",
    description: "Curso de base de datos para principiantes",
    img: "src/cursos/base-de-datos.png",
    url: "https://docs.google.com/document/d/e/2PACX-1vQwz17BI7zZZr-Z5vfJexKToeGNBzioDTQdTewKWuE9pmco1eeakHxJGQToXJkppB1banon-RzAFy-v/pub",
  },
  {
    name: "Curso de git",
    description: "Curso de git para principiantes",
    img: "src/habilidades/git.svg",
    url: "https://docs.google.com/document/d/e/2PACX-1vQEZJzW7zCOV1brpxGdL2R0RWcrAZchqYifse3QUJ4aIk61fh2Rc1daq76wZinx7IP7tqow8-glHUgb/pub",
  },
  {
    name: "Curso de linux",
    description: "Curso de linux para principiantes",
    img: "src/habilidades/linux.png",
    url: "https://docs.google.com/document/d/e/2PACX-1vSE2rqgPIFfK-aGIB7Z0diXDhT5W3GZ47o36t_M-wp2-wNn-GgOo9OqFrrB7c8u3tFM-rtiz-3TWmsZ/pub",
  },
];

// Render
const skills_label = document.querySelector(".skills");
const projects_label = document.querySelector(".projects");
const courses_label = document.querySelector(".courses");
const time = document.querySelector(".time");

function render() {
  // Theme
  handleChangeTheme(localStorage.getItem("theme") === "dark");

  // Skills
  skills.forEach((skill) => {
    skills_label.innerHTML += `
        <div class="skill" title="Experiencia: desde ${skill.year}\n${skill.description}">
            <img src=${skill.img} width='50' arial-label="${skill.name}">
            <div class="skill-text">${skill.name}</div>
        </div>
        `;
  });

  // Projects
  projects.forEach((project) => {
    projects_label.innerHTML += `
        <div class="card">
            <div class="card-img">
                <img src="${project.img}" alt="${project.name}"/>
                <filter/>
            </div>
            <div class="card-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <br />
                <div class="card-icons">
                    ${project.skills.map((skill) => {
                      const skill_ = skills.find(
                        (skill_) => skill_.name === skill
                      );
                      return `<img src=${skill_.img} width='20' style="border-radius: 50%;" arial-label="${skill_.name}">`;
                    })}
                </div>
                <div class="card-links">
                    ${
                      project.repo !== undefined
                        ? `<a href="${project.repo}" aria-label="REPO" target="_blank"><i class="uil uil-github"></i></a>`
                        : `<div></div>`
                    }
                    ${
                      project.demo !== undefined
                        ? `<a href="${project.demo}" aria-label="DEMO" target="_blank"><i class="uil uil-play-circle"></i></a>
                    `
                        : `<div></div>`
                    }        
                </div>
            </div>
        </div>
        `;
  });

  // Courses
  courses.forEach((course) => {
    courses_label.innerHTML += `
        <div class="card card-hover" onclick="window.open('${course.url}')">
            <div class="card-content">
                <h3>${course.name}</h3>
                <img src="${course.img}" alt="" arial-label="${course.name}"/>
                <p>${course.description}</p>
            </div>
        </div>
        `;
  });

  // Time
  setInterval(() => {
    currentTime = new Date();
    hours = currentTime.getHours();
    minutes =
      currentTime.getMinutes() < 10
        ? "0" + currentTime.getMinutes()
        : currentTime.getMinutes();
    timeString = `${hours}:${minutes}`;
    time.innerHTML = timeString;
  }, 1000);

  // Year in footer
  const year = document.querySelector(".year");
  year.textContent = new Date().getFullYear();
}

render();

// Another animation
const textReveal = (text, delay = 0, duration = 2000) => {
  let textWrapper = document.querySelector(text);
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter' style='display: inline-block;'>$&</span>"
  );
  anime.timeline().add({
    targets: text + " .letter",
    translateY: [200, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    delay: (el, i) => 1100 + 1000 * (delay - 1) + 50 * i,
    duration,
  });
};

gsap.set(".card", { opacity: 0, y: 100 });
ScrollTrigger.batch(".card", {
  onEnter: (t) => gsap.to(t, { stagger: 0.1, opacity: 1, y: 0 }),
  onLeaveBack: (t) => gsap.to(t, { opacity: 0, y: 100 }),
});

Draggable.create(".skill", {
  type: "x,y",
  edgeResistance: 0.65,
  bounds: ".desktop",
  inertia: true,
  cursor: "default",
  zIndexBoost: false,
});
