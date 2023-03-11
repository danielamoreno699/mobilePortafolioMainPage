/* eslint-disable no-unused-vars */
const openMenu = () => {
  document.getElementById('brand').style.filter = 'blur(5px)';
  document.getElementById('main-page-text').style.filter = 'blur(7px)';
  document.getElementById('main-page').style.opacity = '0.7';
  document.getElementById('union').style.display = 'none';

  const overlayout = document.getElementById('OverlayoutNav');
  overlayout.style.zIndex = '1';
  overlayout.style.position = 'absolute';
  overlayout.style.top = '0';
  overlayout.style.left = '0';
  overlayout.style.width = '100%';
  overlayout.style.height = '84%';
  overlayout.style.display = 'flex';
  overlayout.className = ('backgroundNav');

  const layoutHtml = `

    <a class="close-btn" id="cross-icon" onclick="closeMenu()" >
    <span class="effect-icon" style="font-size: 28px; color: #ffffff;">&times;</span>

    <div class="effect-ul" id="layout-content">

        <li class="pop-nav"> <a href="#portafolio" class="effect-li" onclick="closeMenu()">Portafolio</a></li>
        <li class="pop-nav"> <a href="#about" class="effect-li" onclick="closeMenu()">About</a></li>
        <li class="pop-nav"> <a href="#contact" class="effect-li" onclick="closeMenu()">Contact</a></li>
    </div>
    </a>
    `;
  overlayout.innerHTML = layoutHtml;
};
// function to close menu
const closeMenu = () => {
  const union = document.getElementById('union');
  document.getElementById('brand').style.filter = 'blur(0px)';
  document.getElementById('main-page-text').style.filter = 'blur(0px)';
  document.getElementById('main-page').style.opacity = '1';
  const overlayout = document.getElementById('OverlayoutNav');
  overlayout.style.display = 'none';
  if (union) {
    union.style.display = 'block';
  }
};
// stric check of str
const checkLowerCase = (str) => {
  const check = str.toString().toLowerCase();
  if (str === check) {
    return true;
  }
  return false;
};

// validation form - email must be in lowercase

const validateInputEmail = (e) => {
  e.preventDefault();
  const error = document.getElementById('error');
  const form = document.getElementById('form');
  const email = document.getElementById('email').value;
  const emailChecker = checkLowerCase(email);
  if (emailChecker) {
    form.action = 'https://formspree.io/f/mvonawkj';
    form.submit();
  } else {
    error.classList.add('visible');
  }
};

const form = document.getElementById('form');
form.addEventListener('submit', validateInputEmail);

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', validateInputEmail);

  const formInput = JSON.parse(localStorage.getItem('formInput'));
  const formStorage = {
    name: '',
    mail: '',
    text: '',
  };
  const name = document.getElementById('username');
  const mail = document.getElementById('email');
  const text = document.getElementById('msg');

  name.addEventListener('input', () => {
    if (formInput) {
      formInput.name = name.value;
      localStorage.setItem('formInput', JSON.stringify(formInput));
    } else {
      formStorage.name = name.value;
      localStorage.setItem('formInput', JSON.stringify(formStorage));
    }
  });

  mail.addEventListener('input', () => {
    if (formInput) {
      formInput.mail = mail.value;
      localStorage.setItem('formInput', JSON.stringify(formInput));
    } else {
      formStorage.mail = mail.value;
      localStorage.setItem('formInput', JSON.stringify(formStorage));
    }
  });

  text.addEventListener('input', () => {
    if (formInput) {
      formInput.text = text.value;
      localStorage.setItem('formInput', JSON.stringify(formInput));
    } else {
      formStorage.text = text.value;
      localStorage.setItem('formInput', JSON.stringify(formStorage));
    }
  });

  if (formInput) {
    document.getElementById('username').value = formInput.name;
    document.getElementById('email').value = formInput.mail;
    document.getElementById('msg').value = formInput.text;
  }

  if (localStorage.getItem(formInput)) {
    document.getElementById('username').value = formInput.name;
    document.getElementById('email').value = formInput.mail;
    document.getElementById('msg').value = formInput.text;
  }
});
