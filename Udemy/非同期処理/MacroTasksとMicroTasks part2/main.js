// マイクロタスク
new Promise(function promise(resolve) {
  console.log("promise");
  // マクロタスク
  setTimeout(function task1() {
    console.log("task1");
    resolve();
  });
})
  .then(function job1() {
    console.log("job1");
    setTimeout(function task1() {
      console.log("task2");
      queueMicrotask(function job4() {
        console.log("job4");
      });
    });
  })
  .then(function job2() {
    console.log("job2");
  })
  .then(function job3() {
    console.log("job3");
  });

console.log("global end");

// 表示順
//・promise
//・global end
//・job1
//・task1

//マクロタスクとマイクロタスクでは、マイクロタスクの方が優先順位が高い
//マクロタスクは１つずつ実行されマイクロタスクは全て実行される
