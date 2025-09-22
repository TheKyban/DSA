function rotate(nums: number[], k: number): void {
    let temp = [...nums];
    for (let i = 0; i < temp.length; i++) {
        nums[(i + k) % nums.length] = temp[i];
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotate(nums, k);
console.log(nums);
