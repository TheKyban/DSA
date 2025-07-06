function sumOfNNumbers(n: number): number {
    if (n == 1) return 1;
    return n + sumOfNNumbers(n - 1)
}

console.log(sumOfNNumbers(5))