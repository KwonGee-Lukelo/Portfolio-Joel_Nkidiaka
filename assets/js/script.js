
const backgroundHeader = () => {
  const header = document.getElementById("navBar");

  /*Ajout d'une class scroll__style dans la header si on scroll 
  sur la barre et que l'axe des abscisses devient superieur ou égal à 250px*/
  this.scrollY >= 150
    ? header.classList.add("scroll__style")
    : header.classList.remove("scroll__style");
};
window.addEventListener("scroll", backgroundHeader);

let date = document.querySelector('#year');
let an = new Date().getFullYear();
console.log(an);
date.textContent = an;
console.log(date)

/*SWIPER**********
 *************************/
var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



