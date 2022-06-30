const button = document.querySelector(".button1");
// const overplays = document.querySelector("#overplays");
const overlay = document.querySelector(".overlay");
button.addEventListener("click", function(){
  document.body.removeChild(overlay);
});

const button1 = document.querySelector(".button-style");
button1.addEventListener("click", function(){
  document.body.appendChild(overlay);
})
