function updateTime() {
  const el = document.getElementById("time");
  el.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);