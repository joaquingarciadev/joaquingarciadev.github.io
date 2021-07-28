let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide");
options.forEach((ele,index)=>{
  ele.addEventListener("mouseover",()=>{
    slide.style.left = 100/options.length*index + "%";
  });
});

document.querySelector("section").style.height = innerHeight+"px";

gsap.timeline({
  scrollTrigger: {
    trigger:"section",  
    start: "center center", 
    end: "bottom center",
    // markers: true,
    scrub: true,
    pin:true
  }
})
.to("section",{opacity: 0})

gsap.timeline({
  scrollTrigger: {
    trigger:".box1", 
    start: "center center", 
    end: "bottom top",
    // markers: true,
    scrub: true,
    pin:true
  }
})
.from(".text1",{x: innerWidth, opacity: 0})
.from(".text2",{x: -innerWidth, opacity: 0})
.from(".text3",{x: innerWidth, opacity: 0}) 

gsap.timeline({
  scrollTrigger: {
    trigger:".box2", 
    start: "center center", 
    end: "bottom top",
    // markers: true,
    scrub: true,
    pin:true
  }
})
.from(".box2",{opacity: 0})
.from(".text4",{y: innerHeight, opacity: 0})
.from(".text5",{y: innerHeight, opacity: 0})
.from(".text6",{y: innerHeight, opacity: 0}) 