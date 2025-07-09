function sortArr(nums: number[]) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
}

let numArr = [64, 24, 12, 22, 11]
sortArr(numArr)
console.log(numArr)