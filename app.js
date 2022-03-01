// const { stringify } = require("nodemon/lib/utils");

const addButton = document.getElementById("add-button");
const input = document.getElementById("input");
const listTodo = document.querySelector(".list-todo");
const listDone = document.querySelector(".list-done");
const iconDelete = document.createAttribute("ion-icon");
const container = document.querySelector(".container");

// localStorage.clear();
// let string = "";
// localStorage.setItem("html", string);

const todoItems = [];

function addItem(text) {
  const item = {
    text,
    id: Date.now(),
  };

  console.log(item);
  todoItems.unshift(item);
  appendToDOM(item);
  console.log(todoItems);

  input.value = "";
}

function addToLocalStorage(item) {
  localStorage.setItem("html", JSON.stringify(todoItems));
}

function appendToDOM(item) {
  const element = document.createElement("p");
  element.className = "list-item";
  element.setAttribute("id", item.id);
  element.innerText = item.text;
  listTodo.prepend(element);

  input.value = "";
}

function renderToDo() {
  const list = localStorage.getItem("html");
  if (list) {
    const todoItems = JSON.parse(list);
    console.log(todoItems);
  }
}
renderToDo();

addButton.addEventListener("click", () => {
  addItem(input.value);
});

input.onkeydown = (event) => {
  if (event.key === "Enter") addItem(input.value);
};

// addItem("go to gym");
// addItem("go to store");
// addItem("go to fred");

// function renderTodoItems() {
//   todoItems.forEach((item) => {
//     const element = document.createElement("p");
//     element.className = "list-item";
//     element.innerText = item.text;
//     listTodo.append(element);
//   });
// }

// renderTodoItems();
// addItem("go to dunny");
// console.log(todoItems);

// function addItem(element, text) {
//   const htmlTodo = `
//       <div class="list-item">
//         <div>
//           <p>${text}</p>
//         </div>
//         <div class="icon-done">
//           <ion-icon class="checkbox" name="checkbox-outline"></ion-icon>
//         </div>
//       </div>
//         `;

//   const x = document.createElement("div");
//   x.innerHTML = htmlTodo;
//   element.innerHTML = x.innerHTML + element.innerHTML;
//   localStorage.setItem("items", element.innerHTML);

//   // =====================

//   const iconDone = document.querySelector(".icon-done");
//   iconDone.onclick = () => {
//     const htmlDone = `
//         <div class="list-item">
//           <div>
//               <p>${text}</p>
//           </div>
//           <div class="icon-delete">
//               <ion-icon class="trash" name="trash-outline"></ion-icon>
//           </div>
//         </div>
//         `;
//     x.innerHTML = htmlDone;
//     containerDone.prepend(x);
//     x.style.textDecoration = "line-through";

//     const iconDelete = document.querySelector(".icon-delete");
//     iconDelete.onclick = () => {
//       x.remove();
//     };
//   };
// }

// function appendItem() {
//   if (input.value == "" || input.value == " ") {
//     input.value = "" + "";
//     return;
//   }
//   addItem(containerTodo, input.value);
//   input.value = "";
// }

// addButton.addEventListener("click", appendItem);

// input.onkeydown = (event) => {
//   if (event.key === "Enter") appendItem();
//   return;
// };

// console.log(myStorage.items);

// myStorage.clear();

// const x = document.createElement("div");
// x.className = "list-item";
// const htmlTodo = `
//     <div>
//         <p>${text}</p>
//     </div>
//     <div class="icon-done">
//         <ion-icon class="checkbox" name="checkbox-outline"></ion-icon>
//     </div>
//       `;

// // x.innerHTML = htmlTodo + x.innerHTML;
// x.innerHTML = htmlTodo;
// myStorage.setItem("items", htmlTodo);
// console.log(x.innerHTML);

// element.prepend(x);
