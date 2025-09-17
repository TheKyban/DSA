const arr = [
    [1, 2, 3],
    [5, 6, 7],
    [8, 9, 10],
];

/**
 * diagonal
 * output = [1,2,5,3,6,8,7,9,10]
 */

function traverseDiagonally(arr: number[][]): number[] {
    const result: number[] = [];
    // first half
    const cols = arr[0].length;
    const rows = arr.length;

    for (let col = 0; col < cols; col++) {
        let i = 0;
        let j = col;
        while (i < rows && j >= 0) {
            result.push(arr[i++][j--]);
        }
    }

    // second half

    for (let row = 1; row < rows; row++) {
        let i = row;
        let j = cols - 1;
        while (i < cols && j >= 0) {
            result.push(arr[i++][j--]);
        }
    }
    return result;
}

console.log(traverseDiagonally(arr));
