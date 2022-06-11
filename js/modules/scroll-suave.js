export default function initScrollSuave(){
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        console.log(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        /*
        const topo = section.offsetTop;
        window.scrollTo({
            behavior:'smooth'
        });
        */
    }
    linksInternos.forEach((link)=>{
        link.addEventListener('click', scrollToSection)
    })
}