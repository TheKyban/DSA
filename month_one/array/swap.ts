export function swap(arr: number[], i: number, j: number) {
    if (i === j) return;
    // using temp
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    // without temp variable
    // arr[i] = arr[i] ^ arr[j];
    // arr[j] = arr[i] ^ arr[j];
    // arr[i] = arr[i] ^ arr[j];
}
