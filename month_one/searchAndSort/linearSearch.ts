function searchElement<z>(arr: z[], target: z, idx: number = 0): number {
    if (idx >= arr.length) return -1;
    if (arr[idx] === target) return idx;
    return searchElement(arr, target, ++idx)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(searchElement(arr, 1))