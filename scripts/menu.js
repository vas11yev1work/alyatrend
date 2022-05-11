window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-button');
  const menu = document.querySelector('.header-mobile');
  button.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  document.addEventListener('mouseup', e => {
    if (!e.target.closest('header')) {
      menu.classList.remove('show');
    }
  })
});