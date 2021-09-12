new Vue({
  el: '#app',
  // Vueインスタンスが保持しているデータ
  data: {
    url: "https://google.com",
    urlTwitter: "https://twitter.com",
    number: 31,
    attribute: "href",
    html: "<h1>h1です<h1>",
    message: "HelloWorld!",
    twitterObject: {
      href:"https://twitter.com",
      id: 31
    },
    count: 0,
    x:0,
    y:0
  },
  // Vueインスタンスが保持しているメソッド
  methods: {
    sayHi(){
      this.message = "Hello Vue.js"
      return "Hi";
    },
    countUp(times) {
      this.count += 1 * times;
    },
    // 引数にイベントオブジェクトを取得することができる
    changeMousePosition(divNum,event)
    {
      this.x = event.clientX / divNum;
      this.y = event.clientY / divNum;
    },
    noEvent(event)
    {
      //イベントを伝搬させないメソッド
      event.stopPropagation();
    },
    noEventPrev(event)
    {
      event.preventDefault();
    },
    myAlert()
    {
      alert("アラートです");
    }
  }
})