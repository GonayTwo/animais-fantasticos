export default function initAccordion(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';
    
    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
    
        function activeAccordion(event){
            this.classList.toggle(activeClass); //Adiciona a classe ativo ao elemento clicado.
            this.nextElementSibling.classList.toggle(activeClass); //Adiciona a classe ativo ao elemento seguinte ao clicado.
        }
    
        accordionList.forEach((item) =>{
            item.addEventListener('click', activeAccordion);
        })
    }
}