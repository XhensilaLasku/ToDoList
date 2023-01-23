// var form = document.getElementById("todoform");

// function submitForm(event) {
//     event.preventDefault();
    
//  }
//  form.addEventListener('submit', submitForm);

//  function getVal() {
//     const val = document.querySelector('input').value;
//     console.log(val);
//   }
const todoForm = document.getElementById("addForm")
const todoField = document.getElementById("todoField")
const list = document.getElementById("todos")

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(todoField.value)
})

function createItem(x) {
  const html = `<input class="container__listtodo" id="listtodo" type="radio">${x}`
  list.insertAdjacentHTML("beforeend", html)
  todoField.value = ""
  todoField.focus()
}
{/* <button onclick="deleteItem(this)">Delete</button> */}
function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove()
}

const elements = document.querySelectorAll('#listtodo');