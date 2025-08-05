function isPowerOfTwo(n: number): boolean {
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(12));
