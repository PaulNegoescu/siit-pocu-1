/**
 * Ascynchronous Javascript
 */
// console.log(1);
// setTimeout(() => console.log(2), 2000);
// setTimeout(() => console.log(3), 0);
// new Promise((resolve, reject) => {
//     resolve();
// }).then(() => console.log(5));
// console.log(4);

/**
 * AJAX
 */
const myFetch = fetch('http://jsonplaceholder.typicode.com/todos');

function treatResponse(res) {
    if(res.ok) {
        return res.json(); 
    } else {
        throw new Error('An error ocurred when fetching: ' + res.status);
    }
}
myFetch
    .then(treatResponse, (err) => console.warn('Error', err))
    .then(handleDataFromServer)
    .catch((err) => console.info(err));

/**
 * REST - REpresentational State Transfer
 * 
 * URL: https://example.com/api/v1/
 * Entity(Endpoint): /todos
 *         /users
 *         /posts
 *         /products
 * 
 * https://example.com/api/v1/todos
 * GET           Read/Retrieve
 * POST          Create
 * PUT / PATCH   Update
 * DELETE        Delete
 * 
 * CRUD
 * GET /todos -> Lista de todos
 * POST /todos -> Crea un todo nou (trebuie transmis un body care sa contina todo-ul nou)
 * GET /todos/:id -> /todos/12 -> Detaliile todo-ului cu id-ul 12
 * PUT /todos/:id -> Inlocui todo-ul cu id-ul :id cu un todo pe care il transmitem in body (Update idempotent)
 * PATCH /todos/:id -> Vom updata todo-ul cu id-ul :id cu proprietatile pe care le transmitem in body (Update partial)
 * DELETE /todos/:id -> Vom sterge todo-ul cu id-ul :id
 */
function handleDataFromServer(todos) {
    const container = document.querySelector('[data-todos]');

    const fragment = document.createDocumentFragment();
    for(const todo of todos) {
        const newTodo = document.createElement('label');
        const check = document.createElement('input');

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.dataset.delete = todo.id;

        check.type = 'checkbox';
        check.checked = todo.completed;
        check.dataset.todoId = todo.id;
        
        newTodo.innerText = todo.title;
        newTodo.prepend(check);
        newTodo.appendChild(deleteBtn);

        todo.completed && newTodo.classList.add('completed');


        fragment.appendChild(newTodo);
    }
    container.appendChild(fragment);

    // Event Delegation
    container.addEventListener('change', updateStatus);
    container.addEventListener('click',  (e) => {
        console.log(e.target.dataset.delete);
        e.preventDefault();
        if(e.target.dataset.delete !== undefined){
            deleteTodo(e); 
        }
    });
}

function updateStatus(e) {
    e.target.parentNode.classList.toggle('completed');

    fetch(`http://jsonplaceholder.typicode.com/todos/${e.target.dataset.todoId}`, {
        method: 'PATCH', 
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({completed: e.target.checked })
    });
}

const addTodo = document.querySelector('[data-newtodo]');
const addTodoBtn = document.querySelector('.submit-btn');
addTodo.addEventListener('change', (e) => e.stopPropagation());
addTodoBtn.addEventListener('click', (event) => {
   
    event.preventDefault();
    addNewTodo(addTodo);
});



async function addNewTodo(addTodo) {
    const todoValue=addTodo.value;
    const newTodo = {userId: 1, title:todoValue, completed:false};

    try {
        const data = await fetch('http://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(newTodo)
        }).then(treatResponse);
    } catch(err) {
        console.error(err)
    }
    console.log(data);
}

async function deleteTodo(e){
    const res = await fetch(`http://jsonplaceholder.typicode.com/todos/${e.target.dataset.delete}`, {
        method: 'DELETE'
    });

    if(res.ok) {
        const renderedTodo = e.target.parentNode;
        renderedTodo.remove();
    }
}




 



/**
 * Promises
 */
// const promise = new Promise((resolve, reject) => setTimeout(() => resolve(42), 2000));

// const handleSuccess = (val) => 'altceva';

// const handleError = (err) => console.warn(err);

// promise
//     .then( handleSuccess, handleError )
//     .then( console.log )
//     .catch( handleError );
