const arr = [[3, 30, 38], [20], [20, 52, 54], [35, 60, 69]];
const x = 62;
function searchInMultiArray(arr: number[][], x: number): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === x) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

console.log(searchInMultiArray(arr, x));
