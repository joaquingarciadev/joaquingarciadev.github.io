// Loader & Whatsapp
const loader = () => {
    // const loaderWrapper = document.querySelector(".wrapper");
    // loaderWrapper.classList.add("fade");

    document.querySelector(".whatsapp").classList.add("show");
};

window.addEventListener("load", loader);

// Navbar
let previousScroll = window.scrollY;
window.onscroll = function () {
    // Effect hide and show navbar
    let currentScroll = window.scrollY;
    if (previousScroll > currentScroll) {
        document.querySelector("nav").style.top = "0";
    } else {
        if (previousScroll > 400)
            document.querySelector("nav").style.top = "-200px";
    }
    previousScroll = currentScroll;
};

// Submenu
const allSubmenuToggles = document.querySelectorAll(".submenu-toggle");
allSubmenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const parentListItem = toggle.closest("li"); // Encuentra el elemento <li> padre más cercano
        const submenu = parentListItem.querySelector(".submenu"); // Busca el elemento .submenu dentro del padre

        if (submenu) {
            submenu.classList.toggle("show"); // Agrega o quita la clase "show" para mostrar u ocultar el submenu
        }
    });
});

const resetSubmenus = () => {
    const allSubmenus = document.querySelectorAll(".submenu");
    allSubmenus.forEach((submenu) => {
        submenu.classList.remove("show");
    });
};

// Sidebar
const sidebar = document.querySelector(".sidebar");

const toggleSidebar = () => {
    sidebar.classList.toggle("show");
    // block the scroll when sidebar is open
    document.querySelector("body").classList.toggle("no-scroll");

    resetSubmenus();
};

// Close sidebar when click on a link
const allLinksSidebar = document.querySelectorAll(".sidebar a");
allLinksSidebar.forEach((link) => {
    link.addEventListener("click", () => {
        toggleMenu();
        toggleSidebar();
    });
});

// Menu toggle
const menuToggle = document.querySelector(".menu-toggle");

const toggleMenu = () => {
    if (menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active");
        menuToggle.classList.add("not-active");
    } else {
        menuToggle.classList.remove("not-active");
        menuToggle.classList.add("active");
    }
};

menuToggle.addEventListener("click", function () {
    toggleMenu();
    toggleSidebar();
});

// Theme
const handleChangeTheme = (param) => {
    if (param) {
        document.querySelector("body").classList.add("dark");
        document
            .querySelector("meta[name=theme-color]")
            .setAttribute("content", "#171717");
        localStorage.setItem("theme", "dark");
    } else {
        document.querySelector("body").classList.remove("dark");
        document
            .querySelector("meta[name=theme-color]")
            .setAttribute("content", "#fff");
        localStorage.setItem("theme", "light");
    }
};

document.querySelectorAll("#toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const isDark = localStorage.getItem("theme") === "dark";
        handleChangeTheme(!isDark);
    });
});

// Data
const skills = [
    {
        name: "HTML",
        img: "src/habilidades/html-5.webp",
        description: "Lenguaje de marcado para la creación de páginas web.",
        descriptionEn: "Markup language for creating web pages.",
        year: "2017",
    },
    {
        name: "CSS",
        img: "src/habilidades/css-3.webp",
        description: "Lenguaje de estilos para la creación de páginas web.",
        descriptionEn: "Style language for creating web pages.",
        year: "2017",
    },
    {
        name: "Javascript",
        img: "src/habilidades/js.webp",
        description:
            "Lenguaje de programación para la creación de páginas web.",
        descriptionEn: "Programming language for creating web pages.",
        year: "2017",
    },
    {
        name: "React",
        img: "src/habilidades/react.webp",
        description:
            "Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario.",
        descriptionEn: "Open source Javascript library designed to create UIs.",
        year: "2020",
    },
    {
        name: "Next JS",
        img: "src/habilidades/next-js.webp",
        description: "Framework de creación de páginas web.",
        descriptionEn: "Web page creation framework.",
        year: "2022",
    },
    {
        name: "Node JS",
        img: "src/habilidades/node-js.webp",
        description:
            "Entorno en tiempo de ejecución para la capa del servidor basado en el lenguaje de programación JavaScript.",
        descriptionEn:
            "Runtime environment for the server layer based on the JavaScript programming language.",
        year: "2020",
    },
    {
        name: "Express JS",
        img: "src/habilidades/express-js.webp",
        description:
            "Infraestructura web rápida, minimalista y flexible para Node.js.",
        descriptionEn:
            "Fast, minimalist and flexible web infrastructure for Node.js.",
        year: "2020",
    },
    {
        name: "MongoDB",
        img: "src/habilidades/mongodb.webp",
        description: "Base de datos para la creación de páginas web.",
        descriptionEn: "Database for creating web pages.",
        year: "2020",
    },
    {
        name: "MySQL",
        img: "src/habilidades/sql.webp",
        description: "Base de datos para la creación de páginas web.",
        descriptionEn: "Database for creating web pages.",
        year: "2020",
    },
    {
        name: "Bootstrap",
        img: "src/habilidades/bootstrap.webp",
        description: "Framework de creación de páginas web.",
        descriptionEn: "Web page creation framework.",
        year: "2020",
    },
    {
        name: "Git",
        img: "src/habilidades/git.webp",
        description: "Software de control de versiones.",
        descriptionEn: "Version control software.",
        year: "2020",
    },
    // {
    //   name: "Docker",
    //   img: "src/habilidades/docker.webp",
    //   description: "Software de despliegue de aplicaciones.",
    //   descriptionEn: "Application deployment software.",
    //   year: "2022",
    // },
    {
        name: "Firebase",
        img: "src/habilidades/firebase.webp",
        description: "Plataforma de desarrollo y hosting.",
        descriptionEn: "Development and hosting platform.",
        year: "2020",
    },
    {
        name: "Linux",
        img: "src/habilidades/linux.webp",
        description: "Sistema operativo open source.",
        descriptionEn: "Open source operating system.",
        year: "2020",
    },
    {
        name: "Photoshop",
        img: "src/habilidades/photoshop.webp",
        description: "Programa de diseño.",
        descriptionEn: "Design program.",
        year: "2021",
    },
    {
        name: "PHP",
        img: "src/habilidades/php.webp",
        description:
            "Lenguaje de programación, utilizado junto a WordPress para el desarrollo de funcionalidades avanzadas.",
        descriptionEn:
            "Programming language, used with WordPress for developing advanced functionalities.",
        year: "2020",
    },
    {
        name: "Wordpress",
        img: "src/habilidades/wordpress.webp",
        description:
            "Plataforma utilizada para el desarrollo de sitios web, incluyendo funcionalidades avanzadas como CPT (Custom Post Types) y campos personalizados.",
        descriptionEn:
            "Platform used for developing websites, including advanced functionalities such as CPT (Custom Post Types) and custom fields.",
        year: "2020",
    },
    {
        name: "Elementor",
        img: "src/habilidades/elementor.webp",
        description: "Constructor de páginas web para Wordpress.",
        descriptionEn: "Web page builder for Wordpress.",
        year: "2020",
    },
    {
        name: "Woocommerce",
        img: "src/habilidades/woocommerce.webp",
        description: "Plugin de Wordpress para la creación de tiendas online.",
        descriptionEn: "Wordpress plugin for creating online stores.",
        year: "2020",
    },
];

const projects = [
    {
        name: "Gloed",
        nameEn: "Gloed",
        description:
            "Gloed es una tienda online que ofrece productos de limpieza y cuidado personal, brindando soluciones para el hogar con una variedad de artículos esenciales.",
        descriptionEn:
            "Gloed is an online store offering cleaning and personal care products, providing home solutions with a variety of essential items.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "PHP",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/gloed.webp",
        demo: "https://gloed.com.ar/",
        tipo: "web",
    },
    {
        name: "Farmacia Siman",
        nameEn: "Farmacia Siman",
        description:
            "Farmacia Siman ofrece productos de salud, belleza y cuidado personal, brindando una amplia gama de artículos esenciales para el bienestar.",
        descriptionEn:
            "Farmacia Siman offers health, beauty and personal care products, providing a wide range of essential items for well-being.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "PHP",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/farmaciasiman.webp",
        demo: "https://farmaciasiman.com.ar/",
        tipo: "web",
    },
    {
        name: "Menzi Almada",
        nameEn: "Menzi Almada",
        description:
            "Menzi Almada es una concesionaria familiar en Villa Allende, Córdoba, especializada en la venta de autos, motos, SUVs y pickups, con un enfoque en transparencia y atención personalizada.",
        descriptionEn:
            "Menzi Almada is a family dealership in Villa Allende, Córdoba, specializing in the sale of cars, motorcycles, SUVs and pickups, with a focus on transparency and personalized service.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "PHP",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/menzialmada.webp",
        demo: "https://menzialmada.com.ar/",
        tipo: "web",
    },
    {
        name: "La Cautiva",
        nameEn: "La Cautiva",
        description:
            "La Cautiva es una tienda especializada en productos para asadores, ofreciendo una amplia variedad de fogoneros, kamados, cuchillería y accesorios gourmet",
        descriptionEn:
            "La Cautiva is a store specialized in products for grillers, offering a wide variety of fire pits, kamados, cutlery and gourmet accessories.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "PHP",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/lacautivacba.webp",
        demo: "https://lacautivacba.com/",
        tipo: "web",
    },
    {
        name: "UON",
        nameEn: "UON",
        description:
            "UON es un desarrollo inmobiliario con más de 20 años de experiencia, enfocado en crear espacios urbanos innovadores y de alta calidad",
        descriptionEn:
            "UON is a real estate developer with over 20 years of experience, focused on creating innovative and high-quality urban spaces.",
        skills: ["Wordpress", "Elementor", "PHP", "HTML", "CSS", "Javascript"],
        img: "src/proyectos/uon.webp",
        demo: "https://uon.com.py/",
        tipo: "web",
    },
    {
        name: "Ezimpl / Reply",
        nameEn: "Ezimpl / Reply",
        description:
            "Reply es una empresa internacional que ayuda a otras empresas a mejorar sus ventas online mediante estrategias y una gestión integral de e-commerce.",
        descriptionEn:
            "Reply is an international company that helps businesses improve their online sales through strategies and comprehensive e-commerce management.",
        skills: ["Wordpress", "Elementor", "PHP", "HTML", "CSS", "Javascript"],
        img: "src/proyectos/replylatam.webp",
        demo: "https://replylatam.com/",
        tipo: "web",
    },
    {
        name: "AUAD GRAF - Estudio Jurídico",
        nameEn: "AUAD GRAF - Law Firm",
        description:
            "Rediseñé el sitio web de Auad Graf, un estudio jurídico, en colaboración con el equipo de <a href='https://criteriastudio.com.ar/'><b>Criteria Studio</b></a>.",
        descriptionEn:
            "I redesigned the website of Auad Graf, a law firm, in collaboration with the team at <a href='https://criteriastudio.com.ar/'><b>Criteria Studio</b></a>.",
        skills: ["Wordpress", "Elementor", "PHP", "HTML", "CSS", "Javascript"],
        img: "src/proyectos/auadgraf.webp",
        demo: "https://www.auadgraf.com.ar/inicio/",
        tipo: "web",
    },
    {
        name: "GC Dental",
        nameEn: "GC Dental",
        description:
            "Desarrollé un e-commerce en colaboración con el equipo de <a href='https://criteriastudio.com.ar/'><b>Criteria Studio</b></a> para GC Dental, una empresa de insumos odontológicos.",
        descriptionEn:
            "I developed a e-commerce in collaboration with the team at <a href='https://criteriastudio.com.ar/'><b>Criteria Studio</b></a> for GC Dental, a dental supplies company.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "PHP",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/gcdental.webp",
        demo: "https://gcdental.com.ar/",
        tipo: "web",
    },
    {
        name: "LM Amoblamientos",
        nameEn: "LM Amoblamientos",
        description:
            "Desarrollé un catálogo web en colaboración con el equipo de <a href='https://criteriastudio.com.ar/'><b>Criteria Studio</b></a>, incorporando una forma dinámica en PHP para acceder a los productos por atributos.",
        descriptionEn:
            "I developed a web catalog in collaboration with the <a href='https://criteriastudio.com.ar/'><b>Criteria Studio</b></a> team, integrating a dynamic PHP-based method to access products by attributes.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "PHP",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/lmamoblamientos.webp",
        demo: "https://lmamoblamientos.com.ar/",
        tipo: "web",
    },
    {
        name: "Deligood - Helados",
        nameEn: "Deligood - Helados",
        description:
            "Desarrollé una landing page para la heladería Deligood en colaboración con el equipo de <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a>.",
        descriptionEn:
            "I developed a landing page for the ice cream shop Deligood in collaboration with the team at <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a>.",
        skills: ["Wordpress", "Elementor", "PHP", "HTML", "CSS", "Javascript"],
        img: "src/proyectos/deligood.webp",
        demo: "https://deligood.com.ar/",
        tipo: "web",
    },
    {
        name: "Planetizar - Agencia de viajes",
        nameEn: "Planetizar - Travel Agency",
        description:
            "Desarrollé el sitio web de Planetizar junto al Equipo de <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a>, una plataforma para reservar experiencias de viaje únicas. El diseño equilibra funcionalidad y estética, ofreciendo una experiencia intuitiva para explorar y reservar experiencias personalizadas.",
        descriptionEn:
            "I developed the Planetizar website alongside the team at <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a>, a platform for booking unique travel experiences. The design balances functionality and aesthetics, providing an intuitive experience for exploring and booking personalized adventures.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "PHP",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/planetizar.jpg",
        demo: "https://planetizar.com/",
        tipo: "web",
    },
    {
        name: "Cucina | Software de ventas – Mucho más que, un software de ventas",
        nameEn: "Cucina | Sales software - Much more than, a sales software",
        description:
            "Página institucional desarrollada junto al Equipo de <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a>, para una empresa de software aplicada a la gastronomía.",
        descriptionEn:
            "Institutional page developed with the <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a>, for a software company applied to gastronomy.",
        skills: ["Wordpress", "Elementor", "HTML", "CSS", "Javascript"],
        img: "src/proyectos/cucinago.webp",
        demo: "https://cucinago.cloud/",
        tipo: "web",
    },
    {
        name: "American Pass – Sistema web para brokers y productores de seguros",
        nameEn: "American Pass - Web system for insurance brokers and producers",
        description:
            "Landing page desarrollada junto al Equipo de <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a>, utilizando Elementor y plugins de Wordpress para personalizar el sitio y adaptarlo a las necesidades del cliente.",
        descriptionEn:
            "Landing page developed with the <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a>, using Elementor and Wordpress plugins to customize the site and adapt it to the client's needs.",
        skills: ["Wordpress", "Elementor", "HTML", "CSS", "Javascript"],
        img: "src/proyectos/americanpass.webp",
        demo: "https://americanpass.com.ar/",
        tipo: "web",
    },
    {
        name: "BOIERO S.A. - Sitio web de soluciones para energía, agua y telecomunicaciones.",
        nameEn: "BOIERO S.A. - Website for energy, water and telecommunications solutions.",
        description:
            "Catálogo Web desarrollado junto al Equipo de <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a> para explorar y solicitar presupuestos de productos, donde aprendí a usar plugins y código personalizado para activar el modo catálogo en WooCommerce.",
        descriptionEn:
            "Web Catalog developed with the <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a> to explore and request quotes for products, where I learned to use plugins and custom code to activate the catalog mode in WooCommerce.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/boiero.webp",
        demo: "https://www.boiero.com.ar/",
        tipo: "web",
    },
    {
        name: "Previa - Plataforma para reuniones y eventos sociales",
        nameEn: "Previa - Platform for meetings and social events",
        description:
            "Red social desarrollado junto al Equipo de <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a> para coordinar reuniones y eventos sociales, donde personalicé el tema y plugins de Wordpress para adaptarlos a las necesidades del cliente.",
        descriptionEn:
            "Social network developed with the <a href='https://criteriastudio.com.ar/'><b>CriteriA Studio</b></a> to coordinate meetings and social events, where I customized the Wordpress theme and plugins to adapt them to the client's needs.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "PHP",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/previa.webp",
        demo: "https://previa.com.ar/",
        tipo: "web",
    },
    {
        name: "Hibridos - Sitio web de Agencia de Marketing Digital",
        nameEn: "Hibridos - Digital Marketing Agency Website",
        description:
            "Desarrollé una página web para una agencia de marketing digital, permitiendo a los clientes explorar y reservar servicios, y aprendí a usar plugins para hacer el sitio multilenguaje.",
        descriptionEn:
            "I made a website for a digital marketing agency, allowing customers to explore and book services, and learned to use plugins to make the site multilingual.",
        skills: ["Wordpress", "Elementor", "HTML", "CSS", "Javascript"],
        img: "src/proyectos/hibridosagencia.webp",
        demo: "https://hibridosagencia.com/",
        tipo: "web",
    },
    {
        name: "Afrodita's Pleasure - Tienda de lencería",
        nameEn: "Afrodita's Pleasure - Lingerie and underwear store",
        description:
            "Desarrollé una tienda de lencería, aprendiendo a crear plantillas de productos en Elementor y a configurar métodos de pago y envío en WooCommerce.",
        descriptionEn:
            "I developed a lingerie store, learning to create product templates in Elementor and configure payment and shipping methods in WooCommerce.",
        skills: [
            "Wordpress",
            "Elementor",
            "Woocommerce",
            "HTML",
            "CSS",
            "Javascript",
        ],
        img: "src/proyectos/afroditaspleasure.png",
        demo: "https://afroditaspleasure.com/",
        tipo: "web",
    },
    {
        name: "The Rod and Co. - Sitio web de Agencia Digital",
        nameEn: "The Rod and Co. - Digital Agency Website",
        description:
            "Realicé una página web para una Agencia Digital, ofreciendo a los clientes una plataforma digital para explorar y reservar sus servicios. En esta aprendí a usar Elementor y a personalizar plantillas de Wordpress.",
        descriptionEn:
            "I made a website for a Digital Agency, offering customers a digital platform to explore and book their services. In this I learned to use Elementor and customize Wordpress templates.",
        skills: ["Wordpress", "Elementor", "HTML", "CSS", "Javascript"],
        img: "src/proyectos/therodandco.png",
        demo: "https://therodandco.com/",
        tipo: "web",
    },
    {
        name: "La Fermina - Sitio web de Fiestas & Eventos",
        nameEn: "La Fermina - Catering & Events Website",
        description:
            "Realicé una página web para un Salón de Fiestas y Eventos, ofreciendo a los clientes una plataforma digital para explorar y reservar sus servicios.",
        descriptionEn:
            "I made a website for a Party and Events Hall, offering customers a digital platform to explore and book their services.",
        skills: ["HTML", "CSS", "Javascript"],
        img: "src/proyectos/laferminafiestasyeventos.png",
        demo: "https://laferminafiestasyeventos.netlify.app",
        tipo: "web",
    },
    // {
    //     name: "Blog simple",
    //     nameEn: "Simple blog",
    //     description: "Blog realizado en nextjs utilizando markdown.",
    //     descriptionEn: "Blog made in nextjs using markdown.",
    //     skills: ["React", "Next JS"],
    //     img: "src/proyectos/blog-simple.png",
    //     repo: "#",
    //     demo: "https://blog-simple.vercel.app",
    // },
    // {
    //     name: "Sistema de turnos",
    //     nameEn: "Shift system",
    //     description: "Sistema para la gestión de turnos.",
    //     descriptionEn: "System for managing shifts.",
    //     skills: ["React", "Next JS", "Node JS", "Express JS", "MongoDB"],
    //     img: "src/proyectos/sistema-de-turnos.png",
    //     repo: "#",
    //     demo: "https://sistema-de-turnos.vercel.app",
    // },
    // {
    //     name: "Sistema para restaurantes",
    //     nameEn: "Restaurant system",
    //     description:
    //         "Sistema para restaurantes para administrar ordenes.",
    //     descriptionEn:
    //         "Restaurant system to manage orders.",
    //     skills: ["React", "Next JS", "Node JS", "Express JS", "MongoDB"],
    //     img: "src/proyectos/sistema-para-restaurantes.png",
    //     repo: "#",
    //     demo: "https://sistema-para-restaurantes.vercel.app",
    // },
    {
        name: "Sistema de ventas",
        nameEn: "Sales system",
        description:
            "Desarrollé un sistema de ventas que permite a los usuarios gestionar sus ventas de manera efectiva. Empleé el stack MERN y amplié mis habilidades al aprender Firebase para la autenticación de usuarios y Cloudinary para la gestión de imágenes.",
        descriptionEn:
            "I developed a sales system that allows users to manage their sales effectively. I used the MERN stack and expanded my skills by learning Firebase for user authentication and Cloudinary for image management.",
        skills: ["React", "Next JS", "Firebase"],
        img: "src/proyectos/app-sistema-de-ventas.png",
        // repo: "https://github.com/joaquingarciadev/sistema-de-usuarios.git",
        demo: "https://app-sistema-de-ventas.vercel.app",
        tipo: "app",
    },
    {
        name: "Sistema de usuarios",
        nameEn: "User system",
        description:
            "Desarrollé una aplicación completa con autenticación, registro y gestión de usuarios, fortaleciendo mis habilidades en el stack MERN y aprendiendo a implementar la autenticación OAuth.",
        descriptionEn:
            "I developed a complete application with authentication, registration and user management, strengthening my skills in the MERN stack and learning to implement OAuth authentication.",
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
        demo: "src/proyectos/sistema-de-usuarios.png",
        tipo: "app",
    },
    // {
    //     name: "App pedidos",
    //     nameEn: "App orders",
    //     description: "App de pedidos simple.",
    //     descriptionEn: "Simple order app.",
    //     skills: ["React", "Next JS", "Node JS", "Express JS", "MongoDB"],
    //     img: "src/proyectos/app-pedidos.png",
    //     repo: "https://github.com/joaquingarciadev/app-pedidos.git",
    //     demo: "https://joaquingarciadev.github.io/src/proyectos/app-pedidos.png",
    // },
    {
        name: "Cripto alarma",
        nameEn: "Crypto alarm",
        description:
            "Esta es una aplicación web desarrollada en Next.js que te permite establecer alarmas para criptomonedas. Aprendí a hacer una API con Next.js y también a realizar scraping dentro de ella.",
        descriptionEn:
            "This is a web application developed in Next.js that allows you to set alarms for cryptocurrencies. I learned to make an API with Next.js and also to perform scraping within it.",
        skills: ["React", "Next JS", "Bootstrap"],
        img: "src/proyectos/app-cripto-alarma.png",
        repo: "https://github.com/joaquingarciadev/app-cripto-alarma.git",
        demo: "https://app-cripto-alarma.vercel.app/",
        tipo: "app",
    },
    {
        name: "Mi portafolio web",
        nameEn: "My web portfolio",
        description:
            "Desarrollé un portafolio interactivo utilizando HTML, CSS y Javascript, donde muestro mi trabajo y habilidades. Además, incorporé animaciones dinámicas utilizando GSAP para agregar un toque especial a la experiencia de navegación.",
        descriptionEn:
            "I developed an interactive portfolio using HTML, CSS and Javascript, where I show my work and skills. In addition, I incorporated dynamic animations using GSAP to add a special touch to the browsing experience.",
        skills: ["HTML", "CSS", "Javascript"],
        img: "src/proyectos/portafolio.png",
        demo: "https://joaquingarciadev.github.io/",
        tipo: "web",
    },
    {
        name: "Juego cajero",
        nameEn: "Cashier game",
        description:
            "Juego de simulación de caja registradora. Aprende y diviértete mientras practicas tus habilidades en la gestión de efectivo.",
        descriptionEn:
            "Cash register simulation game. Learn and have fun while practicing your cash management skills.",
        skills: ["HTML", "CSS", "Javascript"],
        img: "src/proyectos/Juego Cajero.png",
        repo: "https://github.com/joaquingarciadev/juego_cajero",
        demo: "https://joaquingarciadev.github.io/juego_cajero/",
        tipo: "other",
    },
    {
        name: "Máquina tragamonedas",
        nameEn: "Slot machine",
        description:
            "Este es un juego de máquina tragamonedas en el que aprendí a crear animaciones lógicas utilizando JavaScript. El juego simula una máquina tragamonedas clásica y puede ser utilizado como una herramienta de marketing o para entretener a los usuarios.",
        descriptionEn:
            "This is a slot machine game where I learned to create logical animations using JavaScript. The game simulates a classic slot machine and can be used as a marketing tool or to entertain users.",
        skills: ["HTML", "CSS", "Javascript"],
        img: "src/proyectos/tragamonedas.png",
        repo: "https://github.com/joaquingarciadev/tragamonedas",
        demo: "https://joaquingarciadev.github.io/tragamonedas/",
        tipo: "other",
    },
];

const courses = [
    {
        name: "Curso de programación",
        nameEn: "Programming Course",
        description:
            "Contiene conceptos básicos de algunos lenguajes de programación",
        descriptionEn: "Contains basic concepts of some programming languages",
        img: "src/cursos/programacion.png",
        url: "https://docs.google.com/document/d/e/2PACX-1vS_XTuqbf-aoqEssa2urPo4XLbjp_PxyN3NqFOtmxM-ZanYQYAZSn-y244crPOBtKm-AqgG3_N46Ia4/pub",
    },
    {
        name: "Curso de frontend",
        nameEn: "Frontend Course",
        description:
            "Curso de frontend para el armado y diseño de una web con HTML, CSS y Javascript",
        descriptionEn:
            "Frontend course for building and designing a web with HTML, CSS, and Javascript",
        img: "src/cursos/frontend.svg",
        url: "https://docs.google.com/document/d/e/2PACX-1vRPFIdZYr1M-fdnP4q04G5fewXxpOmIcZngbZ8S70ELkXC3Ue2buEhi0k6VSrUnIstWYruFHrpYKiyP/pub",
    },
    {
        name: "Curso de backend",
        nameEn: "Backend Course",
        description: "Curso que contiene conceptos básico de backend",
        descriptionEn: "Course that covers basic concepts of backend",
        img: "src/cursos/backend.png",
        url: "https://docs.google.com/document/d/e/2PACX-1vR6Yst05MsddXjhT0bBB2HoeHOHKUpZ7QwBMLw3zohoytkNyvZNuLCt1aEpsuB4qvnZsCFZd_-0eeG9/pub",
    },
    {
        name: "Curso de react",
        nameEn: "React Course",
        description: "Curso de react para principiantes",
        descriptionEn: "React course for beginners",
        img: "src/habilidades/react.svg",
        url: "https://docs.google.com/document/d/e/2PACX-1vQCZ4LboVYjLM1ArNOqbsyCVqzX4Tx7rviP9dzf2U-lKIdKAjR_g3ip30PYqp9hpy6gnqKp5cJqRXm6/pub",
    },
    {
        name: "Curso de node js",
        nameEn: "Node.js Course",
        description: "Curso de node js para principiantes",
        descriptionEn: "Node.js course for beginners",
        img: "src/habilidades/node-js.svg",
        url: "https://docs.google.com/document/d/e/2PACX-1vTkj4yQ__OKy0Yl9NmrbcpJQHRorR0oYTiA9AQhzE_Lr4qEiIsdNIO6D_kakqZAzY_c_Sxqck_AzDBn/pub",
    },
    {
        name: "Curso de base de datos",
        nameEn: "Database Course",
        description: "Curso de base de datos para principiantes",
        descriptionEn: "Database course for beginners",
        img: "src/cursos/base-de-datos.png",
        url: "https://docs.google.com/document/d/e/2PACX-1vQwz17BI7zZZr-Z5vfJexKToeGNBzioDTQdTewKWuE9pmco1eeakHxJGQToXJkppB1banon-RzAFy-v/pub",
    },
    {
        name: "Curso de git",
        nameEn: "Git Course",
        description: "Curso de git para principiantes",
        descriptionEn: "Git course for beginners",
        img: "src/habilidades/git.svg",
        url: "https://docs.google.com/document/d/e/2PACX-1vQEZJzW7zCOV1brpxGdL2R0RWcrAZchqYifse3QUJ4aIk61fh2Rc1daq76wZinx7IP7tqow8-glHUgb/pub",
    },
    {
        name: "Curso de linux",
        nameEn: "Linux Course",
        description: "Curso de linux para principiantes",
        descriptionEn: "Linux course for beginners",
        img: "src/habilidades/linux.png",
        url: "https://docs.google.com/document/d/e/2PACX-1vSE2rqgPIFfK-aGIB7Z0diXDhT5W3GZ47o36t_M-wp2-wNn-GgOo9OqFrrB7c8u3tFM-rtiz-3TWmsZ/pub",
    },
];

// Render
const skills_label = document.querySelector(".skills");
const projects_label = document.querySelector(".projects");
// const courses_label = document.querySelector(".courses");
const time = document.querySelector(".time");

const isEnglishPage = window.location.pathname.includes("/en");

function render() {
    // Theme
    handleChangeTheme(localStorage.getItem("theme") === "dark");

    // Skills
    renderSkills();

    renderProjects();

    // Courses
    // courses.forEach((course) => {
    //   if (isEnglishPage) {
    //     course.name = course.nameEn;
    //     course.description = course.descriptionEn;
    //   }
    //   courses_label.innerHTML += `
    //       <div class="card card-hover" onclick="window.open('${course.url}')">
    //           <div class="card-content">
    //               <h4>${course.name}</h4>
    //               <img src="${course.img}" alt="" arial-label="${course.name}"/>
    //               <p>${course.description}</p>
    //           </div>
    //       </div>
    //       `;
    // });

    // Time
    setInterval(() => {
        currentTime = new Date();
        hours =
            currentTime.getHours() < 10
                ? "0" + currentTime.getHours()
                : currentTime.getHours();
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

function renderSkills() {
    const skillsNotShow = ["Bootstrap", "Firebase"];
    const skillsFiltered = skills.filter(
        (skill) => !skillsNotShow.includes(skill.name)
    );
    skillsFiltered.forEach((skill) => {
        const skill_title = isEnglishPage
            ? `Experience: since ${skill.year} \nDescription: ${skill.descriptionEn}`
            : `Experiencia: desde ${skill.year} \nDescripción: ${skill.description}`;
        skills_label.innerHTML += ` 
        <div class="skill" title="${skill_title}">
            <img src=${skill.img} width='50' arial-label="${skill.name}" alt="${skill.name}" title="${skill_title}" />
            <span class="skill-text">${skill.name}</span>
        </div>
        `;
    });
}

function renderProjects() {
    // Projects
    projects.forEach((project) => {
        if (isEnglishPage) {
            project.name = project.nameEn;
            project.description = project.descriptionEn;
        }
        projects_label.innerHTML += `
        <div class="card grid-item project ${project.tipo}">
            <div class="card-img">
                <img src="${project.img}" alt="${project.name}" title="${
            project.name
        }" />
            </div>
            <div class="card-content">
                <h4>${project.name}</h4>
                <p>${project.description}</p>
                <br />
                <div class="card-icons">
                    ${project.skills.map((skill) => {
                        const skill_ = skills.find(
                            (skill_) => skill_.name === skill
                        );
                        return `<img src=${skill_.img} width='20' style="border-radius: 50%;" arial-label="${skill_.name}" alt="${skill_.name}" title="${skill_.name}" />`;
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
}

render();

// Manejo del filtrado
const tabs = document.querySelectorAll('.tabs input[type="radio"]');
const projectsEl = document.querySelectorAll(".project");

tabs.forEach((tab) => {
    tab.addEventListener("change", () => {
        projectsEl.forEach((project) => {
            if (tab.value === "all") {
                project.classList.remove("hidden");
            } else {
                if (project.classList.contains(tab.value)) {
                    project.classList.remove("hidden");
                } else {
                    project.classList.add("hidden");
                }
            }
        });

        // Recalcula el layout de Macy.js y refresca ScrollTrigger
        macyInstance.recalculate(true);
        gsap.set(".card:not(.hidden)", { opacity: 0, y: 100 });
        ScrollTrigger.batch(".card:not(.hidden)", {
            onEnter: (t) => gsap.to(t, { stagger: 0.1, opacity: 1, y: 0 }),
            onLeaveBack: (t) => gsap.to(t, { opacity: 0, y: 100 }),
        });
    });
});

// Inicializa Macy.js
let macyInstance = Macy({
    container: ".masonry",
    margin: 20,
    columns: 3,
    breakAt: {
        767: 2,
        520: 1,
    },
    trueOrder: true,
});

// Inicializa GSAP y ScrollTrigger
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

// Cursor
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.top = `${posY}px`;
    cursorDot.style.left = `${posX}px`;

    cursorDot.animate(
        {
            top: `${posY}px`,
            left: `${posX}px`,
        },
        {
            duration: 200,
            fill: "forwards",
        }
    );
});

document.addEventListener("mouseover", function (event) {
    // Obtener el elemento sobre el cual se activó el evento
    var elemento = event.target;

    // Verificar si el elemento tiene cursor: pointer
    var tieneCursorPointer =
        window.getComputedStyle(elemento).getPropertyValue("cursor") ===
        "pointer";

    if (tieneCursorPointer) {
        cursorDot.classList.add("cursor-dot-large");
    } else {
        cursorDot.classList.remove("cursor-dot-large");
    }

    // si esta encima del elemento que como padre tiene un elemento con clase desktop
    if (elemento.closest(".screen")) {
        cursorDot.style.visibility = "hidden";
    } else {
        cursorDot.style.visibility = "visible";
    }
});

// Smooth scroll
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// fix Smooth scroll for "Scroll to" for id links
document.querySelectorAll('a[href^="#"]').forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", duration: 5000 });
        }
    });
});

//
// Animación de textos
//
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const doTextAnimations = (
        selector,
        type = "lines",
        delay = 0,
        customAnim = null
    ) => {
        document.querySelectorAll(selector).forEach((el) => {
            const text = new SplitType(el, { types: type });

            let elements;
            if (type.includes("chars")) elements = text.chars;
            else if (type.includes("words")) elements = text.words;
            else if (type.includes("lines")) {
                elements = text.lines;
                text.lines.forEach((line) => {
                    const mask = document.createElement("div");
                    mask.classList.add("mask");
                    line.parentNode.insertBefore(mask, line);
                    mask.appendChild(line);
                });
            }

            // Usar animación personalizada si está definida
            const animProps = customAnim || {
                y: 100,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.15,
            };

            gsap.from(elements, {
                ...animProps,
                delay: delay / 1000,
                scrollTrigger: {
                    trigger: el,
                    toggleActions: "play none play none",
                },
            });
        });
    };

    doTextAnimations("h1", "lines");
    doTextAnimations("h2", "lines");
    doTextAnimations("#about p", "lines", 600, {
        autoAlpha: 0,
        scale: 0.95, // zoom in mínimo
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
    });

    const doAnimations = (selector, delay = 0, customAnim = null) => {
        const element = document.querySelector(selector);
        if (!element) return;
        const animProps = customAnim || {
            autoAlpha: 0,
            scale: 0.95,
            duration: 0.8,
            ease: "power2.out",
        };
        gsap.from(element, {
            ...animProps,
            delay: delay / 1000,
            scrollTrigger: {
                trigger: element,
                toggleActions: "play none play none",
            },
        });
    };

    doAnimations("h3", 400);
    doAnimations(".home-img", 400);
    doAnimations(".tabs", 400);
    doAnimations(".screen", 400);
    doAnimations(".contact", 400);
});
