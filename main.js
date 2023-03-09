/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */

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

// data of projects
const projectDetailList = [
  {
    id: 0,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/Portfolio.png',
    imageLink2: './assets/SnapshootPortfolio1.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'canopy',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 1,
    name: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/Portfolio2.png',
    imageLink2: './assets/snapshotPortafolio2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 2,
    name: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    imageLink: './assets/Portfolio3.png',
    imageLink2: './assets/Snapshoot Portfolio3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 3,
    name: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './assets/Portfolio4.png',
    imageLink2: './assets/Snapshoot Portfolio4.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: '#',
    demoLink: '#',
  },
];

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

// function to display Modal depending on media query size
const onMediaQueryModal = () => {
  const modalTemplateMobile = document.getElementById('modal-template-mobile');
  const modalTemplateWeb = document.getElementById('modal-template-web');

  if (window.matchMedia('(min-width: 767px)').matches) {
    console.log('matches');
    modalTemplateWeb.style.visibility = ('visible');
  } else {
    console.log('no matches');
    modalTemplateMobile.style.visibility = ('visible');
  }
};

// function to pop up modal web

const effectsOnModalWeb = () => {
  const modalTemplateWeb = document.getElementById('modal-template-web');

  const arBtns = document.getElementsByClassName('btn-card');

  Array.from(arBtns).forEach((el) => {
    el.addEventListener('click', () => {
      modalTemplateWeb.style.display = 'block';

      document.getElementById('main-page-text').style.filter = 'blur(5px)';
      const toolbar = document.getElementById('toolbar');
      toolbar.style.backgroundColor = '#C1C7D0';
      toolbar.style.opacity = '0.7';

      const navbar = document.getElementById('navbar');
      navbar.style.backgroundColor = '#C1C7D0';
      navbar.style.opacity = '0.7';

      const mainPage = document.getElementById('main-page');
      mainPage.style.backgroundColor = '#C1C7D0';
      mainPage.style.opacity = '0.7';
      console.log('click');

      modalTemplateWeb.style.left = ('-27%');
      modalTemplateWeb.style.top = ('-86px');
      modalTemplateWeb.style.opacity = ('2');
    });
  });
};

const closeModalWeb = () => {
  const modalTemplateWeb = document.getElementById('modal-template-web');
  modalTemplateWeb.style.display = 'none';

  document.getElementById('main-page-text').style.filter = 'blur(5px)';
  const toolbar = document.getElementById('toolbar');
  toolbar.style.backgroundColor = 'white';
  toolbar.style.opacity = '1';

  const navbar = document.getElementById('navbar');
  navbar.style.backgroundColor = 'white';
  navbar.style.opacity = '1';

  const mainPage = document.getElementById('main-page');
  mainPage.style.backgroundColor = 'white';
  mainPage.style.opacity = '1';
  mainPage.style.height = '26%';
  document.getElementById('main-page-text').style.filter = 'blur(0px)';
  console.log('click close');
};

// function of modla pop up window
const onProjectButtonClick = (idProject) => {
  onMediaQueryModal();
  effectsOnModalWeb();

  const detail = projectDetailList.find((detail) => detail.id === idProject);

  const modalTemplateMobile = document.getElementById('modal-template-mobile');
  const modalTemplateWeb = document.getElementById('modal-template-web');

  const arrayString = [];
  for (let el = 0; el < detail.technologies.length; el++) {
    const ListTech = `<li class="modal-btn-li">${detail.technologies[el]}</li>`;
    arrayString.push(ListTech);
  }
  const projectString = arrayString.join('');

  // dynamic template for mobile
  const detailHtmlMobile = `
  
   `;

  modalTemplateMobile.innerHTML = detailHtmlMobile;

  // dynamic template for web
  const detailHtmlWebModal = `
  <div class="modal-header-web " id="modal-heading-${detail.id}">
  <div class="modal-text-content-web">
      <h2 class="modal-title-web" > ${detail.name}</h2>
      <span onclick="closeModalWeb()" >&times;</span>
  </div>

      <div class="modal-text-web">    
          <p class="modal-text-element-web one"> ${detail.company} </p>
           
          <p class="modal-text-element-web two">${detail.role}</p>
           
          <p class="modal-text-element-web">${detail.year}</p>
      </div>
  <img class="modal-img"src=${detail.imageLink2} alt="" style="height: 586px; width: 1108px">
  </div>
  <div class="modal-body-web"> 
      <p class="modal-description-web">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
      </p>          
      <!--Here starts labels and button-->
      <div class="modal-container-btns-web">
              
              <ul class="modal-button-group-web">
                  ${projectString}
              </ul> 
      
          <div class="modal-box-buttons-group-web">
             <div class="modal-box-button-web">
                  <button class="btn-modal-web">
                    See live
                    <img class="img-btn live"src="./assets/githubblue.png" alt="">
                  </button>
              </div>
              
              <div class="modal-box-button-web">
                  <button class="btn-modal-web">
                    See Source
                    <img class="img-btn src"src="./assets/githubblue.png" alt="">
                  </button>
              </div>
          </div>
          
      </div>
  
  </div>
  `;
  modalTemplateWeb.innerHTML = detailHtmlWebModal;
};
