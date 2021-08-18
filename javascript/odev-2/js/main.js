function newElement() {
  // create new item
  let li = document.createElement("li");
  let taskValue = document.getElementById("task").value;
  let text = document.createTextNode(taskValue);
  li.appendChild(text);

  if (taskValue === "" || taskValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  //localStorage save
  let save = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  save.push(taskValue);
  localStorage.setItem("tasks", JSON.stringify(save));

  // mark items
  let list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ch) {
      if (ch.target.tagName === "LI") {
        ch.target.classList.toggle("checked");
      }
    },
    false
  );

  // delete buttons
  let span = document.createElement("SPAN");
  let x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  li.appendChild(span);

  // invisible
  let close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

localStorage.clear();