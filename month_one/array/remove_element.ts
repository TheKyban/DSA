function removeElement(nums: number[], val: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (val !== nums[i]) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}

console.log(removeElement([1, 2, 3, 4, 5, 5, 6], 5));
