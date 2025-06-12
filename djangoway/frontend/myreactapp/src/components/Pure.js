<button id="myButton"> Click here</button>;

const button = document.getElementById("mybutton");
button.addEventListener("click", () => {
  button.style.backgroundColor = "blue";
});

const outerDiv = document.createElement("div");
const innerDiv = document.createElement("div");
const table = document.createElement("table");

for (let i = 0; i < 3; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("td");
    cell.textContent = `Row ${i + 1}, cell ${j + 1}`;
    row.appendChild(cell);
  }
}

innerDiv.appendChild(table);
outerDiv.appendChild(innerDiv);
document.body.appendChild(outerDiv);
