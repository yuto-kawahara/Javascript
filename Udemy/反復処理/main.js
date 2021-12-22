// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i < 5; i++) {
//   // ループごとにjは全く別のメモリ空間に値を保持することになる
//   const j = i * 2;

//   setTimeout(function () {
//     console.log(j);
//   }, 1000);
// }

// const arry = [1, 2, 3, 4, 5];

// for (let i = 0; i < arry.length; i++) {
//   console.log(arry[i]);
// }
// let v,
//   i = 0;
// while ((v = arry[i++])) {
//   console.log(v);
// }
// const s = Symbol();
// const obj = {
//   prop1: "value1",
//   prop2: "value2",
//   prop3: "value3",
//   [s]: "value4",
// };

// Object.prototype.method = function () {};
// 上記で追記したメソッドも列挙対象になる
// オブジェクトのプロトタイプのdefinePropertyの第一引数に対象のオブジェクトのプロトタイプを指定し、
// 第二引数に除外したいメソッド名、第三引数にenumerableを設定すると、for...inの列挙対象にプロトタイプのメソッドが含まれなくなる
// Object.defineProperty(Object.prototype, "method", {
//   enumerable: false,
// });
// Object.defineProperty(obj, "prop2", {
//   enumerable: false,
// });

// const d = Object.getOwnPropertyDescriptor(Object.prototype, "method");
// console.log(d);
// ビルトインオブジェクトはデフォルトでenumerableがfalseになっており、列挙対象にならない
// for (let key in obj) {
// if (obj.hasOwnProperty(key)) {
// console.log(key, obj[key]);
// }
// }

// const arry = ["a", "b", "c"];

// // for...ofの場合、definePropertyのenumerableは参照されない
// for (let v of arry) {
//   console.log(v);
// }

const map = new Map();
const key1 = {};
map.set(key1, "value1");
console.log(map.get(key1));

const key2 = function () {};
map.set(key2, "value2");
console.log(map.get(key2));

let key3;
map.set((key3 = 0), "value3");

// map.delete(key3);
// console.log(map.get(0));

// for (const [k, v] of map) {
//   console.log(k, v);
// }

const s = new Set();
s.add(key1);
s.add(key2);
s.add(key3);
s.delete(key3);

console.log(s.has(key3));

for (let k of s) {
  console.log(k);
}
