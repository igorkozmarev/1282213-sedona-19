var mainNav = document.querySelector('.main-nav');
var toggle = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--oppened');
toggle.classList.remove('main-nav__toggle--hidden')

toggle.addEventListener('click', function () {
  toggle.classList.toggle('main-nav__toggle--oppened');
  mainNav.classList.toggle('main-nav--oppened');
});
