const planner = document.getElementById("planner");

for (let hour = 6; hour <= 17; hour++) {
  const timeBlock = document.createElement("div");
  timeBlock.className = "time-block";

  const hourLabel = document.createElement("div");
  hourLabel.className = "hour";
  hourLabel.textContent = `${hour}:00`;

  const taskInput = document.createElement("input");
  taskInput.className = "task";
  taskInput.value = localStorage.getItem(`task-${hour}`) || "";

  const saveBtn = document.createElement("button");
  saveBtn.className = "saveBtn";
  saveBtn.textContent = "Save";
  saveBtn.onclick = () => {
    localStorage.setItem(`task-${hour}`, taskInput.value);
    alert("Saved!");
  };

  timeBlock.appendChild(hourLabel);
  timeBlock.appendChild(taskInput);
  timeBlock.appendChild(saveBtn);
  planner.appendChild(timeBlock);
}
