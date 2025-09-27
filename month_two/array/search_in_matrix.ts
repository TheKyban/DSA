function searchMatrix(matrix: number[][], target: number) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let i = 0,
        j = cols - 1;

    while (i < rows && j >= 0) {
        console.log(i, j);
        if (matrix[i][j] === target) {
            return { row: i, col: j };
        } else if (matrix[i][j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return null;
}

let matrix = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50],
];

let target = 29;
let result = searchMatrix(matrix, target);

console.log(result);
