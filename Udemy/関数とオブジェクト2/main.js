// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   // this.hello = function () {
//   //   console.log("hello " + this.name);
//   // };
// }

// Person.prototype.hello = function () {
//   console.log("hello " + this.name);
// };

// const bob = new Person("Bob", "18");
// const tom = new Person("Tom", "33");
// const sun = new Person("Sun", "20");

// bob.hello();

// bob.bye = function () {
//   console.log("bye");
// // };

// function Temp(a, b) {
//   this.a = a;
//   this.b = b;
//   // return {};
// }

// Temp.prototype.c = function () {};
// // console.log(F);

// // new演算子の中身
// function newOpe(C, ...args) {
//   // 関数が引数として渡ってくる
//   console.log(C);
//   // prototypeにはcが格納されている
//   console.log("1.C.prototype: ", C.prototype);
//   // Fのprototypeの参照を持った空のオブジェクトを_thisとして作成
//   const _this = Object.create(C.prototype);
//   console.log("2._this: ", _this);

//   console.log("3.args: ", args);
//   console.log("4.C: ", C);
//   const result = C.apply(_this, args);
//   console.log(_this);
//   console.log("5.result", result);
//   if (typeof result === "object" && result !== null) {
//     return result;
//   }
//   console.log("6._this: ", _this);
//   return _this;
// }

// // // newでコンストラクタ関数を呼び出す
// const instance = newOpe(Temp, 1, 2);
// const instance2 = newOpe(Temp, 1, 2);
// const instance1 = new Temp(1, 2);

// instance.d = 1;
// console.log(instance);
// console.log(instance2);
// console.log(instance1);

// function F(a, b) {
//   this.a = a;
//   this.b = b;
// }

// F.prototype.c = function () {};

// const instance = new F(1, 2);
// console.log(instance instanceof F);
// console.log(instance.prototype === F.prototype);

// function fn(arg) {
//   if (arg instanceof Array) {
//     arg.push("value");
//   } else {
//     arg["key"] = "value";
//   }
//   console.log(arg);
// }

// fn([]);

// const fn = new Function("a", "b", "return a + b");

// const result = fn(1, 2);
// console.log(result);

// function fn2(a, b) {
//   return a + b;
// }
// // fn2もFuncitonコンストラクタから生成されたインスタンスである = fn2はオブジェクトである
// console.log(fn2 instanceof Function);

// const obj = new (function () {
//   this.a = 0;
// })();

// // new functionは無名関数から作成したオブジェクトインスタンス
// // new Functionは関数を作成するためのコンストラクタになるので関数のオブジェクト
// const fn3 = new Function("this.a = 0;");
// // オブジェクトインスタンスとしたい場合は、再度newで呼び出す
// const obj3 = new fn3();
// console.log(obj3);

// const dump = function () {
//   console.log("this is ", this);
// };
// const obj = new dump();
// // 新規作成されたオブジェクト
// console.log(obj);
// console.log(dump.prototype);
// console.log(obj !== dump.prototype);

// const foo = {
//   name: "Foo Object",
//   dump() {
//     console.log(this);
//   },
// };
// foo.dump();

// function Person(name, age){
//   this.name = name;
//   this.age = age;
//   this.hello = function(){
//     console.log("OwnProperty: hello " + this.name);
//   }
// }

// Person.prototype.hello = function(){
//   console.log("Person: hello " + this.name);
// }
// Person.prototype.gender = "male";

// Object.prototype.hello = function (){
//   console.log("Object: hello " + this.name);
// }

// const bob = new Person("Bob", 18);
// bob.hello();
// helloメソッドは階層の浅い方から探しに行く
// 全てのオブジェクトはObject.prototypeを継承元としている

// hasOwnPropertyはそのオブジェクト自身のプロパティのみ検索
// hasOwnPropertyの場合はメソッドは検索対象ではないためfalseになる
// プロトタイプチェーンのメリットとしてObjectのメソッドが使いまわせるようになるのでメモリが効率的に利用できる
// const result = bob.hasOwnProperty("gender");
// console.log(result);
// inを使用するとプロトタイプチェーンを辿ってプロパティやメソッドが存在するかを確認できる
// console.log("name" in bob);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.hello = function(){
//   console.log("hello " + this.name);
// }

// function Japanese(name, age){
//   Person.call(this, name, age);
// }
// ある関数のprototypeを別の関数のprototypeにコピーすることをプロトタイプ継承と呼ぶ
// Japanese.prototype = Object.create(Person.prototype);

// Personのプロトタイプとは独立して存在しているので継承元のprototypeは影響を受けない
// Japanese.prototype.greet = function(){
//   console.log("konnitiwa " + this.name);
// }

// const taro = new Japanese("Taro", 23);
// console.log(taro);

// taro.greet();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello(){
    console.log("hello " + this.name);
  }
}

const bob = new Person("Bob", 23);
console.log(bob);
