
const todoForm = document.getElementById("addForm")
const todoField = document.getElementById("todoField")
const list = document.getElementById("todos")
const checkboxes = document.querySelectorAll('.container__todolist')

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(todoField.value)
})

function createItem(x) {
  const html = `<li class="container__todolist"><input class="container__listtodo" onChange="addClass(event)" type="checkbox" name="list"><label for="listtodo">${x}</label></li>`
  list.insertAdjacentHTML("beforeend", html)
  todoField.value = ""
  todoField.focus()
}
{/* <button onclick="deleteItem(this)">Delete</button> */}
function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove()
}

// FUNCTION
const addClass = (event) => {
  if (event.target.checked) {
    event.target.classList.add("container__checked")
  } else {
    event.target.classList.remove("container__checked")
  } 
//  console.log(document.querySelectorAll('input[type="checkbox"]:checked').length);
let html = (document.querySelectorAll('input[type="checkbox"]:not(:checked)').length + ' ' + 'items left');
document.getElementById("container__count").innerHTML = html;

// let get = document.querySelectorAll('input[type="checkbox"]:checked'); 
// let get = document.querySelectorAll('.container__todolist'); 
// get.forEach(element => {
//  element.remove();
// });
}
// const removeItem = (event) => {
//   let get = document.querySelectorAll('.container__todolist'); 
//   get.forEach(element => {
//     element.remove();
//   });
// }
