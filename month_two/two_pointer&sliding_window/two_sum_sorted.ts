function twoSum(nums: number[], target: number): number[] {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        if (nums[start] + nums[end] === target) return [start, end];
        if (nums[start] + nums[end] > target) end--;
        if (nums[start] + nums[end] < target) start++;
    }
    return [];
}

const nums = [2, 7, 11, 15],
    target = 9;
console.log(twoSum(nums, target));
