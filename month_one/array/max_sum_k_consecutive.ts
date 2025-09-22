function findMaxSumConsecutive(nums: number[], k: number): number {
    let max_count = 0;
    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += nums[j];
        }
        if (sum > max_count) max_count = sum;
    }
    return max_count;
}

let num = [1, 2, 3, 4, 5, 6, 7];
console.log(findMaxSumConsecutive(num, 3));
