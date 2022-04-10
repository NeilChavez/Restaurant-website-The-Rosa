const selectElement = (selector)=>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Algo no funciono bien, contola que ${selector} exista`);

}


const menuToggleIcon = selectElement('.menu-toggle'),
headerElement = selectElement('.header')

menuToggleIcon.addEventListener('click', () =>{

    headerElement.classList.toggle('open');
})



//scroll reveal



window.sr = ScrollReveal();


sr.reveal('.animate-left', {
    origin: 'left',
    duration: '1000',
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: '1000',
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: '1000',
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: '1000',
    distance: '25rem',
    delay: 600
});