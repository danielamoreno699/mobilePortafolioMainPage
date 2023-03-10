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

// save in localStorage

  const inputElements = document.querySelectorAll('input');
  const inputData = {};

inputElements.forEach((inputElement) => {
  inputElement.addEventListener('change', () => {
    const inputValue = inputElement.value;
    const inputName = inputElement.name;
    inputData[inputName] = inputValue;
    localStorage.setItem('formData', JSON.stringify(inputData));
  });
});


// Iterate through the form elements and set their values

window.addEventListener('load', () => {
  const dataString = localStorage.getItem('InputData');

  const formData = JSON.parse(dataString);
  const formControl = document.getElementById('form');

  for (let i = 0; i < formControl.elements.length; i + 1) {
    const element = formControl.elements[i];
    const value = formData[element.name];
    if (value !== undefined) {
      element.value = value;
    }
  }
});

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
  SavinLocalStorage();
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
