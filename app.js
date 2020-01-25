function onReady() {
  let id = 0;
  let toDos = [];
  if (localStorage.getItem('toDos')) {
    toDos = JSON.parse(localStorage.getItem('toDos'));
  } else {
    toDos = [];
  }

  const ADD_TODO_FORM = document.getElementById('addToDoForm');

  function createNewToDo() {
    const NEW_TODO_TEXT = document.getElementById('newToDoText');
    if (!NEW_TODO_TEXT.value) { return; }

    toDos.push({
      title: NEW_TODO_TEXT.value,
      complete: false,
      id: id
    });
    id++;

    NEW_TODO_TEXT.value = '';

    localStorage.setItem('toDos', JSON.stringify(toDos));

    renderTheUI();
  }

  function renderTheUI() {
    const TODO_LIST = document.getElementById('toDoList');

    TODO_LIST.textContent = '';

    toDos.forEach(function(toDo) {
      const NEW_LI = document.createElement('li');
      const CHECKBOX = document.createElement('input');
      CHECKBOX.type = "checkbox";
      let deleteButton = document.createElement('button');

      NEW_LI.textContent = toDo.title;
      deleteButton.textContent = "Delete";

      TODO_LIST.appendChild(NEW_LI);
      NEW_LI.appendChild(CHECKBOX);
      NEW_LI.appendChild(deleteButton);

      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        });

        renderTheUI();
      });

      CHECKBOX.addEventListener('click', event => {
        toDo.complete = !toDo.complete;
      });
    });
  }

  ADD_TODO_FORM.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}


window.onload = function() {
  onReady();
};
