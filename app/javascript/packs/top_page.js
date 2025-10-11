document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const profileBtn = document.getElementById("profileBtn");
  hamburger?.addEventListener("click", () => {
    alert("メニューを開きます（ここに処理を実装）");
  });
  profileBtn?.addEventListener("click", () => {
    alert("プロフィールを開きます");
  });
});