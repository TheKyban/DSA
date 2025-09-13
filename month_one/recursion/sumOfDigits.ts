function sumOfDigit(n: number) {
    if (n === 0) return 0;
    return (n % 10) + sumOfDigit(Math.floor(n / 10));
}

const n = 15;

console.log(sumOfDigit(n));
