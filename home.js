const spots = [
  "spot1","spot2","spot3","spot4","spot5",
  "spot6","spot7","spot8","spot9","spot10"
];

let count = spots.filter(s => localStorage.getItem(s) === "true").length;

document.getElementById("progress").innerText = `達成状況：${count}/10`;

if (count === 10) {
  document.getElementById("clear-message").style.display = "block";
}

