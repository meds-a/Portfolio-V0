// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TYPED
var typed = new Typed('.typed', {
  strings: ["Bonjour à tous et à toutes, je me présente je m'appelle Mohamed , Après une carrière m'ayant fait découvrir plusieurs milieux professionnels et exercer des métiers différents. J'ai décidé de me lancer à fond dans l'apprentissage du code, depuis près de 1 ans. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder."],
  typeSpeed: 20,
});
  
//AOS
AOS.init();