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

gsap.timeline({
  scrollTrigger: {
    trigger:".n5", 
    end: "bottom top",
    // markers: true,
    scrub: true,
    pin:true
  }
})
// .from(".n5",{opacity: 0})
.from(".text1",{y: innerHeight, opacity: 0})
.from(".text2",{y: innerHeight, opacity: 0})
.from(".text3",{y: innerHeight, opacity: 0}) 

gsap.set(".gallery a", {opacity: 0, y: 100}); /* Establecer propiedades iniciales */
ScrollTrigger.batch(".gallery a", {
  // start: "20px bottom",
  end: `center 200`,
  onEnter: t => gsap.to(t, {opacity: 1, y: 0, stagger: 0.1}), /* Al entrar */
  onLeave: t => gsap.to(t, {opacity: 0, y: -100, stagger: 0.1}), /* Al salir */
  onEnterBack: t => gsap.to(t, {opacity: 1, y: 0, stagger: 0.1}), /* Al volver por la salida */
  onLeaveBack: t => gsap.to(t, {opacity: 0, y: 100, stagger: 0.1}), /* Al salir por la entrada*/
});