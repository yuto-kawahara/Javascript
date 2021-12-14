// function fn(a, b) {
//   console.log(0, 1);
// }

// fn(0, 1);

// function a() {
//   console.log("hello");
// }

// a.prop = 0;
// a.method = function () {
//   console.log("method");
// };

// a();
// a.method();
// console.log(a.prop);
// console.log(a);

// function hello(name) {
//   console.log("hello " + name);
// }

// function bye() {
//   console.log("bye");
// }
// function fn(cb) {
//   cb("Tom");
// }

// fn(hello);
// fn(bye);
// fn(function (name) {
//   console.log("hello " + name);
// });

// window.name = "John";

// // ここでのthisはpersonのこと
// const person = {
//   name: "Tom",
//   hello: function () {
//     console.log("Hello " + this.name);
//     // a();
//   },
// };

// // const ref = person.hello;
// // ref();

// person.hello();

// function a() {
//   console.log("Hello " + this.name);
// }

// const helloTom = person.hello.bind(person);

// function fn(ref) {
//   ref();
// }
// // メソッドを他の変数に代入することになるので、この場合のthis.nameはJohnを指す
// fn(helloTom);

// function a(name, name1) {
//   console.log("Hello " + name + " " + name1);
// }

// const tim = { name: "Tim" };

// const b = a.bind(tim);
// b();

// a.apply(tim, ["Tim", "Bob"]);
// a.call(tim, "Tim");

// applyとcallの違い
// 第1引数はthisの参照先のオブジェクト
// どちらも使用した時点で関数が実行される
// callはbindとほぼ同じ機能で関数の実行有無が違う点
// applyの第2引数は配列

function a(name) {
  return "Hello" + name;
}

const b = function (name) {
  return "Hello" + name;
};

const c = (name) => "Hello" + name;

window.name = "John";

const person = {
  name: "Tom",
  hello: () => {
    console.log("Hello " + this.name);
  },
};

person.hello();
