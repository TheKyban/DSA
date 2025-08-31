function mergeSort(arr: number[], st: number, end: number) {
    if (st < end) {
        const mid = Math.floor(st + (end - st) / 2);
        mergeSort(arr, st, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, st, mid, end);
    }
}

function merge(arr: number[], st: number, mid: number, end: number) {
    const temp: number[] = [];
    let i = st;
    let j = mid + 1;

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }
    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }
    while (j <= end) {
        temp.push(arr[j]);
        j++;
    }

    // copy temp to original arrya
    for (let idx = 0; idx < temp.length; idx++) {
        arr[st + idx] = temp[idx];
    }
}

const arr = [5, 2, 7, 1, 6];
console.log(arr);
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
