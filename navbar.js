window.onload = function(){
let navbar = document.getElementById("fixedNav");
let bottom = document.getElementById("navparent");
let whatsapp = document.querySelector("#whatsapp");
let scrolltop = document.querySelector("#scrolltop");
let sticky = navbar.offsetTop;

window.onscroll = function(){
    if(window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        whatsapp.style.display = 'block';
        scrolltop.style.display = 'block';
    }else{
        navbar.classList.remove("sticky");
        whatsapp.style.display = 'none';
        scrolltop.style.display = 'none';
    }
}
}