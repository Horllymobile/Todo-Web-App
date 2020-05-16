const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTemplate = text => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${text}</span>
            <i class="material-icons delete">delete</i>
        </li>
    `;

    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault()
    let todo = addForm.add.value.trim();

    if (todo !== '') {
        generateTemplate(todo);
        addForm.reset();
    } else {
        alert("Todo field is required");
    }
});

//Deleting todos 
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {


        Array.from(list.children)
            .filter((todo) => !todo.textContent.toLowerCase().includes(term))
            .forEach((todo) => todo.classList.add('filterd'))

        Array.from(list.children)
            .filter((todo) => todo.textContent.includes(term))
            .forEach((todo) => todo.classList.remove('filterd'))

    }
    //Key up

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();

    filterTodos(term);

})