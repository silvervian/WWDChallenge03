import AOS from 'aos';
import goToTop from './goToTop';

const hiddenMenu = document.querySelector('.menu-mobile');
const checkBox = document.querySelector('.hamburger__checkbox');
const menuMobileList = document.querySelectorAll('.menu-mobile li');

goToTop();
AOS.init({
  once: true
});

checkBox.addEventListener('change', () => {
  if (checkBox.checked === true) {
    hiddenMenu.classList.add('menu-mobile--visible');
  } else {
    hiddenMenu.classList.remove('menu-mobile--visible');
  }
});

menuMobileList.forEach(item => item.addEventListener('click', () => {
  hiddenMenu.classList.remove('menu-mobile--visible');
  checkBox.checked = false;
}));


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
