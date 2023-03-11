/* eslint-disable no-plusplus */


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

// // data of projects
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
    imageLink2: './assets/SnapshootPortfolio3.png',
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
    imageLink2: './assets/SnapshootPortfolio4.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: '#',
    demoLink: '#',
  },
];

// // stric check of str

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
// eslint-disable-next-line no-unused-vars
projectDetailList.forEach((card, index) =>{ 
const gridBox = document.getElementById('portfolio');
const projectBox = document.createElement('div');
projectBox.classList.add('.card-container');
projectBox.innerHTML = `

  <div class="card card1">
  <div class="card-header header-1">
      <img class="card-img img-portafolio-1"src=${card.imageLink2} alt="">
  </div>

  <div class="card-body">
      <h3 class="card-title">${card.name}</h3>
          <div class="text">    
              <p class="text-element one"> ${card.company} </p>
               
              <p class="text-element">${card.role}</p>
              
              <p class="text-element">${card.year}</p>
          </div>
      <p class="card-description">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>          
      <!--Here starts labels and button-->
          <div class="container-btns">
              <div class="buttons-are">
              <ul class="button-group">
                  
              </ul> 
          </div>
          <div class="box-button">
              <button id="myBtnModal" class="btn-card" onclick="onProjectButtonClick(1, event)">
                         See project 
              </button>
           </div>
      </div>
  </div>
  </div>
  `;

  console.log(gridBox)
  gridBox.append(projectBox);
})

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

  const arBtns = document.getElementsByClassName('btn-card');

  Array.from(arBtns).forEach((el) => {
    el.addEventListener('click', () => {
      modalTemplateMobile.style.display = 'block';
      backgroundModalmobile.style.display = 'block';
      backgroundModalmobile.style.backdropFilter = 'blur(5px)';
      backgroundModalmobile.style.position = ('fixed');
      backgroundModalmobile.style.zIndex = ('1');
      backgroundModalmobile.style.top = ('0');
      backgroundModalmobile.style.width = ('100%');
      /*backgroundModalmobile.style.height = ('100%');*/
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
  backgroundModalmobile.style.backdropFilter = '';
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
  const arBtns = document.getElementsByClassName('btn-card');

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
      <img class="img-modal" src=${detail.imageLink2} alt="">
  </div>

<div class="modal-content-mobile">
  <h3 class="modal-title"> ${detail.name} </h3>
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
        <img class="img-btn src"src="./assets/githubblue.png" alt="">
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
  <img class="modal-img"src= ${detail.imageLink2} alt="" style="height: 586px; width: 1108px">
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