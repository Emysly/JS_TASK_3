function range(num) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 0 && array[j] % 3 === 0 && array[j] % 5 === 0) {
      array[j] = "yu-gi-oh";
    }
    if (array[j] % 2 === 0 && array[j] % 3 === 0) {
      array[j] = "yu-gi";
    }
    if (array[j] % 2 === 0 && array[j] % 5 === 0) {
      array[j] = "yu-oh";
    }
    if (array[j] % 2 === 0) {
      array[j] = "yu";
    }
    if (array[j] % 3 === 0) {
      array[j] = "gi";
    }
    if (array[j] % 5 === 0) {
      array[j] = "oh";
    } else {
      array[j] = array[j];
    }
  }
  console.log(array);
}
range(10);
