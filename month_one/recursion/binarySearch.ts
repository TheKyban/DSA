function binarySearch(arr: number[], v: number, st: number, end: number) {
    if (st > end) return -1;
    const mid = st + (end - st) / 2;
    if (arr[mid] === v) return mid;
    if (v < arr[mid]) end = mid - 1;
    else st = mid + 1;
    return binarySearch(arr, v, st, end);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(binarySearch(arr, 5, 0, arr.length));
