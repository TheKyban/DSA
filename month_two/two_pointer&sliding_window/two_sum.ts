function twoSum(nums: number[], target: number): number[] {
    let i = 0;
    let j = nums.length - 1;
    const indices: number[] = [];

    while (i <= j) {
        if (i === j) {
            i++;
            j = nums.length - 1;
        }
        if (i !== j && nums[i] + nums[j] === target) {
            indices.push(i, j);
            break;
        }
        j--;
    }
    return indices;
}

const nums = [2, 7, 11, 15],
    target = 9;
console.log(twoSum(nums, target));
