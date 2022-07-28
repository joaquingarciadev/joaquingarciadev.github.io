let previousScroll = window.pageYOffset;
window.onscroll = function () {
    // Effect hide and show navbar
    let currentScroll = window.pageYOffset;
    if (previousScroll > currentScroll) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "-80px";
    }
    previousScroll = currentScroll;
    // Effect shadow navbar
    if (currentScroll > 100) {
        document.querySelector("nav").style.boxShadow = "0px 0px 10px 0px var(--shadow)";
    } else {
        document.querySelector("nav").style.boxShadow = "none";
    }
};

const showSidebar = () => {
    document.querySelector(".sidebar").classList.add("show-sidebar");
    document.querySelector(".overlay").classList.add("show-overlay");
};

const hideSidebar = () => {
    document.querySelector(".sidebar").classList.remove("show-sidebar");
    document.querySelector(".overlay").classList.remove("show-overlay");
};

document.querySelector(".switch input").addEventListener("change", (e) => {
    if (e.target.checked) {
        document.documentElement.style.setProperty("--background", "#171717");
        document.documentElement.style.setProperty("--text", "#f2f2f2");
        document.documentElement.style.setProperty("--second", "#212121");
        document.documentElement.style.setProperty("--shadow", "#000");
        document.documentElement.style.setProperty("--card", "#212121");
    } else {
        document.documentElement.style.setProperty("--background", "#fff");
        document.documentElement.style.setProperty("--text", "#171717");
        document.documentElement.style.setProperty("--second", "#ddd");
        document.documentElement.style.setProperty("--shadow", "#ddd");
        document.documentElement.style.setProperty("--card", "#fff");
    }
});

const skills = [
    {
        name: "HTML",
        img: "src/habilidades/html-5.svg",
    },
    {
        name: "CSS",
        img: "src/habilidades/css-3.svg",
    },
    {
        name: "Javascript",
        img: "src/habilidades/js.svg",
    },
    {
        name: "React",
        img: "src/habilidades/react.svg",
    },
    {
        name: "Next JS",
        img: "src/habilidades/next-js.png",
    },
    {
        name: "Node JS",
        img: "src/habilidades/node-js.svg",
    },
    {
        name: "Express JS",
        img: "src/habilidades/express-js.png",
    },
    {
        name: "MongoDB",
        img: "src/habilidades/MongoDB.png",
    },
    {
        name: "MySQL",
        img: "src/habilidades/sql.png",
    },
    {
        name: "Bootstrap",
        img: "src/habilidades/bootstrap.svg",
    },
    {
        name: "Git",
        img: "src/habilidades/git.svg",
    },
];

const projects = [
    {
        name: "Login Starter",
        description: "Login para una aplicación web",
        skills: ["React", "Next JS", "Node JS", "Express JS", "MongoDB", "Bootstrap"],
        img: "src/proyectos/loginmern.png",
        repo: "https://github.com/djoako22/login-starter.git",
        demo: "https://login-djoako22.vercel.app/",
    },
    {
        name: "Pedidos",
        description: "App para que tus clientes puedan hacer pedidos a tu local",
        skills: ["HTML", "CSS", "Javascript", "Node JS", "Express JS"],
        img: "src/proyectos/App Menus.png",
        repo: "https://github.com/Djoako22/app_pedidos",
        demo: "https://djoako22.github.io/app_pedidos",
    },
    {
        name: "Cripto Alarma",
        description: "Alarma de precio de criptomonedas",
        skills: ["HTML", "CSS", "Javascript", "Node JS", "Express JS"],
        img: "src/proyectos/Cripto Alarma.png",
        repo: "https://github.com/Djoako22/cripto_alarma",
        demo: "https://djoako22.github.io/cripto_alarma/",
    },
    {
        name: "Juego Cajero",
        description: "Juego para practicar y divertirte en el manejo de la caja",
        skills: ["HTML", "CSS", "Javascript"],
        img: "src/proyectos/Juego Cajero.png",
        repo: "https://github.com/Djoako22/juego_cajero",
        demo: "https://djoako22.github.io/juego_cajero/",
    },
    {
        name: "Máquina tragamonedas",
        description: "Juego Máquina tragamonedas",
        skills: ["HTML", "CSS", "Javascript"],
        img: "src/proyectos/tragamonedas.png",
        repo: "https://github.com/Djoako22/tragamonedas",
        demo: "https://djoako22.github.io/tragamonedas/",
    },
    {
        name: "Que comemos?",
        description: "App que te elije un plato de comida aleatoria",
        skills: ["HTML", "CSS", "Javascript"],
        img: "src/proyectos/Que Comemos.png",
        repo: "https://github.com/Djoako22/que_comemos",
        demo: "https://djoako22.github.io/que_comemos/",
    },
];

const courses = [
    {
        name: "Curso de programación",
        description: "Curso de programación para principiantes",
        img: "https://geekytheory.com/content/images/2014/10/coderesponsive.jpg",
        url: "https://docs.google.com/document/d/e/2PACX-1vS_XTuqbf-aoqEssa2urPo4XLbjp_PxyN3NqFOtmxM-ZanYQYAZSn-y244crPOBtKm-AqgG3_N46Ia4/pub",
    },
    {
        name: "Curso de frontend",
        description: "Curso de frontend para principiantes",
        img: "https://railsware.com/images/team/careers/front-end-developer-role-74120a0c.svg",
        url: "https://docs.google.com/document/d/e/2PACX-1vRPFIdZYr1M-fdnP4q04G5fewXxpOmIcZngbZ8S70ELkXC3Ue2buEhi0k6VSrUnIstWYruFHrpYKiyP/pub",
    },
    {
        name: "Curso de backend",
        description: "Curso de backend para principiantes",
        img: "https://cdn-icons-png.flaticon.com/512/6213/6213731.png",
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
        img: "https://cdn-icons-png.flaticon.com/512/2906/2906206.png",
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
        img: "https://codegeek.es/wp-content/uploads/2019/05/Terminalicon2.png",
        url: "https://docs.google.com/document/d/e/2PACX-1vSE2rqgPIFfK-aGIB7Z0diXDhT5W3GZ47o36t_M-wp2-wNn-GgOo9OqFrrB7c8u3tFM-rtiz-3TWmsZ/pub",
    },
];

const skills_label = document.querySelector(".skills");
const projects_label = document.querySelector(".projects");
const courses_label = document.querySelector(".courses");

function render() {
    // Skills
    skills.forEach((skill) => {
        skills_label.innerHTML += `
        <div class="skill" >
            <img src=${skill.img} width='100' arial-label="${skill.name}">
            <br>
            <b>${skill.name}</b>
        </div>
        `;
    });
    skills.forEach((skill) => {
        skills_label.innerHTML += `
        <div class="skill" >
            <img src=${skill.img} width='100' arial-label="${skill.name}">
            <br>
            <b>${skill.name}</b>
        </div>
        `;
    });
    // Projects
    projects.forEach((project) => {
        projects_label.innerHTML += `
        <div class="card">
            <div class="card-img">
                <img src="${project.img}" alt="" width="50"/>
                <filter/>
            </div>
            <div class="card-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="card-icons">
                    ${project.skills.map((skill) => {
                        const skill_ = skills.find((skill_) => skill_.name === skill);
                        return `<img src=${skill_.img} width='20' style="border-radius: 50%;" arial-label="${skill_.name}">`;
                    })}
                </div>
                <div class="card-links">
                    <a href="${project.repo}" aria-label="REPO"><i class="uil uil-github"></i></a>
                    <a href="${
                        project.demo
                    }" aria-label="DEMO"><i class="uil uil-play-circle"></i></a>
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
}

render();

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
gsap.set("#about", { opacity: 0, y: 500 });
ScrollTrigger.batch(".card", {
    onEnter: (t) => gsap.to(t, { stagger: 0.1, opacity: 1, y: 0 }),
    onLeaveBack: (t) => gsap.to(t, { opacity: 0, y: 100 }),
});
ScrollTrigger.batch("#about", {
    onEnter: (t) => gsap.to(t, { opacity: 1, y: 0 }),
});

textReveal("h3", 0, 500);