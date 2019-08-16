
var navMain = document.querySelector('.page-navigation');
var navToggle = document.querySelector('.page-navigation__toggle');
var openModal = document.querySelectorAll('.catalog__cart');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');


navMain.classList.remove('page-navigation--nojs');

navToggle.addEventListener('click', function() {
if (navMain.classList.contains('page-navigation--closed')) {
  navMain.classList.remove('page-navigation--closed');
  navMain.classList.add('page-navigation--opened');
} else {
  navMain.classList.add('page-navigation--closed');
  navMain.classList.remove('page-navigation--opened');
}
});

for(var i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.classList.add('overlay--show');
  modal.classList.add('modal--opened');
  });
}

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--opened');
  overlay.classList.remove('overlay--show');
});

window. addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal--opened')) {
      modal.classList.remove('modal--opened');
      overlay.classList.remove('overlay--show');
    }
  }
});
