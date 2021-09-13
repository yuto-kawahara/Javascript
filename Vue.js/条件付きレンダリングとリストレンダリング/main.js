new Vue({
  el: '#app',
  // Vueインスタンスが保持しているデータ
  // dataはあくまでも初期値を設定する場所なので、動的な表現はできない
  data: {
    ok: false,
    maybeOK: false,
    fruits: ["りんご","バナナ","ぶどう"],
    object: {
      firstName: "タロウ",
      lastName: "田中",
      age: 21
    }
  },
  // computed内で関数を記述しreturnによって値を得ることができる(あくまでもプロパティのためreturnが必要)
  computed: {
  },
  methods: {
    remove() {
      this.fruits.shift();
    }
  },
})