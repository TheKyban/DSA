let mat = [
    [1, 3, 5],
    [3, 2, 4],
    [5, 4, 1],
];

// begineer method
function findTranspose(matrix: number[][]): number[][] {
    const temp: number[][] = matrix.slice();

    for (let i = 0; i < temp.length; i++) {
        for (let j = i; i < temp.length; i++) {
            const t = temp[i][j];
            temp[i][j] = temp[j][i];
            temp[j][i] = t;
        }
    }

    return temp;
}

// needed method
function isSymmetric(matrix: number[][]): boolean {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            if (matrix[i][j] !== matrix[j][i]) return false;
        }
    }
    return true;
}

console.log(findTranspose(mat));
console.log(isSymmetric(findTranspose(mat)));
