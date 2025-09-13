// Normal
function fibonacciSeries(n: number) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
}

// Memoization
const memo = new Map();
function fibonacciWithMemoization(n: number) {
    if (!!memo[n]) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    memo[n] = fibonacciWithMemoization(n - 1) + fibonacciWithMemoization(n - 2);
    return memo[n];
}

console.log(fibonacciWithMemoization(6));
