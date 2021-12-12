/**
 * 問題：
 * クロージャーの問題で作成した以下のcalcFactoryを即時関数
 * で書き直してみてください。
 */
let calc = (function (val) {
  function plus(target) {
    const newVal = val + target;
    console.log(`${val} + ${target} = ${newVal}`);
    val = newVal;
  }
  function minus(target) {
    const newVal = val - target;
    console.log(`${val} - ${target} = ${newVal}`);
    val = newVal;
  }
  function multiply(target) {
    const newVal = val * target;
    console.log(`${val} x ${target} = ${newVal}`);
    val = newVal;
  }
  function divide(target) {
    const newVal = val / target;
    console.log(`${val} / ${target} = ${newVal}`);
    val = newVal;
  }

  return {
    plus,
    minus,
    multiply,
    divide,
  };
})(10);

calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);
