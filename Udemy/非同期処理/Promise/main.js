new Promise(function (resolve, reject) {
  console.log("promise");
  resolve("Hello");
})
  .then(function (data) {
    console.log("then" + data);
    // throw new Error();
  })
  .then(function (data) {
    console.log("then");
  })
  .catch(function (data) {
    console.log("catch");
  })
  .finally(function (data) {
    console.log("finally");
  });

console.log("global end");
