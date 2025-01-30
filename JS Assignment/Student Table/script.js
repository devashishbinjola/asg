var students = [];

function addStudent() {
    var name = prompt("Enter student name:");
    if (!name || name.trim() === "") {
        alert("Student name cannot be empty!");
        return;
    }

    var marks = [];
    for (var i = 1; i <= 5; i++) {
        var mark = prompt("Enter marks for Subject " + i + " (out of 100):");
        if (!mark || isNaN(mark) || mark < 0 || mark > 100) {
            alert("Marks must be a number between 0 and 100!");
            return;
        }
        marks.push(parseInt(mark, 10));
    }

  
    var total = 0;
    for (var j = 0; j < marks.length; j++) {
        total += marks[j];
    }
    var average = (total / marks.length).toFixed(2);

    
    students.push({
        name: name,
        marks: marks,
        total: total,
        average: average
    });

  
    saveData();

 
    updateTable();
}


function updateTable() {
    var tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";
    

    for (var i = 0; i < students.length; i++) {
        var row = tableBody.insertRow();

        var cellName = row.insertCell(0);
        cellName.innerHTML = students[i].name;

        for (var j = 0; j < 5; j++) {
            var cellMarks = row.insertCell(j + 1);
            cellMarks.innerHTML = students[i].marks[j];
        }

        var cellTotal = row.insertCell(6);
        cellTotal.innerHTML = students[i].total;

        var cellAverage = row.insertCell(7);
        cellAverage.innerHTML = students[i].average;
    }
}


function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}


function loadData() {
    var savedData = localStorage.getItem("students");
    if (savedData) {
        students = JSON.parse(savedData);
        updateTable();
    }
}


window.onload = loadData;
