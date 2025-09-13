import { swap } from "./swap";

function sortUsingThreePointer(arr: number[]) {
    let z = 0;
    let m = 0;
    let t = arr.length - 1;
    while (m < t) {
        if (arr[m] === 0) {
            swap(arr, m, z);
            z++;
            m++;
        } else if (arr[m] === 2) {
            swap(arr, m, t);
            t--;
        } else {
            m++;
        }
    }
}

// const arr = [0, 2, 1, 1, 0, 2, 1, 1, 0, 0, 2];
const arr = [2, 0, 1];
sortUsingThreePointer(arr);
console.log(arr);
