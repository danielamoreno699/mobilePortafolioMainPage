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
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: '#',
    demoLink: '#',
  },
];

// function of modla pop up window
const onProjectButtonClick = (idProject) => {

    let detail = projectDetailList.find((detail) => detail.id === idProject )
    const modal_template_mobile = document.getElementById('modal-template-mobile')
  
    let arrayString = []
      
    for(let el = 0; el < detail.technologies.length; el++ ){
      let y =  `<li class="modal-btn-li">${detail.technologies[el]}</li>`
      arrayString.push(y)
    }
  
    let projectString = arrayString.join('');
      
    const detail_html = `
      <div class="modal">
      <span>&times;</span>
      <div class="modal-header"  id="modal-heading-${detail.id}" >
          <img "src="${detail.imageLink}" alt="">
      </div>
  
      <div class="modal-body">
          <h3 class="modal-title"> ${detail.name} </h3>
              <div class="modal-text">    
                  <p class="modal-text-element one"> ${detail.company}  </p>
                   <!--- <img class="counter-png" src="./assets/Counter.png" alt=""> -->
                  <p class="modal-text-element two"> ${detail.role}</p>
                   <!--- <img class="counter-png" src="./assets/Counter.png" alt=""> -->
                  <p class="modal-text-element"> ${detail.year}</p>
              </div>
          <p class="modal-description"> ${detail.description}  </p>          
          
              <div class="modal-container-btns">
                  <div class="modal-buttons-are">
                  <ul class="modal-button-group">
                      ${projectString}
                               
                  </ul> 
              </div>
              <div class="modal-box-buttons-group">
                  <div class="modal-box-button">
                      <button class="btn-modal">
                        See live
                      </button>
                  </div>
                  <div class="modal-box-button">
                      <button class="btn-modal">
                        See Source
                      </button>
                  </div>
              </div>
             
               </div>
          </div>
      </div>
  </div>`;
  
    // eslint-disable-next-line camelcase
    modal_template_mobile.innerHTML = detail_html;
    modal_template_mobile.style.display = 'block';   
   
  };