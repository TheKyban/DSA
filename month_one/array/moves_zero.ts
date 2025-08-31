function moveZeroes(nums: number[]): void {
    let k = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            for (let j = i; j < k; j++) {
                nums[j] = nums[j + 1];
            }
            nums[k] = 0;
            k--;
        }
    }
}
const num = [0, 1, 0, 3, 12];
moveZeroes(num);
console.log(num); //[ 1, 3, 12, 0, 0 ]
