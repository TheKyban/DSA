function pascalTriangle(n: number): number[][] {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const temp: number[] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                temp.push(1);
            } else {
                temp.push(arr[i - 1][j] + arr[i - 1][j - 1]);
            }
        }
        arr.push(temp);
    }

    return arr;
}

console.log(pascalTriangle(5));
