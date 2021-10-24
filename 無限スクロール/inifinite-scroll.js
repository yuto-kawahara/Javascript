class InfiniteScroll {
  constructor(els) {
    // contentsの要素を取得
    this.els = document.getElementById(els);
    // cntは0に設定
    this.cnt = 0;
    // 10000件まで読み込める
    this.max = 3000;
    // 初期化設定
    this._init();
  }

  _init() {
    // コールバック関数
    const callback = function (entries, observer) {
      entries.forEach(entry => {

        if(entry.isIntersecting) {
          observer.unobserve(entry.target);
          this.loadContent();
        }
        else{
          return;
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this));
    this.loadContent();
  }

  async loadContent() {
    const response = await this._fetchDummy("https://example.com/load?i=" + this.cnt);

    contents.insertAdjacentHTML(
      "beforeend",
      // ここに投稿されて内容を埋め込めばいいか…？
      // gonというgemを仕使用すれば簡単にjavascriptにインスタンス変数を渡せる！
      "<div>" + "#" + (this.cnt + 1) + "<br>" + (await response.text()) + "</div>"
    );

    this.cnt++;

    if (this.cnt < this.max) this.io.observe(contents.lastElementChild);
  }

  _fetchDummy(url) {
    return new Promise(resolve => {
      setTimeout(() => {
        const content = ('Content '.repeat(6) + '<br>').repeat(3) + url + '<br><br>';
        resolve({ text: async () => content });
      }, 100);
    });
  }
}
