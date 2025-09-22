const arr = [1, 2, 3, 4, 5];

// Write a program to insert an element at a given index in an array.
function insertInto(num: number, idx: number) {
    if (idx >= arr.length) return;
    for (let i = arr.length - 2; i >= idx; i--) {
        const temp = arr[i];
        arr[i + 1] = temp;
    }
    arr[idx] = num;
}

// Write a program to delete an element from an array.
function deleteElement(idx: number) {
    if (idx >= arr.length) return;
    for (let i = idx; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
}

deleteElement(2)

console.log(arr);
