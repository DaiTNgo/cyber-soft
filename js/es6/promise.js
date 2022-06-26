const promise = new Promise((res, rej) => {
  res([1, 2, 4, 5, 6]);
});
promise.then((data) => {
  console.log(data);
});
