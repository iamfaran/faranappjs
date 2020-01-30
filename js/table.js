document.getElementById("tables").addEventListener("submit", e => {
  e.preventDefault();
  const tableNumber = document.getElementById("table-number");
  if (tableNumber.value) {
    localStorage.setItem("table-number", tableNumber.value);
    document.querySelector(".loading").style.display = "block";
    tableNumber.value = "";
    setTimeout(secondPage, 1000);
  } else {
    showError();
  }
});

const showError = () => {
  const errDiv = document.createElement("div");
  errDiv.className = "alert alert-danger";
  errDiv.textContent = "Please provide some value";
  const card = document.querySelector(".card-body");
  const heading = document.querySelector(".card-title");
  card.insertBefore(errDiv, heading);

  setTimeout(() => {
    errDiv.remove();
  }, 3000);
};

const secondPage = () => {
  window.location.href = "result-table.html";
};
