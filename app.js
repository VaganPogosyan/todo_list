const pressMe = document.getElementById("press-me");
const input = document.getElementById("input");
const containerTodo = document.querySelector(".list-todo");
const containerDone = document.querySelector(".list-done");
const iconDelete = document.createAttribute("ion-icon");
iconDelete.tagName = "heart";
const container = document.querySelector(".container");

console.log(iconDelete);

function addItem(element, text) {
  const x = document.createElement("div");
  x.className = "list-item";
  const html = `
      <div>
          <p>${text}</p>
      </div>
      <div class="icon">
          <ion-icon class="checkbox" name="checkbox-outline"></ion-icon>
      </div>
`;
  x.innerHTML = html;
  element.prepend(x);

  const iconDiv = document.querySelector(".icon");
  iconDiv.onclick = () => {
    console.log("heeueue");
    containerDone.prepend(x);
    x.style.textDecoration = "line-through";
  };
}

function appendItem() {
  if (input.value == "" || input.value == " ") {
    input.value = "" + "";
    return;
  }
  addItem(containerTodo, input.value);
  input.value = "";
}

// function sendToDone(event) {
//   // const p = event.target;
//   // p.className = "list-item";
//   // const listDone = document.querySelector(".title-done");
//   // listDone.after(p);
// }

pressMe.addEventListener("click", appendItem);

input.onkeydown = (event) => {
  if (event.key === "Enter") appendItem();
  return;
};
