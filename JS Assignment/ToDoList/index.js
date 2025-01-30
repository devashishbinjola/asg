const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    console.log("done");
}

function addList() {
    if (inputBox.value === '') {
        alert("You should write something in order to add task!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addList();
    }
});

showList();