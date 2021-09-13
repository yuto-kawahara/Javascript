new Vue({
  el: '#app',
  // Vueインスタンスが保持しているデータ
  // dataはあくまでも初期値を設定する場所なので、動的な表現はできない
  data: {
    counter: 0,
    otherCounter: 0,
    isActive: true,
    styleObject: {
      color: 'red',
      'background-color': 'blue'
    },
    baseObject: {
      fontSize: '60px'
    }
    //↓のコードだとエラーになる
    // lessThanThree: this.counter > 3 ? "3より上" : "3より下"
  },
  // computed内で関数を記述しreturnによって値を得ることができる(あくまでもプロパティのためreturnが必要)
  computed: {
    lessThanThreeComputed: function(){
      console.log("computed")
      return this.counter > 3 ? "3より上" : "3より下"
    },
    classObject(){
      return {
        red: this.isActive, 
        'bg-blue': !this.isActive}
    },
  },
  methods: {
    lessThanThreeMethod: function() {
      console.log("method")
      return this.counter > 3 ? "3より上" : "3より下"
    }
  },
  // 非同期処理したい機能で使用すると便利
  // データが変わったときに処理を実行したい時に使用
  watch: {
    counter: function() {
      let vm = this;
      setTimeout(function(){
        vm.counter = 0;
      },3000);
    }
  }
})