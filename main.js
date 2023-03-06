

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
    console.log(list)
    let newListArray = Array.from(list)
    console.log('list', newListArray)

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
    document.getElementById('brand').style.filter ="blur(0px)"
     document.getElementById('main-page-text').style.filter ="blur(0px)"
    const overlayout = document.getElementById('OverlayoutNav')
    overlayout.style.display = "none"


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
        id: '0',
        name: 'Tonic',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        imageLink: './assets/project1.png',
        technologies: ['html', 'css', 'javascript'],
        role: 'Back end dev',
        company: 'canopy',
        year: '2015',
        sourceLink: '#',
        demoLink: '#',
      },
      {
        id: '1',
        name: 'Multi-post stories',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        imageLink: './assets/project2.png',
        technologies: ['html', 'css', 'javascript'],
        role: 'Full Stack Dev',
        company: 'Facebook',
        year: '2015',
        sourceLink: '#',
        demoLink: '#',
      },
      {
        id: '2',
        name: 'Facebook 360',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
        imageLink: './assets/project3.png',
        technologies: ['html', 'css', 'javascript'],
        role: 'Back end Dev',
        company: 'Facebook',
        year: '2015',
        sourceLink: '#',
        demoLink: '#',
      },
      {
        id: '3',
        name: 'Uber Navigation',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        imageLink: './assets/project4.png',
        technologies: ['html', 'css', 'javascript'],
        role: 'Lead developer',
        company: 'Uber',
        year: '2018',
        sourceLink: '#',
        demoLink: '#',
      },
]

//languages=[]

    projectDetailList.forEach((project,idx)=>{
        console.log('idx', idx)
        console.log('result', project)


        let listTech = document.createElement('li') 
        for(let el = 0; el < project.technologies.length; el++ ){
            let techlistModal
            console.log('tec', project.technologies[el])
            
            listTech.innerHTML += project.technologies[el]
        }
        
        //ul.appendChild(listTech)
        
        
    if (typeof window !== 'undefined') {
    const modal = document.createElement('div');
    modal.hidden = true;

    modal.innerHTML = `
    <div class="card">

    <div class="card-header"  id="modal-heading-${idx}" >
        <img "src="${project.imageLink}" alt="">
    </div>

    <div class="card-body">
        <h3 class="card-title"> ${project.name} </h3>
            <div class="card-text">    
                <p class="text-element one"> ${project.company}  </p>
                 <!--- <img class="counter-png" src="./assets/Counter.png" alt=""> -->
                <p class="text-element"> ${project.role}</p>
                 <!--- <img class="counter-png" src="./assets/Counter.png" alt=""> -->
                <p class="text-element"> ${project.year}</p>
            </div>
        <p class="description"> ${project.description}  </p>          
        
            <div class="container-btns">
                <div class="buttons-are">
                <ul class="button-group">

                    <li class="btn-li">${project.technologies}</li>
                   
                </ul> 
            </div>
           
             </div>
        </div>
    </div>
</div>`;

    }
})







    
    

    
  

    //const DisplayToggleNav = document.getElementById("navbar")


