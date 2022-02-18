console.log("ToDo List");

const pressMe = document.getElementById("press-me");
const input = document.getElementById("input");
const containerDiv = document.querySelector(".list");

function appendP() {
  if (input.value == "" || input.value == " ") {
    input.value = "";
    return;
  }
  let p;
  p = document.createElement("p");
  p.addEventListener("click", () => {
    p.style.textDecoration = "line-through";
  });

  p.innerText = input.value;
  containerDiv.prepend(p);
  input.value = "";
}

pressMe.addEventListener("click", appendP);

input.onkeydown = (event) => {
  if (event.key === "Enter") appendP();
  return;
};

// p.addEventListener("click", () => {
//   p.style.textDecoration = "line-through";
// });
