// main.jsの直下に書かれる変数・関数が実行コンテキストになる

// let a = 0;
// function b() {
//   console.log(this, arguments, a);
// }

// // console.log(a);
// b();

// コールスタック

// function a() {}
// function b() {
//   a();
// }
// function c() {
//   b();
// }

// c();

// ホイスティング
a();

function a() {
  let d = 1;

  console.log(d);

  e();
  function e() {
    console.log("e is called");
  }
  console.log("a is called");
}

// varのメモリ配置の仕組み

var b;
// この時点ではbはundefinedとなる、メモリ上にbの領域を確保しただけ
console.log(b);

b = 0;

console.log(b);

// letを使用した場合、メモリ上にcの領域は確保されるがjavascriptエンジンによる初期化は行われない
// constも同様
// console.log(c);

// let c = 0;
// const c = 0;
