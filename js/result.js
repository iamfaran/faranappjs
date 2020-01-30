const stringValue = localStorage.getItem("table-number");
const tableNumber = parseInt(stringValue);
const h4 = document.createElement("h4");
h4.textContent = `Table of ${tableNumber}`;
document.getElementById("final-result").appendChild(h4);

for (let i = 1; i <= 10; i++) {
  const p = document.createElement("p");
  p.textContent = `${tableNumber} X ${i} = ${tableNumber * i}`;
  document.getElementById("final-result").appendChild(p);
}
