const menuLinks = document.querySelectorAll(".mobile-navigation-link");
const menu = document.querySelector(".mobile-navigation-menu");

menuLinks.forEach(link => {
   link.addEventListener('click', function (e) {
      menu.style.display = 'none';
   });
});