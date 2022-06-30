const button = document.querySelector(".button1");
// const overplays = document.querySelector("#overplays");
const overlay = document.querySelector(".overlay");
button.addEventListener("click", function(){
  console.log(overlay);
  document.body.removeChild(overlay);
});
