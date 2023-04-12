const toDoForm = document.querySelector('.js-toDoForm'),
      toDoInput = toDoForm.querySelector('input'),
      toDoList = document.querySelector('.js-toDoList');
const TODOS_LS = 'toDos';
let toDos = [];

const btnShow = document.querySelector('.todo-button')
const todoContainer = document.querySelector('.todo-container_object');
      
btnShow.addEventListener('click', ()=> {
    todoContainer.classList.toggle('active');
});


function checkToDos() {
   const loaded_toDos = localStorage.getItem(TODOS_LS)
   if (loaded_toDos !== null) {
    const parsedToDos = JSON.parse(loaded_toDos);
    parsedToDos.forEach(function(toDo) {
        showToDos(toDo.name);
    });
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); 
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function showToDos(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.setAttribute('style', 'margin: 0 10px 0 5px; padding: 5px; border-radius: 12px; font-size: 10px; background: #5a5959; color: white; text-transform: uppercase; letter-spacing: 1px;');
    delBtn.addEventListener('click', deleteToDo);
    const span = document.createElement('span');
    const newId = toDos.length+1;

    delBtn.innerText = 'x'
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObject = {
        name: text,
        id: newId
    };
    toDos.push(toDoObject);
    saveToDos();
}

function sumbitHandler(event) {
    event.preventDefault();
    const currentValuse = toDoInput.value;
    showToDos(currentValuse);
    toDoInput.value = ''
}

function init () {
    checkToDos();
    toDoForm.addEventListener('submit', sumbitHandler); 
}

init()