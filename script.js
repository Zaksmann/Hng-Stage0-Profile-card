let time = document.getElementById("time");

function updateTimeGMTPlus1() {
  let now = new Date();
  // Get UTC time in milliseconds, add 1 hour (3600000 ms)
  let gmtPlus1 = new Date(now.getTime() + 60 * 60 * 1000);
  // Format as string
  let options = {
    timeZone: "Etc/GMT-1",
    hour12: false,
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  time.innerHTML = gmtPlus1.toLocaleString("en-GB", options) + " GMT+1";
}
// Update the time every second
setInterval(updateTimeGMTPlus1, 1000);
updateTimeGMTPlus1();

const check = document.getElementById("checkbox");
let container = document.getElementById("contain");

check.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  container.classList.toggle("dark");
  //   container.classList.remove("container1");
});
