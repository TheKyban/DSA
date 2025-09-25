const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

// square matrix
function rotateBy90deg(matrix: number[][]) {
    let i = 0;
    let j = 0;
    let n = matrix.length;
    while (i < n) {
        j = i;
        // transpose
        while (j < n) {
            // swap
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
            j++;
        }

        // reverse each array
        let k = 0;
        let l = n - 1;
        while (k < l) {
            const temp = matrix[i][k];
            matrix[i][k] = matrix[i][l];
            matrix[i][l] = temp;
            k++;
            l--;
        }

        i++;
    }
}

rotateBy90deg(mat);
mat.forEach((m) => console.log(m));
