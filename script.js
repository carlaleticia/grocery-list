
// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUl").appendChild(li);
    count++;
    changeMessage();
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

 
}

// Create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName("li");
for (let x = 0; x < myNodeList.length; x++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7"); // x symbol
  span.className = "close";
  span.appendChild(txt);
  myNodeList[x].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.remove();
    count--;
    changeMessage();
  };
}

// "checked" when clicking on a list item
let list = document.querySelector("ul");

const listItems = list.childNodes;

listItems.forEach((li) => {
  li.onclick = function () {
    li.classList.toggle("checked");
  };
});


///Change tittle
let count = 0;
let message = document.querySelector("h3");
function changeMessage() {
  if (count > 5) {
    message.textContent = "That's a big trip!";
  } else if (count <= 5 && count > 2) {
    message.textContent = "That's a medium size trip!";
  } else if (count <= 2 && count > 0) {
    message.textContent = "That's a small trip!";
  } else if (count = 0) {
    message.textContent = "No groceries!";
  } else {
    message.textContent = "Grocery List"
  }
}
