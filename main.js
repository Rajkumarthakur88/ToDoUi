let form = document.querySelector("form");
let input = document.querySelector("input")
let ul = document.querySelector("ul");


form.addEventListener("submit", Todolist);

function Todolist(e) {
   e.preventDefault();
const NewLi = document.createElement("li");
NewLi.className = "to-do ";
NewLi.innerText=input.value;

let delBtn = document.createElement("button");
delBtn.innerText = "x";
delBtn.className = "cancel-btn";
NewLi.appendChild(delBtn);

ul.appendChild(NewLi);

form.reset();
}


// let form = document.querySelector("form");
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");

// // Save todo
// form.addEventListener("submit", saveTodo);

// function saveTodo(e) {
//   // Prevents from reloading page

//   e.preventDefault();

//   // create li
//   const newLi = document.createElement("li");
// //   newLi.className = "list-group-item rounded-0";
//   newLi.innerText = input.value;

//   // create button

// //   let delBtn = document.createElement("button");
// //   delBtn.innerText = "Delete";
// //   delBtn.className = "btn btn-danger btn-sm rounded-0 float-end";
// //   newLi.appendChild(delBtn);

//   // Insert New Li Into Ul
//   ul.appendChild(newLi);

//   // Reset Form
//   form.reset();
// }
