let first = document.getElementById("first");
let second = document.getElementById("second");

first.addEventListener("click", f);
first.addEventListener("click", border);
second.onclick = f;

function f() {
  this.classList.toggle("color");
}

function border() {
  first.classList.toggle("border");
}
