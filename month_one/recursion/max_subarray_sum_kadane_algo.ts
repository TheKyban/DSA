function maxSum(arr: number[]) {
    let maxsum = arr[0];
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i]);
        if (maxsum < sum) maxsum = sum;
    }
    return maxsum;
}

function maxSubarrayRecursive(
    arr: number[],
    i: number = 0,
    currentSum: number = 0,
    maxSoFar: number = -Infinity
): number {
    if (i === arr.length) return maxSoFar;

    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSoFar = Math.max(maxSoFar, currentSum);

    return maxSubarrayRecursive(arr, i + 1, currentSum, maxSoFar);
}
const arr = [2, 3, -8, 7, -1, 2, 3];
// const arr = [-3, -2, -5];
console.log(maxSum(arr));
console.log(maxSubarrayRecursive(arr));
