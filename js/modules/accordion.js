export default class Accordion{

    constructor(list){
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = 'ativo';
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeClass); //Adiciona a classe ativo ao elemento clicado.
        item.nextElementSibling.classList.toggle(this.activeClass); //Adiciona a classe ativo ao elemento seguinte ao clicado.
    }

    //Adiciona os eventos ao accordion
    addAccordionEvent(){
        this.accordionList.forEach((item) =>{
            item.addEventListener('click',() => this.toggleAccordion(item));
        })
    }

    //Inicia a função
    init(){
        if (this.accordionList.length){
            this.toggleAccordion(this.accordionList[0]);
            this.addAccordionEvent();
        }
    }
}
