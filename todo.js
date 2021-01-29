const todoForm = document.querySelector('.js-todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.js-todo-list');

const TODO = 'todo';

function showTodo(todo) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  delBtn.textContent = 'X';
  span.textContent = todo;
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  showTodo(currentValue);
}

function init() {
  todoForm.addEventListener('submit', handleSubmit);
}

init();
