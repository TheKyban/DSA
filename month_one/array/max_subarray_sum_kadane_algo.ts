function maxSum(arr: number[]) {
    let maxsum = arr[0];
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        if (maxsum < sum) maxsum = sum;
    }
    return maxsum;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
// const arr = [-3, -2, -5];
console.log(maxSum(arr));
