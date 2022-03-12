let navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const Toggle = document.getElementById('toggle');
const tranbar= document.querySelector(".page__header");
const maim = document.querySelector("main");



sections.forEach((section ) =>{


    const li = document.createElement("li");
    const a = document.createElement("a");
    const id = section.getAttribute("id");
    const forColor = document.getElementById(id);
    const aText = section.getAttribute("data-nav");
    

    a.setAttribute('class' , 'menu__link');
    a.setAttribute('href' , `#${id}`);
    a.innerText = aText;
    navBar.appendChild(li);
    li.appendChild(a);
    

    a.addEventListener('click' , e=>{
        //that perventDefult for follow link 
        e.preventDefault();
        section.scrollIntoView({behavior : "smooth"});
        tranbar.classList.remove("activee");
        tranbar.classList.remove("activeee");
    });


    forColor.style.background = `linear-gradient(0deg , ${randomColor()} 0%,rgba(0,13,60,1) 100%)`;
    
});
function randomColor(){
    let a = Math.floor(Math.random() *256);
    let b = Math.floor(Math.random() *256);
    let c = Math.floor(Math.random() *256);
    return `rgba(${a} ,${b} , ${c} ,1) `;
}

Toggle.addEventListener('click' ,function(){
    tranbar.classList.toggle('activee')
    tranbar.classList.toggle("activeee")
})






const link = document.querySelectorAll(".menu__link");


let scroll = window.addEventListener("scroll" , any);
function any(){
   
        sections.forEach(section =>{
            
            const clientRect = section.getBoundingClientRect();
            const obj = {
                hasClass : section.hasAttribute('class' , 'active'),
                eText : section.getAttribute("data-nav")
            }

            

            if(clientRect.top > -400 && clientRect.top<250){
             
                // an that's when scroll to section navbar's link to be active
                

                link.forEach(e => {

                 e.innerText === obj.eText && obj.hasClass ? e.classList.add('hey') : e.classList.remove('hey');

                })
                
                section.classList.add('active');
    
            }else{
                section.classList.remove('active');
                
            }



        })
          
}




  


