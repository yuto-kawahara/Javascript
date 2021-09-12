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
    count: 0
  },
  // Vueインスタンスが保持しているメソッド
  methods: {
    sayHi(){
      this.message = "Hello Vue.js"
      return "Hi";
    },
    countUp() {
      this.count += 1
    }
  }
})