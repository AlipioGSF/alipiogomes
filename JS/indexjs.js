const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const horario = new Date();
let paginaAtual;
let dark;

function controlpage(page){
    pages = ['inicio','sobremim', 'projetos', 'habilidades'];
    pages.forEach(e => {
        if(page === e) paginaAtual = page; 
    });
}

document.addEventListener('click', e => {
    const elemento = e.target;
    if(elemento.tagName.toLowerCase() !== 'a' && elemento.tagName.toLowerCase() !== 'button') return;
    page = elemento.innerText.toLowerCase();
    if(page === 'início'){
        page = 'inicio';
        require('../HTML/inicio.html');
    } 
    if(page === 'sobre mim'){
        page = 'sobremim';
        require('../HTML/sobremim.html');
    } 
    if(page === 'projetos') require('../HTML/projetos.html');
    if(page === 'habilidades') require('../HTML/habilidades.html');
    if(page !== 'inicio' && page !== 'sobre mim') {
        footer.style.display = 'none';
    }else{
        footer.style.display = 'fixed';
    }
    
    controlpage(page);
    
    if(elemento.getAttribute('id') === 'light'){
        if(!elemento.classList.contains('light')){
            elemento.classList.toggle('light');
           dark = '';
           main.style.color = 'black';
        }else{
            elemento.classList.toggle('light');
            dark = 'dark';
            main.style.color = 'white';
        }
    }
    body.style.backgroundImage = `url(../imagens/fundo${paginaAtual}${dark}.png)`
    
    if(elemento.classList.contains('mostrarProjs')){
        const maisProjetos = document.querySelector('.maisProjetos');
        if(elemento.innerText === 'ver mais'){
            maisProjetos.style.display = 'flex'
            elemento.innerText = 'ver menos'
        }else{
            elemento.innerText = 'ver mais'
            maisProjetos.style.display = 'none'
        }
    }
});

document.addEventListener('mouseover', e => {
    const elemento = e.target;
    const descricao = document.querySelector('#descricaoSkill')
    if(elemento.tagName.toLowerCase() === 'li'){
        if(elemento.getAttribute('id').toLowerCase() === 'html'){
            descricao.innerHTML = 'O HTML é uma linguagem de marcação. Estas linguagens são constituídas de códigos que delimitam conteúdos específicos, segundo uma sintaxe própria. O HTML tem códigos para criar paginas na web. Estes códigos que definem o tipo de letra, qual o tamanho, cor, espaçamento, e vários outros aspectos do site.';
        } 
    }else{
        descricao.innerHTML = 'Passe o mouse';
    }
});


function require(link){
    fetch(link)
    .then(response => response.text())
    .then(response => index.innerHTML = response)
    .catch(e => console.log(e))
}

function start(){
    const hora = horario.getHours();
    paginaAtual = 'inicio'
    controlpage();
    main.innerHTML = require('../HTML/inicio.html');

    if(hora >= 5 && hora <= 17){
        dark = ''
        body.style.backgroundImage = 'url(../imagens/fundoinicio.png)'
        main.style.color = "black";
    }else{
        dark = 'dark'
        body.style.backgroundImage = 'url(../imagens/fundoiniciodark.png)'
        main.style.color = "white";
    }
    

}


start();