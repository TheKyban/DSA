function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

function insertionSort(arr: number[]) {
    let j;
    for (let i = 1; i < arr.length; i++) {
        const curr = arr[i];
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > curr) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = curr;

        console.log("Step: ", arr);
    }
}

function swap<T>(arr: T[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [5, 2, 7, 1, 6];
console.log(arr);
// bubbleSort(arr);
// selectionSort(arr);
insertionSort(arr);
console.log(arr);
