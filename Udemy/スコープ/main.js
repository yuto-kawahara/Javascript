// let a = 0;
// var b = 0;

// function c() {}

// debugger;

// function a() {
//   let b = 0;
//   console.log(b);
// }

// a();

// // ブロックスコープを使用する場合は、letかconstを使用する
// {
//   let c = 1;
//   const d = function () {
//     console.log("d is called");
//   };
//   console.log(c);
//   d();
// }

// d();

// レキシカルスコープ
// let a = 2;
// function fn1() {
//   // let a = 1;
//   function fn2() {
//     console.log(a);
//     // let a = 3;
//   }
//   fn2();
// }

// fn1();

// クロージャー
// プライベート変数
// function incrementFactory() {
//   let num = 0;
//   function increment() {
//     num = num + 1;
//     console.log(num);
//   }
//   return increment;
// }

// const increment = incrementFactory();

// increment();
// increment();
// increment();
// increment();

// // 動的な関数の生成
// function addNumberFactory(num) {
//   function addNumber(value) {
//     return num + value;
//   }
//   return addNumber;
// }
// const add5 = addNumberFactory(5);
// const result = add5(10);
// console.log(result);

function a() {
  console.log("called");
}

a();

//()かっこの使い道として関数の呼び出しとグループ化がある
let c = (function () {
  console.log("called");

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log("privateFn is called");
  }

  function publicFn() {
    console.log("publicFn is called" + privateVal++);
  }
  return {
    publicVal,
    publicFn,
  };
})();

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();
c.publicVal += 1;
console.log(c.publicVal);
