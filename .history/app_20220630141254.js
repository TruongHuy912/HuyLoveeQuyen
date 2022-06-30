const button = document.querySelector(".button1");
const overplays = document.querySelector("#overplays");
const overlay = document.querySelector("overplay");
button.addEventListener("click", function(){
  overplays.classList.remove("overplay");
});
