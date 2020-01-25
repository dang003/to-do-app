function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    //get the text
    let title = NEW_TODO_TEXT.value;

    //create a new li
    let newLi = document.createElement('li');
    newLi.classList.add("mdl-list__item");

    //create a new input
    let checkbox = document.createElement('input');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', function(event) {
      TODO_LIST.removeChild(this.parentElement);
    })

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach delete to the li
    newLi.appendChild(deleteButton);

    //attach the li to the ul
    TODO_LIST.appendChild(newLi);

    //empty the input
    NEW_TODO_TEXT.value = '';
  });
}

window.onload = function() {
  onReady();
};
