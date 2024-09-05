function greetUser() {
  var e = document.getElementById("divMessage");
  e.innerText = "Welcome to the program!";
}
var btn = document.getElementById("btnGreet");
btn.addEventListener("click", greetUser);
