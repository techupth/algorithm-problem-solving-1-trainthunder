function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        arr.push(i, j);
      }
    }
  }
  return arr;
}
console.log(twoSum([2, 7, 11, 15], 17));
console.log(twoSum([2, 7, 11, 15], 23));
/** Test Case */
// console.log(twoSum([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 20));
