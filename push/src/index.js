import Push from "../node_modules/push.js";

export function push() {
  const btn = document.getElementById("push");
  btn.addEventListener("click", function () {
    Push.create("更新情報", {
      body: "ブログの更新をお知らせします",
      icon: "call.png",
      timeout: 8000,
      onClick: function () {
        window.focus();
        this.close();
      },
    });
  });
}
