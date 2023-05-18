
const form = document.querySelector('#do-form');
const input = document.querySelector('#do-input');
const list = document.querySelector('#do-li');

function addTodoItem(event) {
  event.preventDefault(); 

  const todoText = input.value.trim(); 
  if (todoText == "") {
    alert("Enter something..");
    return;
}

  if (todoText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
  

    const deleteButton = document.createElement('button');
    deleteButton.textContent='Delete'
    deleteButton.classList.add('delete-button');


    deleteButton.addEventListener('click', function () {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    input.value = ''; 
  }
}


form.addEventListener('submit', addTodoItem);
