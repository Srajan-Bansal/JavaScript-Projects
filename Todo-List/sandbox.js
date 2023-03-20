const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

search.addEventListener('keyup', () => {
    const term = search.value.trim();

    const allTodos = Array.from(list.children);

    allTodos.forEach(todo => {
        if (!todo.textContent.toLowerCase().includes(term)) {
            todo.classList.add('filtered');
        }
    });
    allTodos.forEach(todo => {
        if (todo.textContent.toLowerCase().includes(term)) {
            todo.classList.remove('filtered');
        }
    });
});

const generateTemplete = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
        `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplete(todo);
    }
    addForm.reset();
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});