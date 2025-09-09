function singleNumber(nums: number[]): number {
  let num = nums[0];
  for (let i = 1; i < nums.length; i++) {
    num ^= nums[i];
  }
  return num;
}
let nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));
