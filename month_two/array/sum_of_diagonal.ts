const arr = [
    [1, 2, 3],
    [5, 6, 7],
    [8, 9, 10],
];

function sumOfDiagonal(matrix: number[][]): number {
    let sum = 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    if (rows !== cols) {
        throw new Error("Matrix is not square");
    }

    for (let i = 0; i < rows; i++) {
        sum += matrix[i][i];
    }
    return sum;
}

console.log(sumOfDiagonal(arr));
