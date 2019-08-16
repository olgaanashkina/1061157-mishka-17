
var navMain = document.querySelector('.page-navigation');
var navToggle = document.querySelector('.page-navigation__toggle');
var openModal = document.querySelector('.catalog__cart');
var modal = document.querySelector('.modal');
var closeModal = document.querySelector('.modal__button');


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

openModal.addEventListener('click', function() {
if (modal.classList.contains('modal--closed')) {
  modal.classList.remove('modal--closed');
  modal.classList.add('modal--opened');
} else {
  modal.classList.add('modal--closed');
  modal.classList.remove('modal--opened');
}
});

closeModal.addEventListener('click', function () {
if (modal.classList.contains('modal--opened')) {
  modal.classList.remove('modal--opened');
  modal.classList.add('modal--closed');
} else {
  modal.classList.add('modal--opened');
  modal.classList.remove('modal--closed');
}
});
