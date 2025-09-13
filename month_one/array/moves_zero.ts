import { swap } from "./swap";

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

function moveZeroesOptimal(nums: number[]): void {
    if (nums.length <= 1) return;

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, count);
            count++;
        }
    }
}
const num = [0, 1, 0, 3, 12];
const num2 = [1, 0];
// moveZeroes(num);
// moveZeroesOptimal(num);
moveZeroesOptimal(num2);
console.log(num2);
