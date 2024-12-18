const inputBox = document.getElementById("inputBox");
const ListBox = document.getElementById("List-box");

function addButton() {
    if (inputBox.value === '') {
        alert("Fill the field first");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
        ListBox.appendChild(li);

        saveData();
    }
    inputBox.value = ""; 
}

function saveData() {
    localStorage.setItem("data", ListBox.innerHTML);
}

function showTask() {
    ListBox.innerHTML = localStorage.getItem("data") || ""; 
}

ListBox.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData(); 
    } else if (event.target.tagName === "SPAN") {
        const listItem = event.target.parentElement;
        if (listItem.classList.contains("checked")) {
            listItem.remove();
            saveData(); 
        } else {
            alert("You must check the item before deleting it.");
        }
    }
});

showTask();

const addButtonElement = document.getElementById("addBtn");
addButtonElement.addEventListener("click", addButton);




