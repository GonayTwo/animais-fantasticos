import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais(){
    async function fetchAnimais(url){
        try{
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();
            const numerosGrid = document.querySelector('.numeros-grid');
        
            animaisJSON.forEach(element => {
                const divAnimal = createAnimal(element);
                numerosGrid.appendChild(divAnimal);
            });
            const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
            animaNumeros.init();
        }catch(erro){
            console.log(erro);
        }

    }
    
    function createAnimal(element){
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${element.especie}</h3><span data-numero>${element.total}</span>`;
        return div;
    }
    fetchAnimais('../animaisapi.json');
}

