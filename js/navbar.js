navbarToggle = () => {
  const menuBtn = document.querySelector('#menu');
  const menu = document.querySelector('#nav-ul-right ul');
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('nav-active');
  });
};

onSubmit = (e) => {
  document.querySelector('form button').addEventListener('click', () => {
    e.preventDefault();
  });
};

navbarToggle();
