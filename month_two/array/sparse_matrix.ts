function sparseMatrix(arr: number[][]): void {
    const rows = arr.length;
    const cols = arr[0].length;
    let size = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] !== 0) {
                size++;
            }
        }
    }

    const result: number[][] = [];
    for (let i = 0; i < size; i++) {
        result[i] = new Array(3);
    }
    let k = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] !== 0) {
                result[k][0] = i;
                result[k][1] = j;
                result[k][2] = arr[i][j];
                k++;
            }
        }
    }
    console.log("Row Col Value");
    result.forEach((item) => {
        console.log(item);
    });
}

const sm = [
    [0, 0, 3],
    [5, 0, 0],
    [0, 0, 0],
];
sparseMatrix(sm);
