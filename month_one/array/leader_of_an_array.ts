function leader(arr: number[]): number[] {
    const leaders: number[] = [];
    let maxFromRight = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            leaders.unshift(arr[i]);
            maxFromRight = arr[i];
        }
    }
    return leaders;
}

const arr = [16, 17, 4, 3, 5, 2];
console.log(leader(arr));
