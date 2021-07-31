let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide");
options.forEach((ele,index)=>{
  ele.addEventListener("mouseover",()=>{
    slide.style.left = 100/options.length*index + "%";
  });
});

gsap.timeline({
  scrollTrigger: {
    trigger:".n1",  
    start: "center center", 
    end: "bottom center",
    // markers: true,
    scrub: true,
    pin:true
  }
})
.to(".n1",{opacity: 0})


gsap.timeline({
  scrollTrigger: {
    trigger:".n2", 
    start: "center center", 
    end: "bottom top",
    // markers: true,
    scrub: true,
    pin:true
  }
})
.from(".n2>.text1",{x: innerWidth, opacity: 0})
.from(".n2>.text2",{x: innerWidth, opacity: 0})
.from(".n2>.text3",{x: innerWidth, opacity: 0}) 

gsap.timeline({
  scrollTrigger: {
    trigger:".n3", 
    start: "top top", 
    end: "bottom top",
    // markers: true,
    scrub: true,
    pin:true
  }
})
.from(".n3>h2",{y: innerHeight, opacity: 0})

gsap.timeline({
  scrollTrigger: {
    trigger:".n4", 
    start: "center center", 
    end: "bottom top",
    // markers: true,
    scrub: true,
    pin:true
  }
})
.from(".n4",{opacity: 0})
.from(".n4>.text1",{y: innerHeight, opacity: 0})
.from(".n4>.text2",{y: innerHeight, opacity: 0})
.from(".n4>.text3",{y: innerHeight, opacity: 0}) 