function findUniqueOptimized(nums: number[]): number {
    let ones = 0,
        twos = 0;

    for (const num of nums) {
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }

    return ones;
}

console.log(findUniqueOptimized([2, 2, 3, 2]));