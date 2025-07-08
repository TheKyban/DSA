function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1
    let mid = high - Math.ceil((high - low) / 2)

    while (low != high) {
        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            high = mid - 1;
            mid = high - Math.ceil((high - low) / 2)
        } else {
            low = mid + 1
            mid = high - Math.ceil((high - low) / 2)
        }

    }

    if (nums[mid] === target) return mid
    return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(search(arr, 11))