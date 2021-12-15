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
// };

function F(a, b) {
  this.a = a;
  this.b = b;
  return {};
}

F.prototype.c = function () {};
console.log(F);

// new演算子の中身
function newOpe(C, ...args) {
  console.log(C.prototype);
  // Fのprototypeを持った空のオブジェクトを作成
  const _this = Object.create(C.prototype);
  console.log(_this);
  console.log(args);
  console.log(C);
  const result = C.apply(_this, args);
  if (typeof result === "object" && result !== null) {
    return result;
  }
  return _this;
}

// newでコンストラクタ関数を呼び出す
const instance = newOpe(F, 1, 2);
const instance1 = new F(1, 2);
console.log(instance);
console.log(instance1);
