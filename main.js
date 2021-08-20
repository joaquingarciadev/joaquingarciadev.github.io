let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide");
options.forEach((ele,index)=>{
  ele.addEventListener("mouseover",()=>{
    slide.style.left = 100/options.length*index + "%";
  });
});

gsap.timeline({
  scrollTrigger: {
    trigger:".n2",
    pin:true
  }
})

gsap.set(".gallery a", {opacity: 0, y: 100}); /* Establecer propiedades iniciales */
ScrollTrigger.batch(".gallery a", {
  // start: "20px bottom",
  end: `center 200`,
  onEnter: t => gsap.to(t, {opacity: 1, y: 0, stagger: 0.1}), /* Al entrar */
  onLeave: t => gsap.to(t, {opacity: 0, y: -100, stagger: 0.1}), /* Al salir */
  onEnterBack: t => gsap.to(t, {opacity: 1, y: 0, stagger: 0.1}), /* Al volver por la salida */
  onLeaveBack: t => gsap.to(t, {opacity: 0, y: 100, stagger: 0.1}), /* Al salir por la entrada*/
});

gsap.set(".n5 a", {opacity: 0, y: 100}); /* Establecer propiedades iniciales */
ScrollTrigger.batch(".n5 a", {
  onEnter: t => gsap.to(t, {opacity: 1, y: 0}), /* Al entrar */
  onLeaveBack: t => gsap.to(t, {opacity: 0, y: 100}), /* Al salir por la entrada*/
});