/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */

const arBtns = document.getElementsByClassName('btn-card');
const overlayout = document.getElementById('OverlayoutNav');

const openMenu = () => {
  document.getElementById('brand').style.filter = 'blur(5px)';
  document.getElementById('main-page-text').style.filter = 'blur(7px)';
  document.getElementById('main-page').style.opacity = '0.7';
  document.getElementById('union').style.display = 'none';

  overlayout.style.zIndex = '1';
  overlayout.style.position = 'absolute';
  overlayout.style.top = '0';
  overlayout.style.left = '0';
  overlayout.style.width = '100%';
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
  overlayout.style.display = 'none';

  if (union) {
    union.style.display = 'block';
  }
};

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

// Displaying card dynamically
const projectDetailList = [
  {
    id: 0,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'assets/card0.png',
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
    imageLink: 'assets/card1.png',
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
    imageLink: 'assets/card2.png',
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
    imageLink: 'assets/card3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: 'assets/card3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: '#',
    demoLink: '#',
  },
];

const sectionCard = document.querySelector('.section-card');

projectDetailList.forEach((card, i) => {
  const newCard = document.createElement('div'); // We create a new element in this case; Div
  newCard.classList.add('card-container', 'justify-center'); // We add a class to the element in this case; card-container
  newCard.innerHTML = `
    <div class="card-img">
    <div class="card-img" style="background-image: url(${card.imageLink})"></div>
    </div>
    <div class="card-content">
      <h2 class="card-title poppins no-margin no-padding">${card.name}</h2>
      <div class="tags-cont">
        <p class="card-tag">${card.company}</p>
        <img src="assets/separator.png" alt="" class="tag-separator">
        <p class="card-tag">${card.role}</p>
        <img src="assets/separator.png" alt="" class="tag-separator">
        <p class="card-tag">${card.year}</p>
      </div>
      <p class="card-desc"> A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul class="technologies">
        <li class="tech">html</li>
        <li class="tech">css</li>
        <li class="tech">javascript</li>
      </ul>
      <button id="myBtnModal" class="btn-card" onclick="onProjectButtonClick(${card.id}, event)">
        See project
      </button>
    </div>

  `;
  sectionCard.appendChild(newCard);
});

// ID, NAME, DESCRIPTION, IMAGELINK
// TECHNOLOGIES, ROLE, COMPANY, YEAR
// SOURCELINK, DEMOLINK

// function to display Modal depending on media query size
const onMediaQueryModal = (width) => {
  if (window.matchMedia('(min-width: 767px)').matches) {
    return true;
  }
  return false;
};

// function to display Modal depending on media query size
const onMediaQueryModalMobile = (width) => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    return true;
  }
  return false;
};

const effectsOnMobile = () => {
  const backgroundModalmobile = document.getElementById('modal-wraper-mobile');

  const modalTemplateMobile = document.getElementById('modal-template-mobile');

  Array.from(arBtns).forEach((el) => {
    el.addEventListener('click', () => {
      modalTemplateMobile.style.display = 'block';
      backgroundModalmobile.style.display = 'block';
      backgroundModalmobile.style.backdropFilter = 'blur(5px)';
      backgroundModalmobile.style.position = ('fixed');
      backgroundModalmobile.style.zIndex = ('1');
      backgroundModalmobile.style.top = ('0');
      backgroundModalmobile.style.width = ('100%');
      backgroundModalmobile.style.overflow = ('auto');
      backgroundModalmobile.style.background = ('rgba(0,0,0,0.2)');
    });
  });
};

const MobileModalClose = () => {
  const backgroundModalmobile = document.getElementById('modal-wraper-mobile');
  const modalTemplateMobile = document.getElementById('modal-template-mobile');

  modalTemplateMobile.style.display = ('none');
  backgroundModalmobile.style.display = ('initial');
  backgroundModalmobile.style.position = '';
  backgroundModalmobile.style.zIndex = '';
  backgroundModalmobile.style.top = '';
  backgroundModalmobile.style.width = '';
  backgroundModalmobile.style.height = '';
  backgroundModalmobile.style.overflow = '';
  backgroundModalmobile.style.background = '';
};

const effectsOnModalWeb = () => {
  const backgroundModalWeb = document.getElementById('modal-wraper-web');
  backgroundModalWeb.style.display = 'block';
  backgroundModalWeb.style.position = ('fixed');
  backgroundModalWeb.style.zIndex = ('1');
  backgroundModalWeb.style.top = ('0');
  backgroundModalWeb.style.width = ('100%');
  backgroundModalWeb.style.height = ('100%');
  backgroundModalWeb.style.overflow = ('auto');
  backgroundModalWeb.style.backdropFilter = ('blur(5px)');

  const modalTemplateWeb = document.getElementById('modal-template-web');
  modalTemplateWeb.style.display = ('block');

  Array.from(arBtns).forEach((el) => {
    el.addEventListener('click', () => {
      modalTemplateWeb.style.display = 'block';
    });
  });
};

const closeModalWeb = () => {
  const backgroundModalWeb = document.getElementById('modal-wraper-web');
  backgroundModalWeb.style.display = 'none';

  const modalTemplateWeb = document.getElementById('modal-template-web');
  modalTemplateWeb.style.display = 'none';
};

// function of modal pop up window
const onProjectButtonClick = (idProject, event) => {
  const modalTemplateMobile = document.getElementById('modal-template-mobile');
  const modalTemplateWeb = document.getElementById('modal-template-web');

  if ((onMediaQueryModal(event.screenX)) === true) {
    effectsOnModalWeb();
  }
  if ((onMediaQueryModalMobile(event.screenX)) === true) {
    effectsOnMobile();
  }

  const detail = projectDetailList.find((detail) => detail.id === idProject);

  const arrayString = [];
  for (let el = 0; el < detail.technologies.length; el++) {
    const ListTech = `<li class="modal-btn-li">${detail.technologies[el]}</li>`;
    arrayString.push(ListTech);
  }
  const projectString = arrayString.join('');

  // dynamic template for mobile
  const detailHtmlMobile = `

  <button class="close-btn-mobile"  onclick="MobileModalClose()">&times;</button>
  <div class="modal-header"  id="modal-heading-${detail.id}" >
      <img class="img-modal" src=${detail.imageLink} alt="">
  </div>

  <h3 class="modal-title"> ${detail.name} </h3>
<div class="modal-content-mobile">
  <div class="modal-text">    
      <p class="modal-text-element one"> ${detail.company} </p>
      <p class="modal-text-element two"> ${detail.role}</p>
      <p class="modal-text-element"> ${detail.year}</p>
  </div>  
  <p class="modal-description">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>          
  
  <div class="modal-container-btns">
    
     <ul class="modal-button-group">
     ${projectString}  
                  
     </ul> 

 </div>
 <div class="modal-box-buttons-group" >
  <div class="modal-box-button">
      <button class="btn-modal">
        See live
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="#6070FF"/> 
      </svg>

      </button>
  </div>
  <div class="modal-box-button">
      <button class="btn-modal">
        See source
        <img class="img-btn src"src="./assets/githubblue.png" alt="">
      </button>
  </div>

</div>


  </div>
 
    `;

  modalTemplateMobile.innerHTML = detailHtmlMobile;

  // dynamic template for web
  const detailHtmlWebModal = `
  <div class="modal-header-web" id="modal-${detail.id}">
  <h2 class="modal-title-web" > ${detail.name} </h2>
  <button class="close-btn-web"  onclick="closeModalWeb()" >&times;</button>
</div>
<div class="modal-content-web">
  <div class="modal-text-web">    
      <p class="modal-text-element-web one"> ${detail.company}</p>
       
      <p class="modal-text-element-web two">${detail.role}</p>
       
      <p class="modal-text-element-web">${detail.year}</p>
  </div>
  <img class="modal-img"src= ${detail.imageLink} alt="" style="width: 90%">
</div>

<div class="modal-body-web"> 
  <p class="modal-description-web">
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
  </p>  
  <div class="modal-container-btns">
             
      <ul class="button-group-web-modal">
            ${projectString}                 
      </ul> 
      <div class="modal-box-buttons-group-web">
          <div class="modal-box-button-web">
               <button class="btn-modal-web">
                 See live
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="#6070FF"/>
              </svg>

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