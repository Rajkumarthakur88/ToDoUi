let form = document.querySelector(".todoform");
let input = document.querySelector("input")
let ul = document.querySelector("ul");

form.addEventListener("submit" ,Todolist);

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



// ul.addEventListener("click", deleteTodo);

// // delete todo

// function deleteTodo(e){

//    console.log(e.target.className);
//   if(e.target.className.includes("cancel-btn")){
//     const todo = e.target.parentElement;
//     ul.removeChild(todo);
//   }

// }



// //to delete the todo

ul.addEventListener("click", deleteTodo);

function deleteTodo(e){

   if(e.target.className.includes("cancel-btn"))
   {
      const DelLi = e.target.parentElement;
      ul.removeChild(DelLi);
   }

}