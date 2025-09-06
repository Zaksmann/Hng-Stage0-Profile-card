let time = document.getElementById('time');

function updateTimeGMTPlus1() {
  // Get current time in UTC
  let now = new Date();

  let gmtPlus1 = new Date(now.getTime());

  // Format as string
  let options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  time.innerHTML = gmtPlus1.toLocaleString('en-GB', options) + ' GMT+1';
}
// Update the time every second
setInterval(updateTimeGMTPlus1, 1000);
updateTimeGMTPlus1();

const check = document.getElementById('checkbox');
let container = document.getElementById('contain');

check.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  container.classList.toggle('dark');
  //   container.classList.remove("container1");
});
