let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reverseArr(arr: number[]) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[i] ^ arr[j];
        arr[i] = arr[i] ^ arr[j];
        i++;
        j--;
    }
}
reverseArr(arr);
console.log(arr);
