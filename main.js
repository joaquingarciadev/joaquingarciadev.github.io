let options = document.querySelectorAll(".option");
let slide = document.querySelector(".slide");
options.forEach((ele,index)=>{
  ele.addEventListener("mouseover",()=>{
    slide.style.left = 100/options.length*index + "%";
  });
});

gsap.from("h1", {duration: 3, x: 300, opacity: 0});