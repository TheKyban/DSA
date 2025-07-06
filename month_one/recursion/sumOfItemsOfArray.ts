function sumOfItemsOfArray(arr: number[], idx: number): number {
    if (idx === 0) return arr[idx]
    return arr[idx] + sumOfItemsOfArray(arr, idx - 1)
}

let arr = [1, 2, 3, 4, 5]
console.log(sumOfItemsOfArray(arr, arr.length - 1))