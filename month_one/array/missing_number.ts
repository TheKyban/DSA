function missingNumber(nums: number[]): number {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }
  return sum;
}

console.log(missingNumber([3, 0, 1]));
