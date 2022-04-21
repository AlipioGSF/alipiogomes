const novaTarefa = document.querySelector(".novaTarefa");
const addTarefa = document.querySelector(".addTarefa");
const tarefas = document.querySelector(".tarefas");



function criaLi(){
    const li = document.createElement('li');
    return li;
}

novaTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!novaTarefa.value) return;
        criaTarefa(novaTarefa.value);
    }
});

function criaApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class','apagar');
    btnApagar.setAttribute('title','Apagar esta tarefa');
    li.appendChild(btnApagar);
}


document.addEventListener('click', function (e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvaTarefas();
    }
});

function limpaInput(){
    novaTarefa.value = '';
    novaTarefa.focus();
}

function criaTarefa(nomeDaTarefa){
    const li = criaLi();
    li.innerHTML = nomeDaTarefa;
    tarefas.appendChild(li);
    limpaInput();
    criaApagar(li);
    salvaTarefas();
}


addTarefa.addEventListener('click', function (){
    if(!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
});


function salvaTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }    

}

adicionaTarefasSalvas();