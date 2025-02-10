let time = document.getElementById("time");

function updateTime() {
  let fullTime = new Date().toUTCString();
  time.innerHTML = `${fullTime}`;
}
updateTime();
setInterval(updateTime, 1000);

const check = document.getElementById("checkbox");
let container = document.getElementById("contain");

check.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  container.classList.toggle("dark");
  //   container.classList.remove("container1");
});
