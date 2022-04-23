const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
const li = event.target.parentElement;
console.log(typeof(li.id));
li.remove();
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
const span = document.createElement("span");
span.innerText = newTodoObj.text;
const button = document.createElement("button");
button.innerText = "❌";
button.addEventListener("click", deleteToDo);
li.appendChild(span);
li.appendChild(button);
toDoList.appendChild(li);
}

function handleToDoSubmit(event){
event.preventDefault();
const newtodo = toDoInput.value;
toDoInput.value = "";
const newTodoObj = {
    text: newtodo,
    id: Date.now(),
};
toDos.push(newTodoObj);
paintToDo(newTodoObj);
saveToDos();
}

    toDoForm.addEventListener("submit", handleToDoSubmit);

    const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
    if(savedToDos){
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
       /* parsedToDos.forEach(item => console.log("this is turn of", item));*/
       parsedToDos.forEach(paintToDo);
    }

