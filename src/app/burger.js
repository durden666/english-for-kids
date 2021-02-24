const toggleBtn = document.getElementById('mobile-toggle-btn');
const menu = document.querySelector('.menu');
const blackout = document.querySelector('.header__blackout');
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-ul');

toggleBtn.addEventListener('click', () => {
  if ([...menu.classList].includes('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
});

toggleBtn.addEventListener('click', () => {
  if ([...hamburger.classList].includes('active')) {
    hamburger.classList.remove('active');
  } else {
    hamburger.classList.add('active');
  }
});

toggleBtn.addEventListener('click', () => {
  if ([...blackout.classList].includes('active')) {
    blackout.classList.remove('active');
  } else {
    blackout.classList.add('active');
  }
});

blackout.addEventListener('click', () => {
  menu.classList.remove('active');
  blackout.classList.remove('active');
  hamburger.classList.remove('active');
});

menuList.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active');
  blackout.classList.remove('active');
});

function activeBurgerMenu (order) {
  menuList.querySelectorAll('li > a').forEach((item) => {
    item.classList.remove('active-menu');
  });
  menuList.querySelector(`li > a[data-order='${order}']`).classList.add('active-menu');
}

export default activeBurgerMenu