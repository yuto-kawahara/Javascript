new Promise(function (resolve, reject) {
  console.log("promise");
  resolve("Hello");
});

function sleep(val) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

Promise.all([sleep(2), sleep(3), sleep(4)]);

Promise.allSettled([sleep(2), sleep(3), sleep(4)]).then((data) => {
  console.log(data);
});
// sleep(0)
//   .then((val) => {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   })
//   .then(function (val) {
//     return sleep(val);
//   });
