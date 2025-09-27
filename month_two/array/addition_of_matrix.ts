const arr = [
    [1, 2, 3],
    [5, 6, 7],
    [8, 9, 10],
];

function additionOfTwoMatrix(arr1: number[][], arr2: number[][]): number[][] {
    const oneRows = arr1.length;
    const OneCols = arr1[0].length;
    const twoRows = arr2.length;
    const twoCols = arr2[0].length;

    if (oneRows !== twoRows || OneCols !== twoCols) {
        throw new Error("Matrices dimensions do not match");
    }

    const result: number[][] = [];

    for (let i = 0; i < oneRows; i++) {
        result[i] = [];
        for (let j = 0; j < OneCols; j++) {
            result[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    return result;
}

additionOfTwoMatrix(arr, arr).forEach((row) => console.log(row));
