const button = document.querySelector(".button1");
const overplays = document.querySelector("#overplays");
const overlay = document.querySelector("overplay");
button.addEventListener("click", function(){
  console.log("hello");
  overplays.classList.remove(".overplay");
});
