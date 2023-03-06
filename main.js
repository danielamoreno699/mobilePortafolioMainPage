

const OpenMenu =()=>{

     document.getElementById('brand').style.filter ="blur(5px)"
     document.getElementById('main-page-text').style.filter ="blur(10px)"
    
    const icon = document.getElementById("cross-icon")
    icon.style.position = "absolute";
    icon.style.top = "3%";
    icon.style.right = "8%"
    icon.style.display = "flex"
    icon.style.justifyContent = "end"
    icon.className = ("effect-icon")
   

    const overlayout = document.getElementById('OverlayoutNav')
    const union = document.getElementById("union")
    const popnav = document.getElementById("layout-content")
    const list = popnav.getElementsByClassName("pop-nav")
    //console.log(list)
    let newListArray = Array.from(list)
    //console.log('list', newListArray)

    if(union){
        //console.log('union exist')
        union.style.display = 'none';
    }

    overlayout.style.position = "absolute";
    overlayout.style.top = "0";
    overlayout.style.left = "0";
    overlayout.style.width = "100%";
    overlayout.style.display = 'flex';
    overlayout.className = ("backgroundNav")

    popnav.className = ("effect-ul")

   newListArray.forEach(el => { 
    el.className = ("effect-li")
    //console.log('el',el)
        
});
    
}

const CloseMenu=()=>{
    const union = document.getElementById("union")
    document.getElementById('brand').style.filter ="blur(0px)"
     document.getElementById('main-page-text').style.filter ="blur(0px)"
    const overlayout = document.getElementById('OverlayoutNav')
    overlayout.style.display = "none"
    if(union){
        //console.log('union exist')
        if(union.style.display = 'none'){
            union.style.display = 'block'
        };
    }


}



const onToggleMenu=()=>{
    let array = []
    const ul = document.getElementById("ul-demo")
    
    if(ul){
        for (const child of ul.children){
            //document.body.appendChild(child)
           child.className=("effect-li");
            array.push( child)
            console.log(ul)
        }
    }
    const union = document.getElementById("union")

    if(union){
        //console.log('union exist')
        union.classList.add("noDisplay")
    }

    //document.body.className = ("blurryEffect")

    const newDiv = document.createElement('div')
    newDiv.style.position = "absolute";
    newDiv.style.top = "0";
    newDiv.style.left = "0";
    newDiv.style.width = "100%";
    //newDiv.style.opacity = "0.8";
    newDiv.className = ("backgroundNav")

    for (let i = 0; i < array.length; i++){
        console.log('ss', array[i])
        //array.forEach(list => newDiv.appendChild(array[list]))
        newDiv.appendChild(array[0])
        //newDiv.appendChild(array[1])
        
    }

    //newDiv.appendChild(ul)
    //newDiv.appendChild(array)
    document.body.appendChild(newDiv)
    //console.log(typeof array)
    console.log(array)



}


//const button = document.querySelector



const projectDetailList = [

    {
        id: 0,
        name: 'Tonic',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        imageLink: './assets/Portfolio.png.png',
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
]

 const onProjectButtonClick =(idProject) =>{

    let detail = projectDetailList.find((detail) => detail.id === idProject )
    console.log('funciona el boton de card')
    const modal_template_mobile = document.getElementById("modal-template-mobile")


    let arrayString = []
    console.log('detail', detail)

    for(let el = 0; el < detail.technologies.length; el++ ){

        
      let y =  `<li class="modal-btn-li">${detail.technologies[el]}</li>`
        arrayString.push(y)
      
    }

    let projectString = arrayString.join()
    
    const detail_html = `
    <div class="modal">

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

modal_template_mobile.innerHTML = detail_html
 modal_template_mobile.style.display = "block"    
 console.log(idProject)
   

}


   






    
    

    
  

    //const DisplayToggleNav = document.getElementById("navbar")


