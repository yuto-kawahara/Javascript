// マクロタスク
setTimeout(function task1() {
  console.log("task1");
});

// マイクロタスク
new Promise(function promise(resolve) {
  console.log("promise");
  resolve();
}).then(function job1() {
  console.log("job1");
});

console.log("global end");

// 表示順
//・promise
//・global end
//・job1
//・task1

//マクロタスクとマイクロタスクでは、マイクロタスクの方が優先順位が高い
