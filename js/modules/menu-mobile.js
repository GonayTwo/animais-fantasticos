import outsideClick from "./outsideclick.js";

export default class initMenuMobile {
    constructor(menuButton, menuList, eventos){
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);

        this.classList = 'active';
        if (eventos === undefined) this.eventos = ['click','touchstart'];
        else this.eventos = eventos;

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu(){
        this.menuList.classList.add(this.classList);
        this.menuButton.classList.add(this.classList);

        outsideClick(this.menuList, this.eventos,() =>{
            this.menuButton.classList.remove(this.classList);
            this.menuList.classList.remove(this.classList);
        })
    }

    addMenuMobileEvents(){
        this.eventos.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
    }

    init(){
        if (this.menuButton && this.menuList)
            this.addMenuMobileEvents();
        return this;

    }
}   

