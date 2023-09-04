function array() {
  setTimeout(() => {
    console.log([1, 2, 3, 4, 5]);
  }, 500);
}

array();
console.log(2);
