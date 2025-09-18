const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

// output [[1,4,7],[2,5,8],[3,6,9]]
function transpose(matrix: number[][]): number[][] {
    const cols = matrix[0].length;
    const rows = matrix.length;

    const transpose = new Array(cols);
    for (let i = 0; i < transpose.length; i++) {
        transpose[i] = new Array(rows);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            transpose[col][row] = matrix[row][col];
        }
    }

    return transpose;
}

console.log(transpose(matrix));
