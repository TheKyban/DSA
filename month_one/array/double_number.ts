function findTwoUnique(nums: number[]): [number, number] {
    let xor = 0;
    for (const num of nums) xor ^= num;

    const setBit = xor & -xor;
    let a = 0,
        b = 0;
    for (const num of nums) {
        if (num & setBit) a ^= num;
        else b ^= num;
    }

    return [a, b];
}
let nums = [4, 1, 1, 5];

console.log(findTwoUnique(nums));
