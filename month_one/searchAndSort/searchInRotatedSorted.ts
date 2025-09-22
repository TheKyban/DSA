function searchInRotatedSorted(arr: number[], k: number, n: number): number {
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === k) return mid;

        if (arr[low] <= arr[mid]) {
            if (arr[low] <= k && k <= arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (arr[mid] <= k && k <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

// const arr = [5, 6, 7, 1, 2, 3, 4];
// console.log(searchInRotatedSorted(arr, 7));

function processData(input: string) {
    //Enter your code here
    const data = input.trim().split("\n");
    const n = parseInt(data[0]);
    const arr = data[1].split(" ").map((i) => parseInt(i));
    const k = parseInt(data[2]);
    console.log(n, arr, k);
    console.log(searchInRotatedSorted(arr, k, n));
}

processData(`9
5 6 7 8 9 10 1 2 3
10`);
