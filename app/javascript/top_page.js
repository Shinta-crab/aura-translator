// ===============================
// 📘 top_page.js
// このファイルはトップページ専用のJavaScriptです。
// 主に「ハンバーガーメニューの開閉動作」を制御しています。
// ===============================

// トップページ用のスクリプト（ハンバーガーメニューの開閉を制御）
document.addEventListener("DOMContentLoaded", () => {
  // HTML内の要素を取得します（IDで取得）。
  // 取得できなければ null になるので、後で存在チェックをします。
  const menuToggle = document.getElementById("menu-toggle"); // メニューを開くボタン
  const menuClose = document.getElementById("menu-close");   // メニューを閉じるボタン（×など）
  const sideMenu = document.getElementById("side-menu");     // 実際にスライドするサイドメニュー要素

  // どれか1つでも見つからなければ処理を中断します（エラー防止）。
  // 実行を続けると `null.addEventListener` のようなエラーになるための安全策です。
  if (!menuToggle || !menuClose || !sideMenu) {
    console.warn("Menu elements not found"); // デバッグ用にコンソールへ警告表示
    return; // ここで処理を終了
  }

  // メニュー開くボタンがクリックされたときの処理を登録
  menuToggle.addEventListener("click", () => {
    // Tailwind のクラス `-translate-x-full` を削除することで、
    // サイドメニューが左からスライドして画面内に現れる（開く）。
    // ここでは「クラスを取り除く」ことで開くアクションを実現しています。
    sideMenu.classList.remove("-translate-x-full");
  });

  // メニュー閉じるボタン（または×）がクリックされたときの処理を登録
  menuClose.addEventListener("click", () => {
    // Tailwind のクラス `-translate-x-full` を追加することで、
    // サイドメニューを左へ完全に移動（画面外へ）させて閉じる。
    sideMenu.classList.add("-translate-x-full");
  });
});