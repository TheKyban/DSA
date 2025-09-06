/**
 * Brute force
 */

function isPrime(n: number) {
    let flag = true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            flag = false;
        }
    }
    return flag;
}
console.log(isPrime(23));
