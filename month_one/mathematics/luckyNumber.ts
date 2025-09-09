function isLucky(n: number, step: number = 2): boolean {
    if (n < step) return true;
    if (n % step === 0) return false;
    n = n - Math.floor(n / step);
    return isLucky(n, step + 1);
}
console.log(isLucky(7)); // true
console.log(isLucky(8)); // false
console.log(isLucky(13)); // true
console.log(isLucky(14)); // false
console.log(isLucky(3)); // true
console.log(isLucky(5)); // true