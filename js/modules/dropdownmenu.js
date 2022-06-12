export default function initDropDownMenu(){

}

const dropdownmenuMenus = document.querySelectorAll('[data-dropdown]');

dropdownmenuMenus.forEach((menu) =>{
    ['touchstart','click'].forEach((userEvent) =>{
        menu.addEventListener(userEvent, handleClick);
    })
})

function handleClick(event){
    event.preventDefault();
    this.classList.toggle('active');
}