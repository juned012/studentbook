let student = [];

function addStudent() {
  let studentName = document.getElementById("studentName").value;
  let branch = document.getElementById("branch").value;
  let rollNum = parseInt(document.getElementById("rollNum").value);
  let grade = document.getElementById("grade").value;
  let cgpa = parseFloat(document.getElementById("cgpa").value);
  let cardContainer = document.getElementById("cardContainer");

  let studentObject = {
    name: studentName,
    branch: branch,
    rollNum: rollNum,
    grade: grade,
    cgpa: cgpa,
  };

  student.push(studentObject);
  console.log(student);

  if (!studentName || !branch || isNaN(rollNum) || !grade || isNaN(cgpa)) {
    alert("Please fill in all fields correctly.");
  } else {
    let card = document.createElement("div");
    card.className = "card";

    student.forEach((std) => {
      card.innerHTML = ` <div class="student-name">${std.name}</div>
          <div class="branch">Branch: ${std.branch}</div>
          <div class="rollNum">Roll Number: ${std.rollNum}</div>
          <div class="grade">Grade: ${std.grade}</div>
          <div class="cgpa">CGPA: ${std.cgpa}</div>`;
    });

    cardContainer.appendChild(card);
  }

  document.getElementById("studentName").value = "";
  document.getElementById("branch").value = "";
  document.getElementById("rollNum").value = "";
  document.getElementById("grade").value = "";
  document.getElementById("cgpa").value = "";
}
