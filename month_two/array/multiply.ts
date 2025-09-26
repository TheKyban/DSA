function multiply(matrixOne: number[][], matrixTwo: number[][]) {
    const colOne = matrixOne[0].length;
    const rowOne = matrixOne.length;

    const colTwo = matrixTwo[0].length;
    const rowTwo = matrixTwo.length;

    if (rowOne !== colTwo || colOne !== rowTwo)
        throw new Error("Matrix cannot be multiplied");

    const result: number[][] = new Array(rowOne);

    for (let i = 0; i < rowOne; i++) {
        result[i] = new Array(colTwo);
    }

    for (let i = 0; i < rowOne; i++) {
        for (let k = 0; k < colTwo; k++) {
            let sum = 0;
            for (let j = 0; j < rowTwo; j++) {
                sum += matrixOne[i][j] * matrixTwo[j][k];
            }
            result[i][k] = sum;
        }
    }

    return result;
}

const matrixOne = [
    [1, 2],
    [3, 4],
    [5, 6],
];

const matrixTwo = [
    [1, 2],
    [4, 5],
];

multiply(matrixOne, matrixTwo)?.forEach((row) => console.log(row));
