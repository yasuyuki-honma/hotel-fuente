// --- 設定 ---
const TOTAL_SPOTS = 10;

// --- URL から spot番号を取得 ---
const params = new URLSearchParams(window.location.search);
const spot = params.get("spot");

// --- ローカルストレージから進捗を読み込み ---
let progress = JSON.parse(localStorage.getItem("fountain_progress")) || [];

// --- spot を見つけた場合の処理 ---
if (spot) {
  const num = Number(spot);
  if (!progress.includes(num)) {
    progress.push(num);
    localStorage.setItem("fountain_progress", JSON.stringify(progress));
  }
}

// --- 達成状況の表示 ---
const status = document.getElementById("status");
const count = progress.length;

if (count >= TOTAL_SPOTS) {
  status.innerHTML = `<div class="complete">🎉 全部見つけました！<br>フロントで画面をお見せください。</div>`;
} else {
  status.textContent = `達成状況：${count} / ${TOTAL_SPOTS}`;
}


