function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0;
  let max_count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count > max_count) max_count = count;
  }
  return max_count;
}
