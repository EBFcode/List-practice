const form_ToDo = document.querySelector('#add-form-to-do');
const ul_ToDo = document.querySelector('#ul-to-do')

let list_ToDo = []

form_ToDo.addEventListener('submit', function(event) {
    event.preventDefault();

    const ToDo = document.querySelector("#ToDo").value;
    
    `<li class="card-to-do"><span>${ToDo}</span> <span>300 Coins</span></li>`

    
    document.querySelector("#ToDo").value = ''

    list_ToDo.push(ToDo);

    let newToDo = document.createElement('li');
    newToDo.textContent = ToDo
    newToDo.className = 'card-to-do';

    // Me quede en agregar el Span a los elementos sobre la cantidad a ganar


    ul_ToDo.appendChild(newToDo);
})