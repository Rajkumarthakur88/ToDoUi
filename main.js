let form = document.querySelector(".todoform");
let input = document.querySelector("input")
let ul = document.querySelector("ul");

form.addEventListener("submit" ,Todolist);


// ADD LI TO TODOLIST

function Todolist(e) {
   e.preventDefault();
const NewLi = document.createElement("li");
NewLi.className = "to-do ";
NewLi.innerText=input.value;

// DELETE BTN
let delBtn = document.createElement("button");
delBtn.innerText = "x";
delBtn.className = "cancel-btn";
NewLi.appendChild(delBtn);

ul.appendChild(NewLi);

// RESET FORM AFTER SUBMIT
form.reset();
}



//To delete the todo

ul.addEventListener("click", deleteTodo);

function deleteTodo(e){

   if(e.target.className.includes("cancel-btn"))
   {
      const DelLi = e.target.parentElement;
      ul.removeChild(DelLi);
   }

}