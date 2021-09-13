// componentを使用する際、第一引数にタグとして設定する名前、第二引数に処理を記述
// component内ではデータを使用する場合は、関数の戻り値として設定する必要がある
// なぜdataを関数にする必要があるのか、関数にしないと同じdataを参照しにいくためバグになる
Vue.component("my-component",{
  data: function(){
    return {
      number: 12
    }
  },
  template: "<p>いいね({{number}})</p>"
});

// componentをグローバル登録ではなく、特定のインスタンスのみで使用する場合、
// ローカル登録することができる
let component = {
  data: function(){
    return {
      number: 12
    }
  },
  template: "<p>いいね({{number}})</p>"
}

new Vue({
  el: '#app',
  // Vueインスタンスが保持しているデータ
})


new Vue({
  el: '#app2',
  components:{
    "my-component":component
  }
  // Vueインスタンスが保持しているデータ
})