const arr = [
    [3, 5, 2, 1],
    [1, 7, 0, -4],
    [9, 2, 10, 7],
];

/**
 * [
 * [-4,0,1,1]
 * [2,2,3,5]
 * [7,7,9,10]
 * ]
 */

const temp = arr.flat();

temp.sort((a, b) => a - b);

let k = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = temp[k++];
    }
}

console.log(arr);
