//コンポーネント
Vue.component('hello',{
  template: '<p>こんにちわ</p>'
});

let vm = new Vue({
  // el: '#app1',
  // Vueインスタンスが保持しているデータ
  data: {
    message: "インスタンス1"
  },
  computed: {
  },
  methods: {
  },
})

// 新しいプロパティを外側から追加することはできるが、リアクティブにならない
// リアクティブとはVueインスタンス内のデータが変わるとテンプレート構文にも反映される仕組み
// リアクティブシステムを使用する条件はdataに追加されていること
// なぜdataの中にないとダメなのか、Vueインスタンスが作成された瞬間にすべてのプロパティを参照しに行く
// それぞれのdataにgetterとsetterを用意されている
// vm.name = "Hello"

//変数にとって$mountを書くパターン
vm.$mount('#app1')

new Vue({
  // el: '#app2',
  // Vueインスタンスが保持しているデータ
  data: {
    message: "インスタンス2"
  },
  // テンプレートプロパティの例
  template: "<h1>こんにちわ{{message}}</h1>"
  // 末尾に$mountを書くパターン
}).$mount("#app2")

new Vue({
  data: {
    message: "インスタンス3"
  },
  // render関数を使ったパターン
  // 
  render: function(createElement){
    //VNode(仮想Node)はDOM要素じゃない
    //Javascriptを使っているだけ
    //仮想DOMを作成するためにcreateElementで情報(VNode)を与えている
    console.log(createElement('h1', 'こんにちわ' + this.message));
    return createElement('h1', 'こんにちわ' + this.message);
  }
}).$mount("#app3")

//createElementはDOM要素を作っている
//documentはブラウザが作成したオブジェクト
let dc = document.createElement('div')
console.log(dc);
console.dir(document);

//DOM要素に直接アクセスする処理(getElementByIdなど)の場合、処理が重くなる
//仮想DOMというめちゃめちゃ効率的にDOMを変更できる技術
//変更前と変更後のDOMを見比べて、変更があった部分だけを更新するために仮想DOMが必要

new Vue({
  el: '#app4',
  // Vueインスタンスが保持しているデータ
  data: {
    name: "shimeji"
  },
  beforeCreate: function() {
    console.log('beforeCreate');
  },
  created:function(){
    console.log('Created');
  },
  beforeMount:function(){
    console.log('beforeMount');
  },
  mounted:function(){
    console.log('mounted');
  },
  beforeUpdate:function(){
    console.log('beforeUpdate');
  },
  updated:function(){
    console.log('Updated');
  },
  beforeDestroy:function(){
    console.log('beforeDestroy');
  },
  destroyed:function(){
    console.log('Destroyed');
  },
  methods: {
    destroy(){
      this.$destroy();
    }
  }
})


