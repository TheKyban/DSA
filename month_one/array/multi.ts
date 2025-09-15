const n = 5;
const arr = new Array(5);
for (let i = 0; i <= n; i++) {
    arr[i] = new Array(5);
    for (let j = 0; j < n; j++) {
        arr[i][j] = i + j + 1;
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
