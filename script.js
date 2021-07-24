$(function() {
    $("#item").click(()=>{
    $("#submenu").slideToggle(500);
    });
});

var scrollAnterior;
window.onscroll = function() {
  var scrollActual = window.scrollY;
  if (scrollAnterior > scrollActual){
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-60px";
  }
  scrollAnterior = scrollActual;
}
