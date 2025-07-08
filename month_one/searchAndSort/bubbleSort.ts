function bubbleSort(arr: number[]): void {
    let isSwap = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp;
                isSwap = true
            }
        }
        if (!isSwap) break;
    }
};

let nums = [5, 6, 1, 3];
bubbleSort(nums);
console.log(nums);
