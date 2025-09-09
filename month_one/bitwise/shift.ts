// basic approach
function countSetBits(N: number): number {
    let count = 0;
    for (let i = 1; i <= N; i++) {
        let temp = i;
        while (temp > 0) {
            count += temp & 1;
            temp = temp >> 1;
        }
    }
    return count;
}

function countSetBitsOptimized(N: number) {
    for (let i = 0; 1 << i <= N; i++) {
        console.log(i);
    }
}

console.log(countSetBits(5)); // 75
// countSetBitsOptimized(30);
