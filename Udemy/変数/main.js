// function prinEquality(a, b) {
//   console.log(a === b);
//   console.log(a == b);
// }

// let a = "1";
// let b = 1;

// let c = true;

// // 抽象的な等価性の場合、暗黙の型変換が行われる
// console.log(b === Number(c));
// prinEquality(b, c);

// let e = "";
// let f = 0;
// let g = "0";
// // この場合、eの文字列がNumberによって数値(0)に変換されるため抽象的等価性ではtrueになる
// prinEquality(g, f);

// let a = 0;
// console.log(Boolean(a));

// function hello(name = "Tom") {
//   console.log("hello " + name);
// }

// hello();
// let name = "";
// name && hello(name);

// let a = "hello";
// let b = a;

// b = "bye";
// console.log(a, b);

// let c = {
//   prop: "hello",
// };

// let d = c;
// d = {};
// console.log(c, d);

// const a = "hello";

// const b = {
//   prop: "hello",
// };

// // b = {};
// b.prop = "bye";
// console.log(b);

// let a = 0;

// function fn1(arg1) {
//   arg1 = 1;
//   console.log(a, arg1);
// }

// fn1(a);

// let b = {
//   prop: 0,
// };

// function fn2(arg2) {
//   arg2.prop = 1;
//   console.log(b, arg2);
// }

// fn2(b);

// const a = {
//   prop: 0,
// };
// // 分割代入で使用する値とプロパティ名は一致させる必要がある
// let { prop } = a;

// prop = 1;
// console.log(a, prop);

// function fn({ prop }) {
//   // let { prop } = obj;
//   prop = 1;
//   console.log(a, prop);
// }
// fn(a);

// const c = {
//   prop1: {
//     prop2: 0,
//   },
// };
// // 分割代入の値がオブジェクトの場合、オブジェクトの参照先が渡されるので、
// // 参照先の値を変更した場合、参照元のオブジェクトも変更される
// let { prop1 } = c;
// console.log(prop1);
// prop1.prop2 = 1;
// console.log(c, prop1);

const a = {
  prop: 0,
};

const b = {
  prop: 0,
};

console.log(a.prop === b.prop);

const c = a;
console.log(c === a);
