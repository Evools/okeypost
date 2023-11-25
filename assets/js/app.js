let wrapperMenu = document.querySelector('.wrapper-menu');
let navCollapse = document.querySelector('.nav-collapse');
wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('open');
  navCollapse.classList.toggle('is-active');
})