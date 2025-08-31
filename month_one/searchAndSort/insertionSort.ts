function insertionSort(arr: number[]) {
    let j: number;
    for (let i = 1; i < arr.length; i++) {
        const num = arr[i];
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] > num) {
                // sifting
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        // place
        arr[j + 1] = num;
    }
}

const arrTosortUsingInsertion = [5, 6, 1, 3];
console.log(arrTosortUsingInsertion);
insertionSort(arrTosortUsingInsertion);
console.log(arrTosortUsingInsertion);
