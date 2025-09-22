function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    let mid = high - Math.ceil((high - low) / 2);

    while (low != high) {
        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            high = mid - 1;
            mid = high - Math.ceil((high - low) / 2);
        } else {
            low = mid + 1;
            mid = high - Math.ceil((high - low) / 2);
        }
    }

    if (nums[mid] === target) return mid;
    return -1;
}

function recursiveSearch(
    nums: number[],
    target: number,
    low: number,
    high: number
): number {
    if (low > high) return -1;
    const mid = low + Math.floor((high - low) / 2);

    if (target === nums[mid]) return mid;

    if (target < nums[mid]) return recursiveSearch(nums, target, low, mid - 1);
    else return recursiveSearch(nums, target, mid + 1, high);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(recursiveSearch(arr, 10, 0, arr.length - 1));
