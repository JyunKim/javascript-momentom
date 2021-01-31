const todoForm = document.querySelector('.js-todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.js-todo-list');

const TODO = 'todo';

let todos = [];

function setTodo() {
  localStorage.setItem(TODO, JSON.stringify(todos)); // localStorage에는 string으로만 저장 가능
}

function deleteTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);

  // 조건에 맞는 요소만 포함한 배열 반환
  todos = todos.filter((todo) => {
    return todo.id != li.id; // todo.id는 int, li.id는 str
  });
  setTodo();
}

function showTodo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const id = todos.length + 1;

  delBtn.textContent = 'X';
  delBtn.addEventListener('click', deleteTodo);
  span.textContent = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = id;
  todoList.appendChild(li);

  const todoObj = {
    id: id,
    text: text,
  };
  todos.push(todoObj);
  setTodo();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  showTodo(currentValue);
  todoInput.value = '';
}

function getTodo() {
  const todo = localStorage.getItem(TODO);
  if (todo !== null) {
    const parsedTodo = JSON.parse(todo);
    // 콜백 함수, 각 요소에 대해 함수 실행
    parsedTodo.forEach((todo) => {
      showTodo(todo.text);
    });
  }
}

function init() {
  getTodo();
  todoForm.addEventListener('submit', handleSubmit);
}

init();
